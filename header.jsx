import React from "react";
import "./header.css";
import plane from "../img/Group.svg";
import route from "../img/rout.svg";
import world from "../img/world.svg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="header_plane" src={plane} alt="" />
        <img className="header_plane1" src={plane} alt="" />
        <img className="header_route" src={route} alt="" />
        <img className="header_route1" src={route} alt="" />
        <h6 className="header_main_text header_text">Tour Grid</h6>
        <p className="header_text">Home - Tour Grid</p>
      </div>
    </div>
  );
};

export default Header;
