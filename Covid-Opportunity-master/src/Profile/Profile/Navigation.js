import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { orange } from "@material-ui/core/colors";
import { NavLink, withRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const Navigation = (props) => {
  const [value, setValue] = useState(0);
  const array = ["", "social", "education"];
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.history.push(`/${array[newValue]}`);
  };
  return (
    <div style={{ marginTop: 20 }}>
      <ThemeProvider theme={theme}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
        >
          <Tab label="About" />
          <Tab label="Social" />
          <Tab label="Education" />
        </Tabs>
      </ThemeProvider>
    </div>
  );
};

export default withRouter(Navigation);
