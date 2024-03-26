import React from "react";
import "./linecharts";
import "./style.css";
import { Box, Card } from "@mui/material";
import Listmain from "./listmain";
import LineCharts2 from "./linecharts2";
import Firstchart from "./firstchart";
import BarChartteal from "./barchartteal";
import Tabledashboard from "./tabledashboard";
import Yellowchart from "./yellowchart";
import Nmadr from "../Nimadr";
import DashboardComp from "../DashboardComp";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { LineChart } from "@mui/x-charts";
// import LineCharts from "./linecharts";

function Chart() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        <DashboardComp />
        <DashboardComp />
        <DashboardComp />
        <DashboardComp />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "center",
        }}
        className="grid grid-cols-2 mt-[3%] gap-6"
      >
        <Card style={{ width: "100%", marginLeft: "10px" }}>
          <Firstchart />
        </Card>
        <Card style={{ width: "100%", marginLeft: "10px" }}>
          <BarChartteal />
        </Card>
        <Card style={{ width: "100%", marginLeft: "10px" }}>
          <Tabledashboard />
        </Card>
        <Card style={{ width: "100%", marginLeft: "10px" }}>
          <Yellowchart />
        </Card>
        <Card style={{ width: "100%", marginLeft: "10px" }}>
          <LineCharts2 />
        </Card>
        <Box>
          <Nmadr />
          <div className="mt-5">
            <Listmain />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Chart;
