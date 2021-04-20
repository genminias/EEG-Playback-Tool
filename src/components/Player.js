import React, { useEffect, useContext } from "react";
import Highcharts from 'highcharts';
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
    const sampleScale = 110;

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
                channel8.push(+eegSamples[i].data[7] + 10 );
                if (i == 0) {
                    timestamps.push(0);
                }
                else {
                    timestamps.push((eegSamples[i].timestamp - eegSamples[i - 1].timestamp) + timestamps[i - 1]);
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
            datasets: [graphChannel1, graphChannel2, graphChannel3, graphChannel4, graphChannel5, graphChannel6, graphChannel7, graphChannel8]
        };

        var maximum = channel1.length / 275;


        var removeSVG = function(rem) {
            rem.element.remove();
        };

        var a = function(x, y) {
            console.log("x,y in timeout--", x, y);
            var rem = chart.renderer.rect(y, x, 100, 5, 10).attr({
              fill: 'red',
              stroke: 'black',
              'stroke-width': 2
            }).add();

            var timeId = window.setTimeout(function() {
              removeSVG(rem)
            }, 100);

        };

        var animation = function() {

            let loc = chart.series[0].points;

            for (let i = 0; i < loc.length; i++) {

              var x = loc[i].plotX;
              var y = loc[i].plotY;
              timeout(i, x, y);


            }

        };

        var timeout = function(i, x, y) {
            window.setTimeout(function() {
              a(x, y);
            }, i * 100);
          }

        var chart = Highcharts.chart('container', {
            chart: {
              type: 'line',
              inverted: 'true',
              events: {
                  load: function () {
                   var chart = this;
                   console.log("hello dfgbhnj");
                 var myInt = setInterval(function () {
                 
                 if (channel1.length) {
                     chart.series[0].addPoint(channel1.shift(), true, false, false);
                     chart.series[1].addPoint(channel2.shift(), true, false, false);
                     chart.series[2].addPoint(channel3.shift(), true, false, false);
                     chart.series[3].addPoint(channel4.shift(), true, false, false);
                     chart.series[4].addPoint(channel5.shift(), true, false, false);
                     chart.series[5].addPoint(channel6.shift(), true, false, false);
                     chart.series[6].addPoint(channel7.shift(), true, false, false);
                     chart.series[7].addPoint(channel8.shift(), true, false, false);


                   var len = chart.series[0].data.length;
                   if (len > maximum) {
                           chart.xAxis[0].setExtremes(
                           len - maximum,
                           len
                       );
                   }
                   
                   chart.redraw();
                   
                   } else {
                       clearInterval(myInt);
                   }
                 }, 50)
                 
               }
              }
            },
            title: {
              text: 'EEG Data'
            },
            xAxis: [{
                 max: maximum,
                 type: 'datetime',
                 //tickPixelInterval:5,
              reversed: false, // change direction of animation
              labels: {
                step: .5
              }
            }, { // mirror axis on right side
              opposite: true,
              type: 'datetime',
              //tickPixelInterval:50,
              linkedTo: 0,
              labels: {
                step: .5
              },
              
            }],
            yAxis: {
              title: {
                text: null
              },
              _labels: {
                formatter: function() {
                  return Math.abs(this.value);
                }
              }
            },
         
            plotOptions: {
              series: {
                turboThreshold: 1,
                stacking: false,
                // animation: {
                //   duration: 1
                // }
              }
            },
         
            tooltip: {
              formatter: function() {
                return '<b>' + this.series.name + ' revenue on ' + this.point.category + '</b><br/>' +
                  'Total: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
              }
            },
         
            series: [{
              boostThreshold: 1,
              name: 'Channel 1',
              data: []
            }, {
              boostThreshold: 1,
              name: 'Channel 2',
              data: []
            },{
              boostThreshold: 1,
                name: 'Channel 3',
                data: []
              },{
                boostThreshold: 1,
                name: 'Channel 4',
                data: []
              },{
                boostThreshold: 1,
                name: 'Channel 5',
                data: []
              },{
                boostThreshold: 1,
                name: 'Channel 6',
                data: []
              },{
                boostThreshold: 1,
                name: 'Channel 7',
                data: []
              },{
                boostThreshold: 1,
                name: 'Channel 8',
                data: []
              }],

              responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'center'
                        }
                    }
                }]
            }

          });
          animation();
    });
const styles = {
    minWidth: "900px",
    maxWidth: "1000px",
    height: "1200px",
    margin: "0 auto"
};
    return (
        <div className="chartWrapper">
            <div className="graph">
                <div id="container" style={styles} />
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