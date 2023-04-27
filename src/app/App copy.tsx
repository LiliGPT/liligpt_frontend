import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { appTheme } from "./theme";
import { appRouter } from "../router";
import "./index.scss";
import { store } from "./store";
import { keycloakInstance } from "../features/auth/keycloak";
import { AuthProvider, AuthProviderUserManagerProps } from "react-oidc-context";
import { UserManager } from "oidc-client-ts";
import { vscodeClient } from "../features/vscode/vscodeClient";

const defaultAuthorityUrl = `${process.env.REACT_APP_KEYCLOAK_URL}/auth/realms/${process.env.REACT_APP_KEYCLOAK_REALM}/`;

interface AppProps {
  authorityUrl?: string;
  vscode: VSCodeAPI;
}

const App = ({ vscode, authorityUrl=defaultAuthorityUrl }: AppProps) => {
  const [userManager, setUserManager] = useState<UserManager | undefined>();

  useEffect(() => {
    console.log(`App authorityUrl: ${authorityUrl}`);
    console.log(`vscode: `, vscode);
    vscodeClient.setVscode(vscode);
    const _userManager = new UserManager({
      // authority: process.env.REACT_APP_KEYCLOAK_URL!,
      // client_id: process.env.REACT_APP_KEYCLOAK_CLIENT_ID!,
      authority: authorityUrl,
      client_id: process.env.REACT_APP_KEYCLOAK_CLIENT_ID!,
      redirect_uri: process.env.REACT_APP_PUBLIC_URL || "http://localhost:28090",
    });
    setUserManager(_userManager);
  }, []);

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Provider store={store}>
            {!!userManager ? (
              <AuthProvider userManager={userManager}>
                <RouterProvider router={appRouter} />
              </AuthProvider>
            ) : (
              <div>loading authority configuration...</div>
            )}
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
export default App;
// ReactDOM.render(<App />, document.getElementById("app"));
