import React from "react";
import { navigate } from "@reach/router";

import { Status } from "./Status";
import { Footer } from "./Footer";

export function Nav() {
  function goToLogout() {
    navigate("/logout");
  }
  function goToSettings() {
    navigate("/settings");
  }
  function goToRecordings() {
    navigate("/recordings");
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
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        How
      </button>
      <button onClick={goToRecordings} className="card-btn">
        You
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Like
      </button>
      <button onClick={goToRecordings} className="card-btn">
        These
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Buttons?
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        Recordings
      </button>
      <button onClick={goToRecordings} className="card-btn">
        (┛◉Д◉)┛彡┻━┻
      </button>
      <button onClick={goToRecordings} className="card-btn">
        ┬─┬ノ( º _ ºノ)
      </button>
      <button onClick={goToRecordings} className="card-btn">
        We made 500 buttons for you ¯\_(ツ)_/¯
      </button>
      <Footer />
    </nav>
  );
}
