import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";

const Tabledashboard = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(159, "Frozen yoghurt", 6.0, 24, 4.0),
    createData(237, "Ice cream sandwich", 9.0, 37, 4.3),
    createData(262, "Eclair", 16.0, 24, 6.0),
    createData(305, "Cupcake", 3.7, 67, 4.3),
    createData(356, "Gingerbread", 16.0, 49, 3.9),
    createData(356, "Gingerbread", 16.0, 49, 3.9),
    createData(356, "Gingerbread", 16.0, 49, 3.9),
    createData(16.0, "Gingerbread", 356, 49, 3.9),
  ];

  return (
    <div>
      <Card
        className="card card2"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          component={Paper}
          style={{ padding: "2%", paddingTop: "3.5%", paddingBottom: "3.5%" }}
        >
          <div sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead sx={{ width: "100%" }}>
              <TableRow>
                <TableCell>Traking No</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Tabledashboard;
