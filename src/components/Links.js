import React from "react";
import {
  ListItem,
  Grid,
  ListItemAvatar,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
export default function Links() {
  return (
    <>
      <Divider />
      <Grid container id="links" className="heading-primary card-padding">
        <Grid item xs={12}>
          <Typography variant="h3">Linkslorem ipsum</Typography>
        </Grid>
        <DynamicComponent srcValue="/reactsign.png" IconImage={LinkedInIcon}/>
        <DynamicComponent srcValue="/nodejs_logo.png" IconImage={GitHubIcon}/>
        <DynamicComponent srcValue="/java.jpg" IconImage={CodeIcon}/>
        <DynamicComponent srcValue="/mysql_PNG35.png" IconImage={GitHubIcon}/>
      </Grid>
    </>
  );
}

const DynamicComponent = (props) => {
  const {IconImage} = props;
  return (
    <Grid item xs={12} sm={3} lg={3} className="heading-primary-sub">
      <ListItem alignItems="center">
        <ListItemAvatar>
        <IconImage sx={{ color: "pink[500]" }} />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem>
    </Grid>
  );
};
