import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import "firebase/firestore";

/**
 * Displays a user's recordings
 * A user can select a recording for use in our playback tool
 */
export function Recording () {
    const { user } = useNotion();
    const [recordingName, setRecordingName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [recordingsInfo, setRecordingsInfo] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }

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
                    console.log(typeof eegDoc); //test - object
                    console.log(eegDoc.channels); //test - this works it returns 8 !
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
                <div className="row">
                    <select
                        id="recordingSelect"
                        value={recordingName}
                        disabled={loading}
                        onChange={(e) => setRecordingName(e.target.value)}
                    >
                        <option>Choose a recording</option>
                    </select>
                </div>
                <div className="row">
                    <button type="submit" className="card-button" disabled={loading}>
                        {loading ? "Loading Recordings..." : "Select Recording"}
                    </button>
                    <button onClick={() => window.location.reload(false)}>Update Recordings</button> {/* is there a way to refresh the component instead of the whole page ? */}

                </div>
            </form>
        </main>
        )
}