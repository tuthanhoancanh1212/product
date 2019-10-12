import React from "react";
import "./index.scss";
import toggle from "../../../image/toggle.svg";
import location from "../../../image/location.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="mobile">
        <label className="header-toggle" htmlFor="toggle">
          <img src={toggle} width={22} height={14} alt="toggle" className="toggle-image" />
        </label>
        <div className="header-title">CAROLINA HERRERA</div>
        <div className="header-location">
          <img src={location} width={12} height={18} alt="location" />
        </div>
      </div>
      <div className="deskop">
        <div className="header-title">CAROLINA HERRERA</div>
        <div className="header-menu">
          <div className="menu-item">FASHION SHOW</div>
          <div className="menu-item">FASHION LOOK</div>
          <div className="menu-item">FASHION ANIMATE</div>
          <div className="menu-item">FASHION TOP</div>
          <div className="menu-item">COLLECTION</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
