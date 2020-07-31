import React, { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Profile/Header";
import Photo from "./Profile/Photo";
import Title from "./Profile/Title";
import About from "./Profile/About";
import Social from "./Profile/Social";
import Education from "./Profile/Education";
import Navigation from "./Profile/Navigation";

export const Profile = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Photo />
        <Title />
        <Navigation />

        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/social" component={Social} />
          <Route path="/education" component={Education} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Profile;
