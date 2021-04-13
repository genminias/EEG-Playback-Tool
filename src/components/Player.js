import React, { useEffect, useContext } from "react";
import Chart from "chart.js";
import { render } from "react-dom";
import { eegContent } from "../pages/Dashboard";

/**
 * Player component - UNDER CONSTRUCTION
 * Plays back pre-recorded EEG data
 */
export function Player() {
    const { value1 } = useContext(eegContent);
    const [eegSamples, dataCheck] = value1;
    var channel1 = []; var channel2 = []; var channel3 = []; var channel4 = []; 
    var channel5 = []; var channel6 = []; var channel7 = []; var channel8 = [];
    var timestamps = [];
    const samplingRate = 250;

    useEffect(() => {
        const ctx = document.getElementById("myChart");

        if (dataCheck === true) {
            console.log("made it");
            for (var i = 0; i < eegSamples.length; i++) {
                channel1.push(eegSamples[i].data[0]);
                channel2.push(eegSamples[i].data[1]);
                channel3.push(eegSamples[i].data[2]);
                channel4.push(eegSamples[i].data[3]);
                channel5.push(eegSamples[i].data[4]);
                channel6.push(eegSamples[i].data[5]);
                channel7.push(eegSamples[i].data[6]);
                channel8.push(eegSamples[i].data[7]);
                timestamps.push(i);
            }
            console.log(eegSamples.length);
        }

        var graphChannel1 = {
            label: "Channel 1",
            data: channel1,
            lineTension: 0,
            fill: false,
            borderColor: 'red'
            };

        var graphChannel2 = {
            label: "Channel 2",
            data: channel2,
            lineTension: 0,
            fill: false,
            borderColor: 'red'
            };

        var graphChannel3 = {
            label: "Channel 3",
            data: channel3,
            lineTension: 0,
            fill: false,
            borderColor: 'red'
        };

        var graphChannel4 = {
            label: "Channel 4",
            data: channel4,
            lineTension: 0,
            fill: false,
            borderColor: 'red'
        };

        var graphChannel5 = {
            label: "Channel 5",
            data: channel5,
            lineTension: 0,
            fill: false,
            borderColor: 'red'
        };

        var graphChannel6 = {
            label: "Channel 6",
            data: channel6,
            lineTension: 0,
            fill: false,
            borderColor: 'red'
        };

        var graphChannel7 = {
            label: "Channel 7",
            data: channel7,
            lineTension: 0,
            fill: false,
            borderColor: 'red'
        };

        var graphChannel8 = {
            label: "Channel 8",
            data: channel8,
            lineTension: 0,
            fill: false,
            borderColor: 'red'
        };

        var eegGraphData = {
            labels: timestamps,
            datasets: [graphChannel1, graphChannel2,graphChannel3,graphChannel4,graphChannel5,graphChannel6,graphChannel7,graphChannel8]
        };
        var chartOptions = {
            legend: {
                display: true,
                position: 'top',
                labels: {
                boxWidth: 80,
                fontColor: 'black'
            }
            }
        };
        new Chart(ctx, {
            type: "line",
            data: eegGraphData,
            options: chartOptions
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

function parseData(sampleInfo) {
    console.dir(sampleInfo[0]);
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