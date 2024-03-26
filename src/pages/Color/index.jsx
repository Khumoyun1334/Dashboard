import React, { useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";

const Color = () => {
  const chap = ["<"];
  const ong = [">"];
  const pink = {
    color: "rgb(255, 160, 122)",
  };
  const [color, setColor] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  return (
    <div>
      <div className="grid xl:flex lg:grid mt-14 lg:grid-cols-2 gap-6 -ml-2 ">
        <div className="xl:w-[35%] lg:w-[30%] h-[102vh] bg-white px-5 py-10">
          <p className="-mt-4 pb-4 text-xs font-bold"> Secondary Color</p>
          <div className="px-2">
            <div
              style={{
                backgroundColor: "#E1EFFA",
                height: "70px",
                alignItems: "center",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#BAE0FF", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#91CAFF", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#64A9F4", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#4096FF", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#1677FF", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#0958D9", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#0039A4", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#001D66", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
              <button>
                <AiOutlineCopy />
              </button>
              <button onClick={() => setColor2(!color2)}>
                <AiFillCode />
              </button>
            </div>
            {color2 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
        </div>
        <div className="xl:w-[36%] lg:w-[30%] h-[102vh] px-6 py-10 bg-white">
          <p className="-mt-4 pb-4 text-xs font-bold"> Primary Color</p>
          <div
            style={{
              backgroundColor: "#fafafa",
              height: "70px",
              alignItems: "center",
            }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#f5f5f5", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#f0f0f0", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#d9d9d9", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#bfbfbf", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#8c8c8c", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#595959", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#262626", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#000000", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
              <button>
                <AiOutlineCopy />
              </button>
              <button onClick={() => setColor(!color)}>
                <AiFillCode />
              </button>
            </div>
            {color && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="" <br /> dark data color: '#e6f7ff',
                        label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
        </div>
        <div className="xl:w-[35%] lg:w-[30%] h-[44vh] bg-white px-6 py-10">
          <p className="-mt-4 pb-4 text-xs font-bold"> Secondary Color</p>
          <div className="px-2">
            <div
              style={{
                backgroundColor: "#fffff",
                boxShadow: " 0 0 3px gray",
                height: "70px",
                alignItems: "center",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#434343", height: "70px" }}
              className="p-4 text-white"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#1f1f1f", height: "70px" }}
              className="p-4 text-white"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
              <button>
                <AiOutlineCopy />
              </button>
              <button onClick={() => setColor3(!color3)}>
                <AiFillCode />
              </button>
            </div>
            {color3 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>

                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
        </div>
      </div>
      <div className="grid xl:flex lg:grid mt-14 lg:grid-cols-2 gap-6 -ml-2 ">
        <div className="xl:w-[35%] lg:w-[30%] h-[64vh] bg-white px-5 py-10">
          <p className="-mt-4 pb-4 text-xs font-bold"> Secondary Color</p>
          <div className="px-2">
            <div
              style={{
                backgroundColor: "#f6ffed",
                height: "70px",
                alignItems: "center",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#95de64", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#52c41a", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#237804", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#092b00", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
              <button>
                <AiOutlineCopy />
              </button>
              <button onClick={() => setColor2(!color2)}>
                <AiFillCode />
              </button>
            </div>
            {color2 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
        </div>
        <div className="xl:w-[36%] lg:w-[30%] h-[64vh] px-6 py-10 bg-white">
          <p className="-mt-4 pb-4 text-xs font-bold"> Primary Color</p>
          <div
            style={{
              backgroundColor: "#fff1f0",
              height: "70px",
              alignItems: "center",
            }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#ff7875", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#f5222d", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#a8071a", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#5c0011", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
              <button>
                <AiOutlineCopy />
              </button>
              <button onClick={() => setColor(!color)}>
                <AiFillCode />
              </button>
            </div>
            {color && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="" <br /> dark data color: '#e6f7ff',
                        label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
        </div>
        <div className="xl:w-[35%] lg:w-[30%] h-[64vh] bg-white px-6 py-10">
          <p className="-mt-4 pb-4 text-xs font-bold"> Secondary Color</p>
          <div className="px-2">
            <div
              style={{
                backgroundColor: "#fffbe6",
                height: "70px",
                alignItems: "center",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#ffd666", height: "70px" }}
              className="p-4 text-white"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#faad14", height: "70px" }}
              className="p-4 text-white"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#ad6800", height: "70px" }}
              className="p-4 text-white"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#613400", height: "70px" }}
              className="p-4 text-white"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
              <button>
                <AiOutlineCopy />
              </button>
              <button onClick={() => setColor3(!color3)}>
                <AiFillCode />
              </button>
            </div>
            {color3 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>

                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
