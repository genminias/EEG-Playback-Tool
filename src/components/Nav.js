import React from "react";
import { navigate } from "@reach/router";

import { Status } from "./Status";
import { Footer } from "./Footer";

export function Nav() {
  function goToLogout() {
    navigate("/logout");
    window.location.reload(false);
  }
  function goToSettings() {
    navigate("/settings");
  }


  return (
    <nav className="card">
      <Status />
      <button onClick={goToLogout} className="card-btn">
        Logout
      </button>
      {/* <button onClick={analysis} className="card-btn">
        Analysis
      </button>
      <button onClick={hyperlink to dev console} className="card-btn">
        Dev Console
      </button>
      <button onClick={share data} className="card-btn">
        Share Data
      </button>
      <button onClick={status component} className="card-btn">
        Status
      </button>*/}
      <button onClick={goToSettings} className="card-btn">
        Settings
      </button>
      <Footer />
    </nav>
  );
}
