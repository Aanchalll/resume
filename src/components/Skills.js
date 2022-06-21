import React from "react";
import {
  ListItem,
  Grid,
  ListItemAvatar,
  Avatar,
  ListItemText,Typography
} from "@mui/material";

export default function Skills() {
  return (
    <Grid container id="skills" className="heading-primary card-padding">
<Grid item xs={12}>
          <Typography variant="h3">Linkslorem ipsum</Typography>
        </Grid>
      <DynamicComponent srcValue="/reactsign.png"/>
      
      <DynamicComponent srcValue="/nodejs_logo.png"/>
      
      <DynamicComponent srcValue="/java.jpg"/>

      <DynamicComponent srcValue="/mysql_PNG35.png"/>

      <DynamicComponent srcValue="/sql.png"/>
      
      <DynamicComponent srcValue="/html-icon-png-13.jpg"/>

      <DynamicComponent srcValue="/css.png"/>

      <DynamicComponent srcValue="/JS.jpg"/>

    </Grid>
  );
}



const DynamicComponent=(props) =>{
    const{srcValue}=props;
    return(
    <Grid item xs={12} sm={3} lg={3} className="heading-primary-sub">
    <ListItem alignItems="center" >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={srcValue} />
      </ListItemAvatar>
      <ListItemText primary="Brunch this weekend?" />
    </ListItem>
    </Grid>)
}