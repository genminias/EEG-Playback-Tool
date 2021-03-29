//This is Devices and Status combined to get rid of Devices page
import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

import { notion, useNotion } from "../services/notion";

const statesLabels = {
  booting: "Starting OS...",
  shuttingOff: "Shutting off...",
  updating: "Updating OS...",
  online: "Online",
  offline: "Offline"
};

const stateColors = {
  booting: "darkslategrey",
  shuttingOff: "darkslategrey",
  updating: "orange",
  online: "limegreen",
  offline: "crimson"
};

export function Status() {
  const { status, selectedDevice } = useNotion();
  const { state, charging, battery, sleepMode } = status || {};
  const { user, lastSelectedDeviceId } = useNotion();
  const [devices, setDevices] = useState([]);                   //from Devices.js
  const [draftDeviceId, setDraftDeviceId] = useState("");       //from Devices.js
  const [loading, setLoading] = useState(true);                 //from Devices.js
  const [submitting, setSubmitting] = useState(false);          //from Devices.js
  const [error, setError] = useState("");                       //from Devices.js

  // This block of code from Devices.js
  useEffect(() => {
    if (!user || submitting) {
      return;
    }

    setLoading(true);

    notion
      .getDevices()
      .then((devices) => {
        setDevices(devices);
        if (devices.length) {
          setDraftDeviceId(
            lastSelectedDeviceId
              ? lastSelectedDeviceId
              : devices[0].deviceId
          );
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user, lastSelectedDeviceId, submitting]);

  function onSubmit(event) {
    event.preventDefault();
    setSubmitting(true);

    notion
      .selectDevice((devices) =>
        devices.find((device) => device.deviceId === draftDeviceId)
      )
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  // This block of code from Devices.js


  if (!status) {
    return <div>Connecting to device...</div>;
  }

  return (
    <aside>
      {selectedDevice ? (
        <h3 className="card-heading">
            <span role="img" aria-label="My Devices">
            ⚙️
            </span>

            {/* This block of code from Devices.js */}
            <label>Select a Device </label> 
            <select
              name="deviceSelect"
              value={draftDeviceId}
              disabled={loading}
              onChange={(e) => setDraftDeviceId(e.target.value)}
            >
              {devices.map((device) => (
                <option key={device.deviceId} value={device.deviceId}>
                  {device.deviceNickname || device.modelName}
                </option>
              ))}
            </select>
          {/* This block of code from Devices.js */}




           
            {/* &nbsp;&nbsp;
            {selectedDevice.deviceNickname} */}
          {/* </Link> */}
        </h3>
      ) : null}
      <div className="status-item status-state">
        <span
          className="status-indicator"
          style={{ background: getStatusColor(state) }}
        ></span>
        {state in statesLabels ? statesLabels[state] : state}
      </div>
      {state !== "offline" ? (
        <div className="status-item status-battery">
          <ChargingIcon /> &nbsp;{charging ? "Charging" : "Charged"}
          &nbsp;{battery}%
        </div>
      ) : null}
      {sleepMode && state !== "offline" ? (
        <div className="status-item status-sleep-mode">
          <SleepModeIcon /> &nbsp;Sleep mode
        </div>
      ) : null}
    </aside>
  );
}

function getStatusColor(state) {
  if (state in stateColors) {
    return stateColors[state];
  }

  return stateColors.offline;
}

function ChargingIcon() {
  return (
    <span role="img" aria-label="Electricity">
      &#x26A1;
    </span>
  );
}

function SleepModeIcon() {
  return (
    <span role="img" aria-label="The Moon">
      &#127769;
    </span>
  );
}
