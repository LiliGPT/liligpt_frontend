import React, { useEffect } from "react";
import HomeCardList from "./HomeCardList";
import MessageSender from "./MessageSender";
import { useKeycloak } from "@react-keycloak/web";

export const HomePage = (): JSX.Element => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  if (!isLoggedIn) {
    return <div>Not logged in</div>;
  }
  
  // TODO: refactor this
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log("message from extension to webview", event.data);
    });
  }, []);

  return (
    <>
      <div className="mt-10 text-3xl mx-auto max-w-6xl px-4">
        <MessageSender />
        <br />
        <h4>Choose an Action</h4>
      </div>
      <div className="mt-10">
        <HomeCardList />
      </div>
    </>
  );
};
