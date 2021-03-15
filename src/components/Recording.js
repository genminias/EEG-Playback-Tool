import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import "firebase/firestore";

export function Recording () {
    const { user } = useNotion();
    // const [snapshot, setSnapshot] = useState([]);
    // const [recordingName, setRecordingName] = useState("");

    useEffect(() => {
        if (!user) {
          navigate("/login");
        }
      }, [user]);

    useEffect(() => {
        if (!user) {
            return;
        }
        getMemories();
        async function getMemories() {
            const memoriesRef = notion.__getApp().firestore().collection("memories");
            const snapshot = await memoriesRef.where("type", "==", "epoch").where("userId", "==", user.uid).get();
            //setSnapshot(snapshot);
            var select = document.getElementById("recordingSelect");
            snapshot.forEach(doc => {
                // const memory = doc.data();
                // dataFunction(memory.id).then(console.log);
                // console.log(doc.data());
                var opt = doc.data().name;
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            });
            console.log(snapshot.length)
        }
    }, [user]);

    /* USE HTTP REQUEST to get URL to download, also don't use data() unless we want everything ???? */

    function dataFunction(memoryId) {
        return notion.__getApp()
            .functions()
            .httpsCallable("samplesConverter")({
              memoryId: memoryId,
              formatType: "json"
            })
    }

    return(
        <main className="recordings-container">
            <div className="row">
                <select id="recordingSelect">
                    <option>Choose a recording</option>
                </select>
            </div>
        </main>
        )
    }