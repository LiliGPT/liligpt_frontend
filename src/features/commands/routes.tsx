import React from "react";
import { CreatePackageJsonPage } from "../../pages/commands/PackageJson/CreatePackageJsonPage";
import { routeMap } from "../../router";

export const commandsRoutes = [
  {
    path: routeMap.createPackageJson,
    element: <CreatePackageJsonPage />,
  },
];
