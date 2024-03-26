import { Button, Card } from "@mui/material";
import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImTwitter } from "react-icons/im";

function RegisterComponents() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        zIndex: "999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      <div style={{ width: "490px" }}>
        <Card style={{ padding: "8%" }}>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#000",
              marginTop: "3%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingRight: "0%",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#262626",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Sign up
              </p>
              <p style={{ fontSize: "14px" }}>Allready have an account</p>
            </div>
            <br />
            <br />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              textAlign: "start",
              gap: "6%",
              marginTop: "5%",
            }}
          >
            <label htmlFor="">
              First Name <br />
              <input
                type="text"
                style={{ width: "193px", height: "41px" }}
                placeholder="Jhon"
              />
            </label>
            <label htmlFor="">
              Last Name <br />
              <input
                type="text"
                style={{ width: "193px", height: "41px" }}
                placeholder="Doe"
              />
            </label>
            <br />
          </div>
          <div style={{ marginTop: "5%" }}>
            <label htmlFor="">
              Company <br />
              <input
                type="text"
                style={{ width: "410px", height: "41px" }}
                placeholder="demo@company.com"
              />
            </label>
          </div>
          <div style={{ marginTop: "5%" }}>
            <label htmlFor="">
              Email Address* <br />
              <input
                type="text"
                style={{ width: "410px", height: "41px" }}
                placeholder="demo@company.com"
              />
            </label>
          </div>
          <div style={{ display: "flex", marginTop: "5%" }}>
            <input
              type="password"
              style={{
                width: "410px",
                height: "41px",
                marginTop: "1%",
                outline: "none",
                paddingTop: "2.5%",
              }}
              placeholder="******"
            />
            <button
              style={{
                width: "44px",
                height: "39.9px",
                cursor: "pointer",
                position: "relative",
                border: "none",
                borderTop: "1px solid #767676",
                outline: "none",
                background: "#fff",
                marginTop: "1%",
                marginLeft: "-12%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "0",
              }}
            >
              <AiOutlineEyeInvisible />
            </button>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: "5%",
            }}
          >
            <div
              style={{
                width: "85px",
                height: "8px",
                background: "#FF4d4F",
                borderRadius: "7px",
              }}
            ></div>
            <p style={{ fontSize: "12px", fontWeight: "600" }}>Poor</p>
          </div>
          <br />
          <div>
            <p style={{ fontSize: "12px" }}>
              By Signing up, you agree to our &nbsp;
              <a href="/free/register" style={{ color: "#1677FF" }}>
                Terms of Service
              </a>
              &nbsp; and &nbsp;
              <a href="/free/register" style={{ color: "#1677FF" }}>
                Privacy Policy
              </a>
            </p>
          </div>
          <br />
          <div>
            <Button
              variant="contained"
              style={{
                width: "411px",
                height: "42px",
                fontSize: "15px",
                background: "#1677FF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                textTransform: "capitalize",
              }}
            >
              Create Account
            </Button>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2%",
                marginTop: "5%",
                marginBottom: "5%",
                fontSize: "12px",
              }}
            >
              <div
                style={{ width: "165px", border: "1px solid #b0abab" }}
              ></div>
              <p>Login With</p>
              <div
                style={{ width: "165px", border: "1px solid #b0abab" }}
              ></div>
            </div>
            <br />
          </div>
          <div style={{ display: "flex", gap: "4%" }}>
            <Button
              variant="contained"
              style={{
                width: "120px",
                cursor: "pointer",
                height: "36px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4%",
                color: "#000",
                textTransform: "capitalize",
                background: "transparent",
                boxShadow: "none",
                border: "1px solid #C5C5C5",
              }}
            >
              <FcGoogle /> Google
            </Button>
            <Button
              variant="contained"
              style={{
                width: "120px",
                cursor: "pointer",
                height: "36px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4%",
                color: "#000",
                textTransform: "capitalize",
                background: "transparent",
                boxShadow: "none",
                border: "1px solid #C5C5C5",
              }}
            >
              <ImTwitter color="#0f0" />
              Twitter
            </Button>
            <Button
              variant="contained"
              style={{
                width: "120px",
                cursor: "pointer",
                height: "36px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4%",
                color: "#000",
                textTransform: "capitalize",
                background: "transparent",
                boxShadow: "none",
                border: "1px solid #C5C5C5",
              }}
            >
              <FaFacebookF color="#4267B2" /> Facebook
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default RegisterComponents;
