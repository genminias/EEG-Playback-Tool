import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import "firebase/firestore";

export function Recording () {
    const { user } = useNotion();
    const [snapshot] = useState([]);

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
            snapshot.forEach(doc => {
                // const memory = doc.data();
                // dataFunction(memory.id).then(console.log);
                console.log(doc.data().name);
                
            });
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

    return(
        <main className="main-container">
            {/* <form className="card login-form" onSubmit={onSubmit}> */}
                <div className="row">
                    <label>Select a Recording</label>
                    <select
                    name="recordingSelect"
                    value="recording"
                    >
                        {snapshot.map((doc) => (
                            <option key={doc.data().id} value={doc.data().id}>
                                {doc.data().name}
                            </option>
                        ))}
                    </select>
                </div>
            {/* </form> */}
        </main>
        )
    }