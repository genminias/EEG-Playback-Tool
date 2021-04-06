import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";

import { useNotion } from "../services/notion";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { Recording } from "../components/Recording";

export const eegContent = React.createContext({eegJsonInfo: null, setEegJsonInfo: () => {}});


/**
 * Main page on app
 * Displays a user's recordings, device status, and the EEG playback tool/graph
 */
export function Dashboard() {
    const { user } = useNotion();
    const [eegJsonInfo, setEegJsonInfo] = useState(null);

    useEffect(() => {
        if (!user) {
          navigate("/login");
        }
      }, [user]);

      return (
        <main className="dashboard">
          <Header />
          <eegContent.Provider value={{eegJsonInfo, setEegJsonInfo}}>
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