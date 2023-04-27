import React from "react";
import { useAuth, hasAuthParams } from "react-oidc-context";

export const BasePage = ({ children }: any) => {
  const auth = useAuth();

  // automatically sign-in
  React.useEffect(() => {
    if (
      !hasAuthParams() &&
      !auth.isAuthenticated &&
      !auth.activeNavigator &&
      !auth.isLoading
    ) {
      auth.signinRedirect();
    }
  }, [
    auth.isAuthenticated,
    auth.activeNavigator,
    auth.isLoading,
    auth.signinRedirect,
  ]);

  if (auth.activeNavigator) {
    return <div>Signing you in/out...</div>;
  }
  if (!auth.isAuthenticated) {
    return <div>Unable to log in</div>;
  }

  return <div>{children}</div>;
};
