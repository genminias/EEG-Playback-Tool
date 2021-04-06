import React, { useEffect, useContext } from "react";
import Chart from "chart.js";
import { render } from "react-dom";
import { eegContent } from "../pages/Dashboard";

/**
 * Player component - UNDER CONSTRUCTION
 * Plays back pre-recorded EEG data
 */
export function Player() {
    const { eegJsonInfo } = useContext(eegContent);

    useEffect(() => {
        const ctx = document.getElementById("myChart");
        
        console.log(typeof eegJsonInfo); //test - object
        console.log(eegJsonInfo.channels); //test - error: cannot read property "channels" of null

        new Chart(ctx, {
            type: "line",
            labels: ["label1", "label2"],
            data: [42, 69],
            options: {
                maintainAspectRatio: false
            }
        });
    });

    return(
        <div className="graph">
            <canvas id="myChart" width="700" height="600" />
        </div>
    );
    // var ctx = document.getElementById("canvas").getContext("2d");
    // var eegGraph = new Chart(ctx).Line(data);
    // var data = {
    //     labels: ["Channel 1", "Channel 2", "3", "4", "5", "6", "7"], //will adjust labels based on channel names from dataset, this is just a sample
    //     datasets: [ //each channel will be a separate line with different colors
    //         {fillColor: "rgba(220,220,220,0.2)",
    //          strokeColor: "rgba(220,220,220,1)",
    //          // data: [] this we will get from our global variable, this contains plot points [x,y]
    //         },
    //         {fillColor: "rgba(151,187,205,0.2)",
    //          strokeColor: "rgba(151,187,205,1)",
    //          // data: [] this we will get from our global variable, this contains plot points [x,y]
    //         }
    //         //... etc based on how many channels we have
    //     ]};

}

function readData() {
   //  var eegdata = { /* the global json variable */};
    // $.getJSON("var/eeg.json", function(data) {
         //example of mapping json data to dataset needed for line graph
       /* var labels = data.test_data.map(function(e) {
           return e[0];
        });
        var data = data.test_data.map(function(e) {
           return e[1]; */
        //})
    // lineChartData = {};             //declare an object
    // lineChartData.labels  = [];    //add 'labels' element to object (X axis)
    // lineChartData.datasets = [];  //add 'datasets' array element to object

}

function pause() {

}

function play() {

}

function rewind() {

}

function scroll() {

}