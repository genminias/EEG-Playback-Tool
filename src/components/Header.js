import React from "react";

/**
 * Header component
 * Used in dashboard
 */
const styles = {
    fontSize: "48px",
    color: "#231e50",
    // flexDirection:'row',
    // textAlign: "center",
    // justifyContent: 'center',
    // alignItems: 'baseline'
    // display: 'baseline'
    margin: 1,
    padding: "50px"

    // alignSelf: "stretch"
};

export function Header() {
    return (
        <div className="dash-row2">
            <img src="http://localhost:3000/favicon.png" alt="Neurosity_Logo"/>
            <h2 style={styles}>Neurosity : EEG Playback Tool</h2>
            </div>
    );
}

