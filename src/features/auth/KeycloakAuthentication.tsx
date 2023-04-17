import React from 'react';
import Keycloak from 'keycloak-js';
import { useEffect, useState } from 'react';
import { memento } from '../../storage';

console.log('Keycloak options', {
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
});

const keycloak = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL!,
  realm: process.env.REACT_APP_KEYCLOAK_REALM!,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID!,
});

export const KeycloakAuthentication = ({ children }: any) => {
  const [loginError, setLoginError] = useState<string>('');

  useEffect(() => {
    const lastLoginTime: number = parseInt(`${memento.get<number>('_kcAuthTime')}`) || 0;
    console.log('lastLoginTime', lastLoginTime);
    const currentLoginTime = Date.now();
    const secondsSinceLastLogin = (currentLoginTime - lastLoginTime) / 1000;
    console.log('secondsSinceLastLogin', secondsSinceLastLogin);

    if (secondsSinceLastLogin > 30) {
      if (!keycloak.token) {
        console.log('Token found, initializing Keycloak ', keycloak.token);
        // if (keycloak.token === lastLoginTime) {
        if (!keycloak.token) {
          console.log('No token found, initializing Keycloak');
          keycloak.init({
            onLoad: 'login-required',
            checkLoginIframe: true,
            useNonce: false,
            // checkLoginIframe: false,
          }).then((authenticated) => {
            console.log('Keycloak initialized', authenticated);
            if (authenticated) {
              memento.update('_kcAuthTime', Date.now());
            } else {
              console.log('User is not authenticated');
              setLoginError('Failed to log in: User is not authenticated');
              memento.update('_kcAuthTime', 0);
            }
          }).catch((error) => {
            if (error) {
              console.log('Failed to initialize Keycloak', error);
              setLoginError('Failed to log in: Failed to initialize Keycloak');
              memento.update('_kcAuthTime', 0);
            }
          });
        }
      } else {
        if (keycloak.isTokenExpired()) {
          // todo: test this function
          console.log('Token expired, refreshing...');
          keycloak.updateToken(30).then((refreshed) => {
            console.log('Token refreshed', refreshed);
            if (refreshed) {
              memento.update('_kcAuthTime', Date.now());
            } else {
              console.log('Failed to refresh token');
              setLoginError('Failed to log in');
              memento.update('_kcAuthTime', 0);
            }
          }).catch((error) => {
            console.log('Failed to refresh token', error);
            setLoginError('Failed to log in');
            memento.update('_kcAuthTime', 0);
          });
        }
      }
    }
  }, []);

  if (loginError) {
    return <div>{loginError}</div>;
  }

  return <div>Authenticated resource: <>{children}</></div>;
};
