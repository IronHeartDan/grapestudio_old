import React from "react";
import "./Drawer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SearchIcon from "@material-ui/icons/Search";

function Drawer({ state }) {
  return (
    <div
      className="drawer"
      style={{ width: state ? "65vw" : "0", opacity: state ? 1 : 0 }}
    >
      <div className="d_top">
        <h2>Navigation </h2>
        {/* <Button onClick={(e) => closeDrawer()}>&times;</Button> */}
      </div>
      <div className="menu">
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
      <div className="social">
        <a href="#" className="h_con_s_link">
          <InstagramIcon />
        </a>
        <a href="#" className="h_con_s_link">
          <FacebookIcon />
        </a>
        <a href="#" className="h_con_s_link">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Drawer;
