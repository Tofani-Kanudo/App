import React from "react";
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <div className="profile-header">
      <MenuIcon className="menu-icon"/>
      <div className="my-settings">MY SETTINGS</div>
      <div className="cross-icon">X</div>
    </div>
  );
};

export default Header;
