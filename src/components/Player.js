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
    //const samplingRate = 250;
    const sampleScale = 120;

    useEffect(() => {
        const ctx = document.getElementById("myChart");

        if (dataCheck === true) {
            console.log("made it"); //test
            for (var i = 0; i < eegSamples.length; i++) {
                channel1.push(+eegSamples[i].data[0] + (sampleScale * 7));
                channel2.push(+eegSamples[i].data[1] + (sampleScale * 6));
                channel3.push(+eegSamples[i].data[2] + (sampleScale * 5));
                channel4.push(+eegSamples[i].data[3] + (sampleScale * 4));
                channel5.push(+eegSamples[i].data[4] + (sampleScale * 3));
                channel6.push(+eegSamples[i].data[5] + (sampleScale * 2));
                channel7.push(+eegSamples[i].data[6] + sampleScale);
                channel8.push(+eegSamples[i].data[7]);
                if (i == 0) {
                    timestamps.push(0);
                }
                else {
                    timestamps.push((eegSamples[i].timestamp - eegSamples[i-1].timestamp) + timestamps[i-1]);
                }
            }
            console.log(timestamps); //test
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
            borderColor: 'blue'
            };

        var graphChannel3 = {
            label: "Channel 3",
            data: channel3,
            lineTension: 0,
            fill: false,
            borderColor: 'yellow'
        };

        var graphChannel4 = {
            label: "Channel 4",
            data: channel4,
            lineTension: 0,
            fill: false,
            borderColor: 'purple'
        };

        var graphChannel5 = {
            label: "Channel 5",
            data: channel5,
            lineTension: 0,
            fill: false,
            borderColor: 'orange'
        };

        var graphChannel6 = {
            label: "Channel 6",
            data: channel6,
            lineTension: 0,
            fill: false,
            borderColor: 'green'
        };

        var graphChannel7 = {
            label: "Channel 7",
            data: channel7,
            lineTension: 0,
            fill: false,
            borderColor: 'navy'
        };

        var graphChannel8 = {
            label: "Channel 8",
            data: channel8,
            lineTension: 0,
            fill: false,
            borderColor: 'pink'
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
                },
            },
            scales: {
                yAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            },
            elements: {
                point: {
                    radius: 0
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
        <div className="chartWrapper">
            <div className="graph">
                <canvas id="myChart" width="15000" height="600" />
            </div>
        </div>
    );

}


function pause() {

}

function play() {

}

function rewind() {

}

function scroll() {

}