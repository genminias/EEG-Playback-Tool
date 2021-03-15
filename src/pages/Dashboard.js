import React, { useEffect } from "react";
import { navigate } from "@reach/router";

import { useNotion } from "../services/notion";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { Graph } from "../components/Graph"; /* this should be added straight to player */
import { Recording } from "../components/Recording";

export function Dashboard() {
    const { user } = useNotion();

    useEffect(() => {
        if (!user) {
          navigate("/login");
        }
      }, [user]);

      return (
        <main className="dashboard">
            <Header />
            <Recording /> 
            {user ? <Nav /> : null}
            <Graph />
        </main>
      );
}