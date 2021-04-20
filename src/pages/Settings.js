import React from "react";
import { navigate } from "@reach/router";

/**
 * Settings page - UNDER CONSTRUCTION
 * Will be able to change misc. app settings from here
 */
export function Settings() {
    function goToDashboard() {
        navigate("/");
    }
    
    return (
        <nav className="card">
            <h1> This is where the settings would be. If I had any!</h1>
            <button onClick={goToDashboard} className="card-btn">
                Back
            </button>
        </nav>
    );
}