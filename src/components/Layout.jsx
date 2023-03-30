import React from "react";
import Header from "./Header";
// import Sidebar from "./Sidebar";
import { Box } from "@mui/system";
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <Box style={{display: 'flex'}}>
      <Sidebar />
      <Box display="flex" flexDirection="column" width="100%" overflow="hidden">
        <div className="main-layout-content" style={{  padding:"24px",  width: "auto",  boxSizing: "border-box", backgroundColor: "#FFFFFF"}}>
            {children}
            </div>
      </Box>

      </Box>
      
    </div>
  );
};

export default Layout;
