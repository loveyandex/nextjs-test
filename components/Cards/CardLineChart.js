import React from "react";
import Chart from "chart.js";
import { useState, useEffect } from 'react';
import { infoService } from "services/info.service";


export default function CardLineChart(props) {
 

  useEffect(() => {
    // let gamers = JSON.parse(localStorage.getItem("gamers"))
    let gamers =props.gamers;
    console.log(props)

    let t ="props. gamers.map(t => t.user.createdDate).map((t, i) => new Date(t * 1e3).toLocaleDateString('fa-IR'))"
    console.log(t)

    let Str = t
    var obj = new Object();
    for (var i = 0; i < Str.length; i++) {
      if (obj[Str[i]] != null) {
        obj[Str[i]] += 1;
      } else {
        obj[Str[i]] = 1;
      }
    }
    console.log(obj);
    let newusers = Object.values(obj);
    let times = Object.keys(obj);



    var config = {
      type: "line",
      data: {
        labels: times,
        datasets: [
          {
            // label: new Date().getFullYear(),
            backgroundColor: "#ffc107",
            borderColor: "#ffc107",
            data: newusers,
            fill: false,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          display: false,
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);

    
  });


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                 
              </h6>
              <h2 className="text-white text-xl font-semibold"> بازیکن های جدید</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
