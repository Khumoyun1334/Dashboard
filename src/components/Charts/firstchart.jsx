import { Card, CardContent } from "@mui/material";
import React from "react";
import LineCharts from "./linecharts";

const Firstchart = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <div>
            <LineCharts />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Firstchart;
