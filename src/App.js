import React, { useEffect } from "react";
import { Router, navigate } from "@reach/router";

import { ProvideNotion } from "./services/notion";
import { Loading } from "./components/Loading";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Analysis } from "./pages/Analysis";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";

import { useNotion } from "./services/notion";

/**
 * Main function that routes all pages
 * Prompts a user to login if they weren't already logged in
 */
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
      <Login path="/login" />
      <Logout path="/logout" />
      <Settings path="/settings" />
    </Router>
  );
}
