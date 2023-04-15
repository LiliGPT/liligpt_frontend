import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { appTheme } from "./lib/theme";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";
import { KeycloakAuthentication } from "./components/auth/KeycloakAuthentication";

const App = ({ vscode }: any) => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <KeycloakAuthentication>
            <RouterProvider router={appRouter} />
          </KeycloakAuthentication>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
export default App;
// ReactDOM.render(<App />, document.getElementById("app"));
