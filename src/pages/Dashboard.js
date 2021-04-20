import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";

import { useNotion } from "../services/notion";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { Recording } from "../components/Recording";

export const eegContent = React.createContext();

/**
 * Main page on app
 * Displays a user's recordings, device status, and the EEG playback tool/graph
 */
export function Dashboard() {
    const { user } = useNotion();
    const [eegSamples, setEegSamples] = useState(new Object);
    const [dataCheck, setDataCheck] = useState(false);

    useEffect(() => {
        if (!user) {
          navigate("/login");
        }
      }, [user]);

      return (
        <main className="dashboard">
          <Header />
          <eegContent.Provider value={{value1: [eegSamples, dataCheck], value2: [setEegSamples, setDataCheck]}}>
            <div className="dash-row">
              <div className="dash-column">
                <Recording />
                {user ? <Nav /> : null}
              </div>
              <div className="dash-column">
                <Player />
              </div>
            </div>
          </eegContent.Provider>
        </main>
      );
}