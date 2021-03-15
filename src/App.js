import React, { useEffect } from "react";
import { Router, navigate } from "@reach/router";

import { ProvideNotion } from "./services/notion";
import { Devices } from "./pages/Devices";
import { Loading } from "./components/Loading";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Analysis } from "./pages/Analysis";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
// import { Recordings } from "./pages/Recordings";


import { useNotion } from "./services/notion";

export function App() {
  return (
    <ProvideNotion>
      <Routes/>
    </ProvideNotion>
  );
}

function Routes() {
  const { user, loadingUser } = useNotion();

  useEffect(() => {
    if (!loadingUser && !user) {
      navigate("/login");
    }
  }, [user, loadingUser]);

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <Router>
      <Dashboard path="/" />
      <Analysis path="/analysis" />
      <Devices path="/devices" />
      <Login path="/login" />
      <Logout path="/logout" />
      <Settings path="/settings" />
      {/* <Recordings path="/recordings" /> */}
    </Router>
  );
}
