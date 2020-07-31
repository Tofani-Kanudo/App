import React from "react";
import { Button, Paper } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  sbutton1: {
    margin: 10,
    padding: 15,
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);
const Buttons = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: 30, marginBottom: 30 }}>
      <Paper elevation={5}>
        <div className="button_container">
          <Button
            variant="outlined"
            color="primary"
            size="large"
            className={classes.sbutton1}
          >
            Get Employee Refferal
          </Button>

          <ColorButton
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            color="primary"
            className={classes.sbutton1}
          >
            Share on whatsapp
          </ColorButton>

          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<LinkedInIcon />}
            className={classes.sbutton1}
          >
            Share on Linkedin
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Buttons;
