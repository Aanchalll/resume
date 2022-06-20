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

export default function Experience() {
  return (<>  <Divider />
    <Box id="experience" class="heading-primary card-padding">
      <ListItem alignItems="flex-start" className="heading-primary-sub-left">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/reactsign.png" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem>
     
        <ListItem alignItems="flex-start" className="heading-primary-sub-left">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/reactsign.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {
                  " — In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" className="heading-primary-sub-left">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                " — In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."

              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" className="heading-primary-sub-left">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                " — In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."

              </React.Fragment>
            }
          />
        </ListItem>
    </Box></>
  );
}
 {/* <Typography variant='h6' className="heading-primary-sub" ></Typography>
  <Typography variant='h6' className="heading-primary-sub" >Aanchal Sahu</Typography>
  <Typography variant='h6' className="heading-primary-sub-left">Aanchal Sahu</Typography>
  <Typography variant='h6' className="heading-primary-sub-left">Aanchal Sahu</Typography>
  <Typography variant='h6' className="heading-primary-sub">Aanchal Sahu</Typography>
  <Typography variant='h6' className="heading-primary-sub">Aanchal Sahu</Typography>
  <Typography variant='h6' className="heading-primary-sub-left">Aanchal Sahu</Typography>
  <Typography variant='h6' className="heading-primary-sub-left">Aanchal Sahu</Typography> */}