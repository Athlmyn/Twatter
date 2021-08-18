import React, { ReactComponentElement } from "react";
import "../styles/_SidebarElement.scss";

export interface ISidebarElement {
    text: string;
    Icon: any;
}

export function SidebarElement(props: ISidebarElement) {
  return (
    <div className="sidebarOption">
      <props.Icon />
      <h2>{props.text}</h2>

    </div>
  );
}