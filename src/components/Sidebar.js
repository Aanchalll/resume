import React,{useState,useRef}  from "react";
import { Box ,Menu,MenuItem,Button} from "@mui/material";
import DehazeIcon from '@mui/icons-material/Dehaze';
import { styled } from '@mui/material/styles';

const HeaderButtonStyle = styled(Button)(({ theme }) => ({
  display: "inline-block",
  width: "100%",
}));
export default function Sidebar() {
  const [OpenMenu, setOpenMenu] = useState(false);
  const ref = useRef(null);
  return (<>
    <Box id="sidebar" sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
      <DehazeIcon className="sidebar-icon"  onClick={() => setOpenMenu(true)}/>
     
    </Box>
    <Menu
                  anchorEl={ref.current}
                  id="account-menu"
                  open={OpenMenu}
                  onClose={() => setOpenMenu(false)}
                  onClick={() => setOpenMenu(false)}
                  PaperProps={{
                    style: {
                      filter: "-2px 2px 20px 0px #007dfe4a, 0px 0px 2px #007dfe4a",
                      width: "-webkit-fill-available",
                      overflow: "visible",  
                      marginTop: "1.4rem",
                      right: 0,
                      left:0,
                      '&:before' : {
                        content: '""',
                        display: "block",
                        position: "static",
                        top: 0,
                      // left:30,
                        right: 0,
                        width: 20,
                        height: 10,
                        bgcolor: "red",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                >
                  <MenuItem > <HeaderButtonStyle color="inherit"  href="/#skills">Skills</HeaderButtonStyle> </MenuItem>
                  <MenuItem ><HeaderButtonStyle color="inherit" href="/#experience">Experience</HeaderButtonStyle> </MenuItem>
                  <MenuItem > <HeaderButtonStyle color="inherit" href="/#projects"> Projects</HeaderButtonStyle></MenuItem>
                  <MenuItem ><HeaderButtonStyle color="inherit" href="/#links">Links</HeaderButtonStyle></MenuItem>
                  <MenuItem ><HeaderButtonStyle color="inherit" href="/#personalInformation">Personal Information</HeaderButtonStyle></MenuItem>
                </Menu>
    </>
  );
}
