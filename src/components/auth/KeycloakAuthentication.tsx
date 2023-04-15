import React from 'react';
import Keycloak from 'keycloak-js';
import { useEffect, useState } from 'react';

const keycloak = new Keycloak({
  url: 'https://ec2-34-205-134-224.compute-1.amazonaws.com:28081',
  realm: 'liligpt',
  clientId: 'account',
});

export const KeycloakAuthentication = ({ children }: any) => {
  const [loginError, setLoginError] = useState<string>('');

  useEffect(() => {
    keycloak.init({
      onLoad: 'login-required',
      // checkLoginIframe: false,
    }).then((authenticated) => {
      if (authenticated) {
        console.log('User is authenticated');
        localStorage.setItem('accessToken', keycloak.token!);
      } else {
        console.log('User is not authenticated');
        setLoginError('Failed to log in');
      }
    });
  }, []);

  if (loginError) {
    return <div>{loginError}</div>;
  }

  return <div>Authenticated resource: <>{children}</></div>;
};
