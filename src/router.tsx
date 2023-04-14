import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { CreatePackageJsonPage } from "./pages/commands/PackageJson/CreatePackageJsonPage";
import { routeMap } from "./lib/routeMap";

export const appRouter = createBrowserRouter([
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
    path: routeMap.home,
    element: <HomePage />,
  },
  {
    path: routeMap.vscodeHome,
    element: <HomePage />,
  },
  {
    path: routeMap.createPackageJson,
    element: <CreatePackageJsonPage />,
  },
]);
