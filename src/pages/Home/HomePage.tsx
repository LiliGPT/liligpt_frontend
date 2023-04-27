import React, { useEffect } from "react";
import { vscodeClient } from "../../features/vscode/vscodeClient";

export const HomePage = (): JSX.Element => {
  const onClick = () => {
    // window.open do not work in sandboxed iframe
    // window.open("https://www.google.com", "_blank");
    console.log('[frontend] onCLick login!!!');
    vscodeClient.login();
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={onClick}>click to login using vscode</button>
    </div>
  );
};
