import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage.backup";
import { routeMap } from "./routeMap";
import { commandsRoutes } from "../features/commands/routes";

// Add all route paths in routeMap
export { routeMap };

// Create routes
export const appRouter = createBrowserRouter([
  {
    path: routeMap.home,
    element: <HomePage />,
  },
  // vscode starts the application calling this:
  // /index.html?
  //     id=a5e77028-1a17-495b-a18d-e68087e39cda
  //   & origin=388d3571-9dac-4986-b403-a0e70e4f3c5a
  //   & swVersion=4
  //   & extensionId=undefined_publisher.liligpt
  //   & platform=electron
  //   & vscode-resource-base-authority=vscode-resource.vscode-cdn.net
  //   & parentOrigin=vscode-file%3A%2F%2Fvscode-app
  //   & remoteAuthority=wsl%2Bubuntu
  {
    path: routeMap.vscodeHome,
    element: <HomePage />,
  },
  ...commandsRoutes,
]);
