import { Search } from "@material-ui/icons";
import React from "react";
//import "./Widgets.css";

export function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        
      </div>
    </div>
  );
}