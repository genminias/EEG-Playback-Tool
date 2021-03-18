import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import "firebase/firestore";

export function Recording () {
    const { user } = useNotion();
    const [snapshot, setSnapshot] = useState([]); // is it an array ? maybe it's a {}
    const [recordingName, setRecordingName] = useState(""); //change or add one for id to pull URL in onSubmit()
    const [loading, setLoading] = useState(true);
    // const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) { // || submitting
            navigate("/login");
        }

        setLoading(true);
        getMemories(); //I'm afraid that if this rerenders it might just keep appending names
        setLoading(false);

        // we need error handling here
        async function getMemories() {
            const memoriesRef = notion.__getApp().firestore().collection("memories");
            const snapshot = await memoriesRef
                .where("type", "==", "epoch")
                .where("userId", "==", user.uid)
                .get()
                .catch((error) => { // not sure if this catch works
                    setError(error.message);
                });
            console.log(typeof snapshot); //test - object
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
                });
            console.log(snapshot.length) //test - undefined
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
        event.preventDefault(); // idk what this actually does...
        console.log("ayeo"); //test
        // setSubmitting(true);
        //add function that loads dataset here
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
                        {loading ? "Loading Recordings..." : "Select"}
                    </button>
                </div>
            </form>
        </main>
        )
}