import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import { Nav } from "../components/Nav";

export function Calm() {
  const { user } = useNotion();
  const [calm, setCalm] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      return;
    }

  }, [user]);

  return (
    <main className="main-container">
      {user ? <Nav /> : null}
    </main>
  );
}
