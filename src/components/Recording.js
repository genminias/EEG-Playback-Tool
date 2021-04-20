import React, { useEffect, useState, useContext } from 'react';
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import "firebase/firestore";
import { eegContent } from "../pages/Dashboard";

/**
 * Displays a user's recordings
 * A user can select a recording for use in our playback tool
 */
export function Recording() {
    const { user } = useNotion();
    const [recordingName, setRecordingName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [recordingsInfo, setRecordingsInfo] = useState([]);
    const { value2 } = useContext(eegContent);
    const [setEegSamples, setDataCheck] = value2;

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }

        if (user) {
            setDataCheck(false);
            setLoading(true);
            getMemories();
            setLoading(false);
            
            async function getMemories() {
                var tempInfo = [];
                const memoriesRef = notion.__getApp().firestore().collection("memories");
                const snapshot = await memoriesRef
                    .where("type", "==", "epoch")
                    .where("userId", "==", user.uid)
                    .get()
                    .catch((error) => {
                        setError(error.message);
                    });
                var select = document.getElementById("recordingSelect");
                snapshot.forEach(doc => {
                    tempInfo.push(doc.data());
                    var opt = doc.data().name;
                    var el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    select.appendChild(el);
                });
                setRecordingsInfo(tempInfo);
            }
        }
    }, [user]);

    function onSubmit(event) {
        event.preventDefault();
        for (var i = 0; i < recordingsInfo.length; i++) {
            if (recordingName == recordingsInfo[i].name) {
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.onload = (event) => {
                    var eegDoc = xhr.response;
                    setEegSamples(eegDoc.samples);
                    setDataCheck(true);
                };
                xhr.open('GET', recordingsInfo[i].json);
                xhr.send();
            }
        }
    }

    return(
        <main className="recordings-container">
            <form className="card recordings-form" onSubmit={onSubmit}>
                {!!error ? <h4 className="card-error">{error}</h4> : null}
                <h3 className="card-heading">
                    <span role="img" aria-label="My Recordings">
                        ⚙️
                    </span>
                    <label>Select a Recording</label>
                    <div className="status-item select-recording">
                        <select
                            id="recordingSelect"
                            value={recordingName}
                            disabled={loading}
                            onChange={(e) => setRecordingName(e.target.value)}
                        >
                            <option>Select Recording</option>
                        </select>
                    </div>
                </h3>

                <button type="submit" className="card-btn" disabled={loading}>
                    {loading ? "Loading Recordings..." : "Select Recording"}
                </button>
                <button type="submit" className="card-btn" disabled={loading} onClick={() => window.location.reload(false)}>Update Recordings</button>

            </form>
        </main>
        )
}