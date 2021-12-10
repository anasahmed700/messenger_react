import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import { apiClient } from "../Shared/apiClient";
// import { client } from "../Shared/MessengerClient";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

const Chat = () => {
  const classes = useStyles();
  const [data, setData] = useState();

  apiClient
    .get("conversations", {
      params: {
        fields: "messages{message,from}",
      },
    })
    .then((res) => {
      if (res.data) {
        setData(res.data);
      }
    })
    .catch((err) => {
      console.log(err.response);
    });

  //   useEffect(() => {
  //       setData()

  //   },[result])
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="John Wick"></ListItemText>
            </ListItem>
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            {data?.data &&
              data?.data?.map((obj, index) => (
                //   console.log(obj.messages.data[index].from.name)
                <ListItem button key={index}>
                  <ListItemIcon>
                    <Avatar
                      alt={obj.messages.data[index].from.name}
                      src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={obj.messages.data[index].from.name}
                  ></ListItemText>
                  <ListItemText secondary="online" align="right"></ListItemText>
                </ListItem>
              ))}
          </List>
        </Grid>

        <Grid item xs={9}>
          <List className={classes.messageArea}>
            {data?.data &&
              data?.data?.map((obj, index) => (
                <ListItem key="1">
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        align="right"
                        primary={obj.messages.data[index].message}
                      ></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        align="right"
                        secondary="09:30"
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={1} align="right">
              <Fab
                // onClick={() =>
                //   client
                //     .sendText("5014327021913292", "Hello World")
                //     .then(() => {
                //       console.log("sent");
                //     })
                // }
                color="primary"
                aria-label="add"
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
