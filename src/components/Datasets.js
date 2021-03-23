import React, { useEffect } from "react";
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import "firebase/firestore";

export function Datasets() {
    const { user } = useNotion();

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
                // /* console.log(doc.data()); */
                
            });
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
        <main className="datasets">
            <div className="mems">
                <h1>test</h1>
            </div>
        </main>
    );
}
