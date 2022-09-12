import React, { useState, useRef } from "react";
import { Box, Menu, MenuItem, Button, Modal } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { styled } from "@mui/material/styles";

const HeaderButtonStyle = styled(Button)(({ theme }) => ({
  display: "inline-block",
  width: "100%",
}));
export default function Sidebar() {
  const [OpenMenu, setOpenMenu] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <Box
        id="sidebar"
        sx={{ flexGrow: 1, display: { xs: "block", md: "block" } }}
      >
        <DehazeIcon
          ref={ref}
          className="sidebar-icon"
          onClick={() => setOpenMenu(true)}
        />
      </Box>

      <Menu
        anchorEl={ref.current}
        id="account-menu"
        open={OpenMenu}
        onClose={() => setOpenMenu(false)}
        onClick={() => setOpenMenu(false)}
        sx={{ display: { xs: "block", md: "none" } }}
        PaperProps={{
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: -4,
            ml: 2,
            boxShadow: "-2px 2px 20px 0px #007dfe4a, 0px 0px 2px #007dfe4a",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -1,
              mb: 2,
            },
          },
        }}
      >
        <MenuItem>
          {" "}
          <HeaderButtonStyle color="inherit" href="/#skills">
            Skills
          </HeaderButtonStyle>{" "}
        </MenuItem>
        <MenuItem>
          <HeaderButtonStyle color="inherit" href="/#experience">
            Experience
          </HeaderButtonStyle>{" "}
        </MenuItem>
        <MenuItem>
          {" "}
          <HeaderButtonStyle color="inherit" href="/#projects">
            {" "}
            Projects
          </HeaderButtonStyle>
        </MenuItem>
        <MenuItem>
          <HeaderButtonStyle color="inherit" href="/#links">
            Links
          </HeaderButtonStyle>
        </MenuItem>
        <MenuItem>
          <HeaderButtonStyle color="inherit" href="/#personalInformation">
            Personal Information
          </HeaderButtonStyle>
        </MenuItem>
      </Menu>

      {/* <Modal>
<>
<HeaderButtonStyle color="inherit" href="/#skills">
            Skills
          </HeaderButtonStyle>
</>
      </Modal> */}
    </>
  );
}
