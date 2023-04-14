import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { appTheme } from "./lib/theme";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";

const App = ({ vscode }: any) => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
export default App;
// ReactDOM.render(<App />, document.getElementById("app"));
