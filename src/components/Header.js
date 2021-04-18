import React from "react";

/**
 * Header component
 * Used in dashboard
 */
const styles = {
    fontSize: "64px",
    color: "#231e50",
    // flexDirection:'row',
    // textAlign: "center",
    // justifyContent: 'center',
    // alignItems: 'baseline'
    // display: 'baseline'
    // margin: 1

    // alignSelf: "stretch"
};

export function Header() {
    return (
        <div className="title">
            <div className="dash-row2">
                {/* <img src="src/components/Neurosity.png" ></img> */}
            {/* <div style={styles}>   */}
                <div className="dash-column">
                <img src="http://localhost:3000/favicon.png" alt="Neurosity_Logo"/>
                </div>
                {/* console.log (src); */}
            {/* </div> */}
            <div className="dash-column">
             <h1 style={styles}>NEUROSITY:  EEG Playback Tool</h1>
            </div>

            </div>
        </div>
    );
}

