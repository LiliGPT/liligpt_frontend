import React from "react";
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

const userManager = new UserManager({
  // authority: process.env.REACT_APP_KEYCLOAK_URL!,
  // client_id: process.env.REACT_APP_KEYCLOAK_CLIENT_ID!,
  authority: `${process.env.REACT_APP_KEYCLOAK_URL}/auth/realms/${process.env.REACT_APP_KEYCLOAK_REALM}/`,
  client_id: process.env.REACT_APP_KEYCLOAK_CLIENT_ID!,
  redirect_uri: process.env.REACT_APP_PUBLIC_URL || "http://localhost:28090",
});

const App = ({ vscode }: any) => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Provider store={store}>
            <AuthProvider userManager={userManager}>
              <RouterProvider router={appRouter} />
            </AuthProvider>
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
export default App;
// ReactDOM.render(<App />, document.getElementById("app"));
