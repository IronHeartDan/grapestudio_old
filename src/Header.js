import React from "react";
import "./Header.css";
import logo from "./logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function Header({ openDrawer }) {
  return (
    <nav className="header">
      {/* Desktop */}
      <div className="h_con_desktop">
        <img src={logo} alt="logo" />
        <div className="h_con_main">
          <a href="#" className="h_nav_link active">
            Home
          </a>
          <a href="#" className="h_nav_link">
            About Us
          </a>
          <a href="#" className="h_nav_link">
            Industires
          </a>
          <a href="#" className="h_nav_link">
            Insights
          </a>
          <a href="#" className="h_nav_link">
            Capablities
          </a>
          <a href="#" className="h_con_button">
            Get In Touch
          </a>
          <a href="#" className="h_nav_link">
            <SearchIcon />
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="h_con_mobile">
        <img src={logo} alt="logo" />
        <Button onClick={(e) => openDrawer()}>
          <MenuIcon />
        </Button>
        {/* <div>
          <h1>
            <u>Grape</u>
          </h1>
          &nbsp;<h4>Studio</h4>
        </div> */}
      </div>
      <div className="h_shadow"></div>
    </nav>
  );
}

export default Header;
