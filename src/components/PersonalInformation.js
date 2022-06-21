import React from "react";
import {
  ListItem,
  Grid,
  ListItemAvatar,
  ListItemText,
  Divider,
  Typography
} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
export default function PersonalInformation() {
  return (
    <>
      <Divider />
      <Grid container id="personalInformation" className="heading-primary card-padding">
        <Grid item xs={12}>
          <Typography variant="h3">PI loremipsum</Typography>
        </Grid>
        <DynamicComponent srcValue="/reactsign.png" IconImage={CallIcon}/>
        <DynamicComponent srcValue="/nodejs_logo.png" IconImage={EmailIcon}/>
        <DynamicComponent srcValue="/java.jpg" IconImage={HomeIcon}/>
        <DynamicComponent srcValue="/mysql_PNG35.png" IconImage={BubbleChartIcon}/>
      </Grid>
    </>
  );
}

const DynamicComponent = (props) => {
  const {IconImage } = props;
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
