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

    /*useEffect(() => {
        if (!user) {
            return;
        }
        const memoriesRef = notion.__getApp().firestore.collection("memories");
        memoriesRef.where("type", "==", "epoch").get();
        if (memoriesRef.empty) {
            return (<h2>No memories exist</h2>);
        }
        document.write(memoriesRef.length);
    });

    return(
        <main className="datasets">
            <div className="mems">
                <h1>test</h1>
            </div>
        </main>
    );*/
}
