import React from "react";
import {
  Box,
  Typography,
  Divider,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

export default function Skills() {
  return (
    <Box id="skills" class="heading-primary card-padding">
      <ListItem alignItems="center" className="heading-primary-sub">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/reactsign.png" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem>
      <ListItem alignItems="center" className="heading-primary-sub">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/nodejs_logo.png" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem><ListItem alignItems="center" className="heading-primary-sub">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/java.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem><ListItem alignItems="center" className="heading-primary-sub">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/mysql_PNG35.png" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem><ListItem alignItems="center" className="heading-primary-sub">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/sql.png" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem><ListItem alignItems="center" className="heading-primary-sub">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/html-icon-png-13.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem><ListItem alignItems="center" className="heading-primary-sub">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/css.png" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem><ListItem alignItems="center" className="heading-primary-sub">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/JS.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem>
    </Box>
  );
}
