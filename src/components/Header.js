import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            LOGO
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <input
            type="text"
            className="serach"
            name="filter"
            // value={filter}
            // onChange={handleInputChange}
            placeholder="Search Here.."
          />{" "}
                  <Button color="inherit">click</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
