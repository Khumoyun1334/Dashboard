import { useState } from "react";
import "./App.css";

import Drawers from "./components/Drawer";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="">
      <Drawers />
    </div>
  );
}

export default App;
