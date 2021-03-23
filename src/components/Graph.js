import React, { useEffect } from "react";
import Chart from "chart.js";
import { render } from "react-dom";
/*import classes from "./LineGraph.module.css";*/

let myLineChart;

export function Graph() {

    useEffect(() => {
        const ctx = document.getElementById("myChart");

        new Chart(ctx, {
            type: "line",
            labels: ["label1", "label2"],
            data: [42, 69]
        });
    });

    return(
        <div className="graph">
            <canvas
                id="myChart"
            />
        </div>
    );
}
