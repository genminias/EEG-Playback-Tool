import React, { useEffect, useState, useContext } from 'react';
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import "firebase/firestore";
//import { contextBridge } from 'electron';
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

        setDataCheck(false); //make sure this is in the right place
        setLoading(true);
        getMemories();
        setLoading(false);

        // we need error handling here, ex: if there's no recordings
        async function getMemories() {
            var tempInfo = [];
            const memoriesRef = notion.__getApp().firestore().collection("memories");
            const snapshot = await memoriesRef
                .where("type", "==", "epoch")
                .where("userId", "==", user.uid)
                .get()
                .catch((error) => { // not sure if this catch works
                    setError(error.message);
                });
            var select = document.getElementById("recordingSelect");
            snapshot.forEach(doc => {
                /* const memory = doc.data();
                dataFunction(memory.id).then(console.log); */
                //console.log(doc.data());
                tempInfo.push(doc.data());
                var opt = doc.data().name;
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            });
            setRecordingsInfo(tempInfo);
        }
    }, [user]);

    /* function dataFunction(memoryId) {
        return notion.__getApp()
            .functions()
            .httpsCallable("samplesConverter")({
              memoryId: memoryId,
              formatType: "json"
            })
    } */

    function onSubmit(event) {
        event.preventDefault(); // do we want this to happen ?
        for (var i = 0; i < recordingsInfo.length; i++) {
            if (recordingName == recordingsInfo[i].name) {
                console.log("found " + recordingsInfo[i].name + " " + recordingsInfo[i].json); //test
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.onload = (event) => {
                    var eegDoc = xhr.response;
                    setEegSamples(eegDoc.samples);
                    setDataCheck(true);
                    console.log(typeof eegDoc); //test - object
                    console.log(eegDoc.channels); //test - this works it returns 8 !
                    console.log(eegDoc.samples[0].data[0]); //test
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
                        <button type="submit" className="card-btn" disabled={loading} onClick={() => window.location.reload(false)}>Update Recordings</button> {/* is there a way to refresh the component instead of the whole page ? */}

            </form>
        </main>
        )
}