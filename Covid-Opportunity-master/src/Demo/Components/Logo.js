import React from "react";
import * as image from "../img";
import { Hidden } from "@material-ui/core";

const Logo = () => {
  const {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyone,
  } = image;

  var x = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyone,
  ];
  var y = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];
  var count = 0;
  var change_s = y.length;
  var change = 0;
  var s = y.length;
  const fadeOut = () => {
    let interval = setInterval(function () {
      let img = document.getElementById(`${count}`);

      let opacity = Number(
        window.getComputedStyle(img).getPropertyValue("opacity")
      );

      document.getElementById(`${count}`).style.opacity = opacity - 1;

      if (opacity <= 0) {
        clearInterval(interval);
        document.getElementById(`${count}`).src = `${x[s]}`;
        fadeIn();
      }
    }, 0);
  };
  const fadeIn = () => {
    var interval = setInterval(function () {
      var img = document.getElementById(`${count}`);

      var opacity = Number(
        window.getComputedStyle(img).getPropertyValue("opacity")
      );

      document.getElementById(`${count}`).style.opacity = opacity + 1;

      if (opacity >= 1) {
        clearInterval(interval);

        if (change >= y.length && change_s <= x.length) {
          change = 0;
          change_s += 0.5;
          count = Math.floor(change);
          s = Math.floor(change_s);

          fadeOut();
        } else if (change_s >= x.length && change <= y.length) {
          change_s = 0;
          change += 0.5;
          count = Math.floor(change);
          s = Math.floor(change_s);

          fadeOut();
        } else if (change_s >= x.length && change > y.length) {
          change_s = 0;
          change = 0;
          s = Math.floor(change_s);
          count = Math.floor(change);

          fadeOut();
        } else {
          count = Math.floor(change);
          s = Math.floor(change_s);
          change += 0.5;
          change_s += 0.5;

          fadeOut();
        }
      }
    }, 0);
  };
  const renderImage = () => {
    var z = [];

    z = y.map((img, index) => {
      let z = (
        <div className="image_wrap">
          <img className="logo_image" src={img} id={index} />
        </div>
      );

      return z;
    });
    fadeOut();
    return z;
  };

  return (
    <div>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <div className="logo_containers">{renderImage()}</div>
      </Hidden>
      <Hidden only={["xs", "xl"]}>
        <div className="logo_container">{renderImage()}</div>
      </Hidden>
    </div>
  );
};

export default Logo;
