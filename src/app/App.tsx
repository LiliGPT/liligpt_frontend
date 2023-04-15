import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { appTheme } from "./theme";
import { appRouter } from "../router";
import { KeycloakAuthentication } from "../features/auth/KeycloakAuthentication";
import "./index.scss";
import { store } from "./store";

const App = ({ vscode }: any) => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Provider store={store}>
            <KeycloakAuthentication>
              <RouterProvider router={appRouter} />
            </KeycloakAuthentication>
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
export default App;
// ReactDOM.render(<App />, document.getElementById("app"));
