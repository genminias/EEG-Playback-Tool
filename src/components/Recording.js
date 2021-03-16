import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import "firebase/firestore";

export function Recording () {
    const { user } = useNotion();
    const [snapshot, setSnapshot] = useState([]);
    const [recordingName, setRecordingName] = useState("");
    const [loading, setLoading] = useState(true);
    // const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) {
          navigate("/login");
        }
      }, [user]);

    useEffect(() => {
        if (!user) { // || submitting
            return;
        }

        setLoading(true);

        // we need error handling here
        getMemories();
        async function getMemories() {
            const memoriesRef = notion.__getApp().firestore().collection("memories");
            const snapshot = await memoriesRef
                .where("type", "==", "epoch")
                .where("userId", "==", user.uid)
                .get()
                .catch((error) => { //literally no idea if this will work
                    setError(error.message);
                });
            setSnapshot(snapshot);
            var select = document.getElementById("recordingSelect");
            snapshot
                .forEach(doc => {
                    // const memory = doc.data();
                    // dataFunction(memory.id).then(console.log);
                    // console.log(doc.data());
                    var opt = doc.data().name;
                    var el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    select.appendChild(el);
                })
            setLoading(false);
            console.log(snapshot.length) //test
        }
    }, [user, snapshot]);

    /* USE HTTP REQUEST to get URL to download, also don't use data() unless we want everything ???? */

    function dataFunction(memoryId) {
        return notion.__getApp()
            .functions()
            .httpsCallable("samplesConverter")({
              memoryId: memoryId,
              formatType: "json"
            })
    }

    function onSubmit(event) {
        event.preventDefault();
        // setSubmitting(true);
        //add function that loads dataset here
    }

    return(
        <main className="recordings-container">
            <form className="recordings-form" onSubmit={onSubmit}>
                {!!error ? <h4 className="recordings-error">{error}</h4> : null}
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
                    <button type="submit" className="recordings-button" disabled={loading}>
                        {loading ? "Loading Recordings..." : "Select"}
                    </button>
                </div>
            </form>
        </main>
        )
}