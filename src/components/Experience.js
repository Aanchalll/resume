import React from "react";
import {
  Typography,
  Divider,
  ListItem,
  Grid,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

export default function Experience() {
  return (
    <>
      <Divider />
      <Grid container className="card-padding" justifyContent={"center"} id='experience'>
        <Grid item xs={12}>
          <Typography variant="h3">Experloremipsum </Typography>
        </Grid>
        <DynamicComponent />
        <DynamicComponent />
        <DynamicComponent />
        <DynamicComponent />
      </Grid>
    </>
  );
}

const DynamicComponent = (props) => {
  return (
    <Grid item xs={12} sm={6} lg={6} >
      <ListItem alignItems="flex-start" className="heading-primary-sub-left">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/reactsign.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          // textAlign="justify"
          style={{textAlign:"justify"}}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Alidfsfsddded
              </Typography>
              {
                " — In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
              }
            </React.Fragment>
          }
        />
      </ListItem>
    </Grid>
  );
};
