import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";
export default class LineCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Page Views",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Sessions",
          data: [11, 32, 45, 32, 34, 52, 41],
          color: "#003EB3",
        },
      ],
      options: {
        chart: {
          height: 100,
          type: "area",
          toolbar: {
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={400}
            width={800}
          />
        </div>
      </div>
    );
  }
}
