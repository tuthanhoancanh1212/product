import React, { useState } from "react";
import "./index.scss";
const MenuToggle = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <div>
      <input type="checkbox" id="toggle" name="toggle" onChange={() => setToggle(!toggle)} />
      <div className="menu-toggle">
        <div className="toggle-navigation">
          <div className="menu-toggle-item">FASHION SHOW</div>
          <div className="menu-toggle-item">FASHION LOOK</div>
          <div className="menu-toggle-item">FASHION ANIMATE</div>
          <div className="menu-toggle-item">FASHION TOP</div>
          <div className="menu-toggle-item">COLLECTION</div>
        </div>
      </div>
      <div className={toggle ? "menu-overlay active" : "menu-overlay"}></div>
    </div>
  );
};

export default MenuToggle;
