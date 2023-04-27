import React from "react";
import { useAuth, hasAuthParams } from "react-oidc-context";

export const BasePage = ({ children }: any) => {
  return <div>{children}</div>;
};
