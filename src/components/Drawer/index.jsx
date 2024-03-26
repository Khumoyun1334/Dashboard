import { AiOutlineAntDesign } from "react-icons/ai";
import { CgEditShadows } from "react-icons/cg";
import { AiOutlineBgColors } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { TbTypography } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/Sample Page";
import { Badge } from "@mui/material";
import Typograph from "../../pages/Typograph";
import Shadow from "../../pages/Shadow";
import Login from "../../pages/Login";
import Register from "../../pages/Regidter";
import Color from "../../pages/Color";
import AntIcons from "../../pages/AntIcon";
import SamplePage from "../../pages/Sample Page";

const drawerWidth = 270;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Drawers() {
  const theme = useTheme();
  const [menu, setMenu] = React.useState(false);

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          border: "1px solid #F0F0F0",
        }}
        open={open}
      >
        <div className="flex justify-between p-2 px-7">
          <div className="flex">
            <IconButton
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
              sx={{ mr: 2, ...(open && { color: "black" }) }}
            >
              {menu ? (
                <button>
                  <AiOutlineMenuFold />
                </button>
              ) : (
                <button>
                  <AiOutlineMenuUnfold />
                </button>
              )}
            </IconButton>

            <div className="lg:flex hidden">
              <input
                type="text"
                placeholder="Ctrl + K "
                className="p-1 border  rounded-md  w-[240px] relative px-10 outline-none text-black"
              />
              <p className="text-gray-500 absolute ml-4 mt-3">
                <AiOutlineSearch />
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-black text-[20px] rounded-md bg-gray-200 p-2">
              <AiFillGithub />
            </button>
            <button className="text-black text-[20px] px-2 rounded-md bg-gray-200 p-1">
              <Badge badgeContent={4} color="primary">
                <AiFillGithub />
              </Badge>
            </button>
            <div className="flex items-center gap-3">
              <img
                className="h-[35px] w-[35px] rounded-full"
                src="data:image/png;base64,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"
                alt=""
              />
              <p className="text-black text-[13px] font-semibold">John Deo</p>
            </div>
          </div>
        </div>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          <div class="MuiStack-root css-csffzd flex gap-3 p-4">
            <a
              class="MuiButtonBase-root css-1b47e06"
              tabindex="0"
              href="/free/dashboard/default"
            >
              <svg
                width="118"
                height="35"
                viewBox="0 0 118 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.63564 15.8644L6.94797 13.552L6.95038 13.5496H11.3006L9.56969 15.2806L9.12278 15.7275L7.35024 17.5L7.56977 17.7201L17.5 27.6498L27.6498 17.5L25.8766 15.7275L25.7518 15.602L23.6994 13.5496H28.0496L28.052 13.552L29.8644 15.3644L32 17.5L17.5 32L3 17.5L4.63564 15.8644ZM17.5 3L25.8784 11.3784H21.5282L17.5 7.35024L13.4718 11.3784H9.12158L17.5 3Z"
                  fill="#0958d9"
                ></path>
                <path
                  d="M7.35025 17.5L9.1228 15.7275L9.5697 15.2805L7.83937 13.5496H6.95039L6.94798 13.552L4.63564 15.8644L6.8551 18.073L7.35025 17.5Z"
                  fill="url(#paint0_linear)"
                ></path>
                <path
                  d="M25.8767 15.7275L27.6498 17.5L27.4743 17.6755L27.4749 17.6761L29.8644 15.3644L28.0521 13.552L28.0497 13.5496H27.8736L25.7518 15.602L25.8767 15.7275Z"
                  fill="url(#paint1_linear)"
                ></path>
                <path
                  d="M6.94549 13.5496L6.9479 13.552L9.12272 15.7275L17.4999 24.1041L28.0544 13.5496H6.94549Z"
                  fill="#1677ff"
                ></path>
                <path
                  d="M46.5781 10V26H49.3594V14.9844H49.5078L53.9297 25.9531H56.0078L60.4297 15.0078H60.5781V26H63.3594V10H59.8125L55.0625 21.5937H54.875L50.125 10H46.5781ZM69.8438 26.2422C71.7266 26.2422 72.8516 25.3594 73.3672 24.3516H73.4609V26H76.1797V17.9687C76.1797 14.7969 73.5937 13.8438 71.3047 13.8438C68.7813 13.8438 66.8437 14.9687 66.2188 17.1562L68.8594 17.5312C69.1406 16.7109 69.9375 16.0078 71.3203 16.0078C72.6328 16.0078 73.3516 16.6797 73.3516 17.8594V17.9062C73.3516 18.7188 72.5 18.7578 70.3828 18.9844C68.0547 19.2344 65.8281 19.9297 65.8281 22.6328C65.8281 24.9922 67.5547 26.2422 69.8438 26.2422ZM70.5781 24.1641C69.3984 24.1641 68.5547 23.625 68.5547 22.5859C68.5547 21.5 69.5 21.0469 70.7656 20.8672C71.5078 20.7656 72.9922 20.5781 73.3594 20.2812V21.6953C73.3594 23.0312 72.2813 24.1641 70.5781 24.1641ZM81.8516 18.9687C81.8516 17.2344 82.8984 16.2344 84.3906 16.2344C85.8516 16.2344 86.7266 17.1953 86.7266 18.7969V26H89.5547V18.3594C89.5625 15.4844 87.9219 13.8438 85.4453 13.8438C83.6484 13.8438 82.4141 14.7031 81.8672 16.0391H81.7266V14H79.0234V26H81.8516V18.9687ZM98.4219 14H96.0547V11.125H93.2266V14H91.5234V16.1875H93.2266V22.8594C93.2109 25.1172 94.8516 26.2266 96.9766 26.1641C97.7813 26.1406 98.3359 25.9844 98.6406 25.8828L98.1641 23.6719C98.0078 23.7109 97.6875 23.7812 97.3359 23.7812C96.625 23.7812 96.0547 23.5312 96.0547 22.3906V16.1875H98.4219V14ZM100.787 26H103.615V14H100.787V26ZM102.209 12.2969C103.107 12.2969 103.842 11.6094 103.842 10.7656C103.842 9.91406 103.107 9.22656 102.209 9.22656C101.303 9.22656 100.568 9.91406 100.568 10.7656C100.568 11.6094 101.303 12.2969 102.209 12.2969ZM116.008 17.1719C115.617 15.1406 113.992 13.8438 111.18 13.8438C108.289 13.8438 106.32 15.2656 106.328 17.4844C106.32 19.2344 107.398 20.3906 109.703 20.8672L111.75 21.2969C112.852 21.5391 113.367 21.9844 113.367 22.6641C113.367 23.4844 112.477 24.1016 111.133 24.1016C109.836 24.1016 108.992 23.5391 108.75 22.4609L105.992 22.7266C106.344 24.9297 108.195 26.2344 111.141 26.2344C114.141 26.2344 116.258 24.6797 116.266 22.4062C116.258 20.6953 115.156 19.6484 112.891 19.1562L110.844 18.7188C109.625 18.4453 109.141 18.0234 109.148 17.3281C109.141 16.5156 110.039 15.9531 111.219 15.9531C112.523 15.9531 113.211 16.6641 113.43 17.4531L116.008 17.1719Z"
                  fill="#000"
                  fill-opacity="0.85"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="8.62526"
                    y1="14.0888"
                    x2="5.56709"
                    y2="17.1469"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#002c8c"></stop>
                    <stop
                      offset="0.9637"
                      stop-color="#0958d9"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="26.2675"
                    y1="14.1279"
                    x2="28.7404"
                    y2="16.938"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#002c8c"></stop>
                    <stop
                      offset="1"
                      stop-color="#0958d9"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a
              class="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault css-1xn9i5z"
              tabindex="0"
              href="https://github.com/codedthemes/mantis-free-react-admin-template"
              target="_blank"
            >
              <span class="MuiChip-label MuiChip-labelSmall css-tavflp border bg-gray-200 px-2 p-[1px] rounded-md text-[12px] ">
                v1.2.0
              </span>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </a>
          </div>
          <div className="px-6 mt-6">
            <div>
              <p className="text-[13px] font-semibold text-gray-400">
                Navigation
              </p>
            </div>
          </div>
        </List>

        <List sx={{ width: "100%" }}>
          <div className="">
            <div className="w-full">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-4 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-5 items-center"
                }
              >
                <span>
                  <BsSpeedometer2 size={"20px"} />
                </span>
                <span>Dashboard</span>
              </NavLink>
            </div>
            <div className="px-6 mt-4">
              <div>
                <p className="text-[13px] font-semibold text-gray-400">
                  Authentication
                </p>
              </div>
            </div>
            <div className="w-full mt-3   h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/login"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-4 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-4 items-center"
                }
              >
                <span>
                  <AiOutlineLogin size={"20px"} />
                </span>
                <span>Login</span>
              </NavLink>
            </div>
            <div className="w-full mt-3   h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/register"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-4 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-4 items-center"
                }
              >
                <span>
                  <BsCardChecklist size={"20px"} />
                </span>
                <span>Register</span>
              </NavLink>
            </div>
            <div className="px-6 mt-4">
              <div>
                <p className="text-[13px] font-semibold text-gray-400">
                  Utilities
                </p>
              </div>
            </div>
            <div className="w-full mt-3   h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/typograph"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-4 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-4 items-center"
                }
              >
                <span>
                  <TbTypography size={"20px"} />
                </span>
                <span>Typograph</span>
              </NavLink>
            </div>
            <div className="w-full mt-3   h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/color"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-4 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-4 items-center"
                }
              >
                <span>
                  <AiOutlineBgColors size={"20px"} />
                </span>
                <span>Color</span>
              </NavLink>
            </div>
            <div className="w-full mt-3   h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/shadow"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-4 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-4 items-center"
                }
              >
                <span>
                  <CgEditShadows size={"20px"} />
                </span>
                <span>Shadow</span>
              </NavLink>
            </div>
            <div className="w-full mt-3   h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/anticon"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-4 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-4 items-center"
                }
              >
                <span>
                  <AiOutlineAntDesign size={"20px"} />
                </span>
                <span>Ant Icon</span>
              </NavLink>
            </div>

            <div className="px-6 mt-4">
              <div>
                <p className="text-[13px] font-semibold text-gray-400">
                  Support
                </p>
              </div>
            </div>
            <div className="w-full mt-3   h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/samplepage"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-4 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-4 items-center"
                }
              >
                <span>
                  <AiOutlineAntDesign size={"20px"} />
                </span>
                <span>Sample Page</span>
              </NavLink>
            </div>
            <div className="w-full mt-3   h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"https://codedthemes.gitbook.io/mantis"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-4 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-4 items-center"
                }
              >
                <span>
                  <AiOutlineAntDesign size={"20px"} />
                </span>
                <span>Documention</span>
              </NavLink>
            </div>
          </div>
        </List>
        <List>
          <div className="px-[25px]">
            <div className="border bg-[#FAFAFA] rounded-lg py-7">
              <div className="flex justify-center">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div>
                <p className="text-center mt-4">Mantis Pro</p>
                <p className="text-center text-[14px] mt-2">
                  Checkout pro features
                </p>
                <div className="flex justify-center">
                  <button className="border p-1 px-7 text-[13px] rounded-md bg-[#52C41A] text-white font-semibold mt-4">
                    Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </List>
      </Drawer>
      <Main
        sx={{ backgroundColor: "#FAFAFB", height: "100vh", width: "100%" }}
        open={open}
      >
        <div className="mt-8 bg-[#FAFAFB]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/typograph" element={<Typograph />} />
            <Route path="/shadow" element={<Shadow />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/color" element={<Color />} />
            <Route path="/anticon" element={<AntIcons />} />
            <Route path="/samplepage" element={<SamplePage />} />
          </Routes>
        </div>
      </Main>
    </Box>
  );
}
