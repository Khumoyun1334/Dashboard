import { AiOutlineCode } from "react-icons/ai";
import { AiFillCopy } from "react-icons/ai";
import React from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import Typograph from "../../pages/Typograph";

function CardsT() {
  const Axos = () => {
    axios
      .get("https://mantisdashboard.io/free/typography")
      .then(function (res) {
        console.log(res.data);
        return res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="grid grid-cols-2 mt-7 gap-8">
        <div>
          <div className="bg-white border rounded-lg">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px]">Basic</p>
              </div>
              <div className="mt-7">
                <p className="text-[38px] font-semibold">Inter</p>
                <p className="text-[16px] font-semibold">Font Family</p>
              </div>
              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Regular</span>
                <span>/</span>
                <span>Medium</span>
                <span>/</span>
                <span>Bold</span>
              </div>
            </div>
            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>

          <div className="bg-white border mt-10 rounded-lg ">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Heading</p>
              </div>
              <Box sx={{ marginTop: "30px" }}>
                <Typography sx={{ fontSize: "46px" }} variant="h1" gutterBottom>
                  h1. Heading
                </Typography>
                <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                  <span>Size: 38px</span>
                  <span>/</span>
                  <span>Weight: Bold</span>
                  <span>/</span>
                  <span>Line Height: 46px </span>
                </div>
                <Typography
                  sx={{ fontSize: "42px", marginTop: "20px" }}
                  variant="h2"
                  gutterBottom
                >
                  h2. Heading
                </Typography>
                <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                  <span>Size: 38px</span>
                  <span>/</span>
                  <span>Weight: Bold</span>
                  <span>/</span>
                  <span>Line Height: 46px </span>
                </div>
                <Typography
                  sx={{ fontSize: "36px", marginTop: "20px" }}
                  variant="h3"
                  gutterBottom
                >
                  h3. Heading
                </Typography>
                <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                  <span>Size: 38px</span>
                  <span>/</span>
                  <span>Weight: Bold</span>
                  <span>/</span>
                  <span>Line Height: 46px </span>
                </div>
                <Typography
                  sx={{ fontSize: "32px", marginTop: "20px" }}
                  variant="h4"
                  gutterBottom
                >
                  h4. Heading
                </Typography>
                <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                  <span>Size: 38px</span>
                  <span>/</span>
                  <span>Weight: Bold</span>
                  <span>/</span>
                  <span>Line Height: 46px </span>
                </div>
                <Typography
                  sx={{ marginTop: "20px" }}
                  variant="h5"
                  gutterBottom
                >
                  h5. Heading
                </Typography>
                <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                  <span>Size: 38px</span>
                  <span>/</span>
                  <span>Weight: Bold</span>
                  <span>/</span>
                  <span>Line Height: 46px </span>
                </div>
                <Typography
                  sx={{ marginTop: "20px" }}
                  variant="h6"
                  gutterBottom
                >
                  h6. Heading
                </Typography>
                <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                  <span>Size: 38px</span>
                  <span>/</span>
                  <span>Weight: Bold</span>
                  <span>/</span>
                  <span>Line Height: 46px </span>
                </div>
              </Box>
            </div>
            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white borde mt-10 border rounded-lg">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Body 1</p>
              </div>
              <div className="py-7">
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex gap-3 text-[14px] text-gray-500 font-normal ">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>
            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white borde mt-10 border rounded-lg">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Body 2</p>
              </div>
              <div className="py-7">
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex gap-3 text-[14px] text-gray-500 font-normal ">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>
            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white borde mt-10 border rounded-lg">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Subtitle 1</p>
              </div>
              <div className="mt-7">
                <p className="text-[14px] font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>
            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white borde mt-10 border rounded-lg">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px]  font-semibold">Subtitle 2</p>
              </div>
              <div className="mt-7">
                <p className="text-[14px] font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>
            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white borde mt-10 border rounded-lg">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Caption</p>
              </div>
              <div className="mt-7">
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>
            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white border rounded-lg ">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px]">Alignment</p>
              </div>
              <p className="text-[12px] mt-9 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[12px] text-center mt-4 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[12px] text-right mt-4 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white border rounded-lg mt-10">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Gutter Bottom</p>
              </div>
              <p className="text-[14px] mt-9 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[12px] mt-4 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>

            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white border rounded-lg mt-10">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Overline</p>
              </div>
              <p className="text-[13px] mt-9 font-normal">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO
                EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </p>

              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>

            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white border rounded-lg mt-10">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Link</p>
              </div>
              <div className="mt-7">
                <a
                  href="#"
                  className="text-[13px] text-blue-600  font-medium hover:decoration-black"
                >
                  www.mantis.com
                </a>
              </div>

              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>

            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white border rounded-lg mt-10">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Colors</p>
              </div>
              <div className="mt-7">
                <p className="text-[14px]  font-medium hover:decoration-black">
                  This is textPrimary text color.
                </p>
                <p className="text-[14px] mt-3 font-medium text-gray-400">
                  This is textSecondary text color.
                </p>
                <p className="text-[14px] mt-3 font-medium text-blue-600">
                  This is primary text color.
                </p>
                <p className="text-[14px] mt-3 font-medium text-gray-600">
                  This is secondary text color.
                </p>
                <p className="text-[14px] mt-3 font-medium hover:decoration-black">
                  This is success text color.
                </p>
                <p className="text-[14px] mt-3 font-medium text-yellow-500">
                  This is warning text color.
                </p>
                <p className="text-[14px] mt-3 font-medium text-red-500">
                  This is warning text color.
                </p>
              </div>

              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>

            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white border rounded-lg mt-10">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Paragraph</p>
              </div>
              <p className="text-[13px] mt-9 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>

            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
          <div className="bg-white border rounded-lg mt-10">
            <div className="px-6 py-6">
              <div>
                <p className="text-[14px] font-semibold">Font Style</p>
              </div>
              <p className="text-[13px] mt-9 font-normal">
                <i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </i>
              </p>

              <p className="text-[14px] mt-4 font-normal">
                <i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </i>
              </p>

              <div className="flex gap-3 text-[14px] text-gray-500 font-normal mt-3">
                <span>Size: 38px</span>
                <span>/</span>
                <span>Weight: Bold</span>
                <span>/</span>
                <span>Line Height: 46px </span>
              </div>
            </div>

            <div
              style={{ border: "1px dashed gray", borderColor: "#F0F0F0" }}
            ></div>
            <div className="flex text-gray-500 justify-end gap-6 p-3">
              <AiFillCopy size={"18px"} />
              <AiOutlineCode size={"18px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsT;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MantisDashboard = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://mantisdashboard.io/free/typography"
//         );
//         setData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!data) {
//     return <div>No data available.</div>;
//   }

//   return (
//     <div>
//       <h1>Typography Information</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default MantisDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const TypographyData = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://mantisdashboard.io/free/static/js/main.84cab3de.js"
//         );
//         setData(response.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Typography Data</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default TypographyData;
