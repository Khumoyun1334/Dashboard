import React from "react";
import { AiFillGift } from "react-icons/ai";
// import Image from "../../Assets/Images/download (1).png";
// import Image2 from "../../Assets/Images/download2.png";
// import Image3 from "../../Assets/Images/download3.png";
// import Image4 from "../../Assets/Images/download4.png";
// import ListDashboard from "../ListDashboardPage";
import { Avatar, ButtonGroup, Card, IconButton } from "@mui/material";

const Listmain = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          backgroundColor: "white",
          padding: "20px",
          border: "1px solid #C1C1C1",
          borderRadius: "8px",
        }}
      >
        {/* <ListDashboard /> */}
        <div
          className="card"
          sx={{ display: "grid", height: "138px", mt: "6%", padding: "5%" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p
                style={{
                  fontSize: "15px",
                  color: "#262626",
                  fontWeight: "600",
                }}
              >
                Help & Support Chat
              </p>
              <p style={{ color: "#8c8c8c", fontSize: "12px" }}>
                Typical replay within 5 min
              </p>
            </div>
            <ButtonGroup
              style={{ display: "flex", gap: "5%", paddingRight: "9%" }}
            >
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    position: "relative",
                    zIndex: "5",
                    border: "2px solid white",
                  }}
                  alt="Remy Sharp"
                  src={""}
                />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    position: "absolute",
                    zIndex: "4",
                    border: "2px solid white",
                  }}
                  alt="Remy Sharp"
                  src={""}
                />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    position: "relative",
                    zIndex: "3",
                    border: "2px solid white",
                  }}
                  alt="Remy Sharp"
                  src={""}
                />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    position: "absolute",
                    zIndex: "2",
                    border: "2px solid white",
                  }}
                  alt="Remy Sharp"
                  src={""}
                />
              </IconButton>
            </ButtonGroup>
          </div>
          <div>
            <IconButton
              style={{
                width: "100%",
                height: "30px",
                marginTop: "30px",
                background: "#1677FF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0",
                fontSize: "13px",
                color: "white",
              }}
            >
              Need Help?
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listmain;
