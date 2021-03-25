import React, { useEffect } from "react";
import { navigate } from "@reach/router";

import { useNotion } from "../services/notion";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
// import { Player } from "../components/Player";
import { Graph } from "../components/Graph"; /* this should be added straight to player */
import { Recording } from "../components/Recording";

/**
 * Main page on app
 * Displays a user's recordings, device status, and the EEG playback tool/graph
 */
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
          <div className="dash-row">
            <div className="dash-column">
              <Recording /> 
              {user ? <Nav /> : null}
            </div>
            <div className="dash-column">
              <Graph />
            </div>
          </div>
        </main>
      );
}