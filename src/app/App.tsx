import React, { useEffect, useState } from "react";
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
import { vscodeClient } from "../features/vscode/vscodeClient";

// const defaultAuthorityUrl = `${process.env.REACT_APP_KEYCLOAK_URL}/auth/realms/${process.env.REACT_APP_KEYCLOAK_REALM}/`;

interface AppProps {
  authorityUrl?: string;
  vscode: VSCodeAPI;
}

const App = ({ vscode }: AppProps) => {
  useEffect(() => {
    console.log(`vscode: `, vscode);
    vscodeClient.setVscode(vscode);
  }, []);

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Provider store={store}>
            <RouterProvider router={appRouter} />
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
export default App;
// ReactDOM.render(<App />, document.getElementById("app"));
