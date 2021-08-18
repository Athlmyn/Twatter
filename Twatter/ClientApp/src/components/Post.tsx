import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";

import React from "react";
import "../styles/_Post.scss"

export interface IPost{
    displayName: string;
    username: string;
    isVerified: boolean;
    message: string;
    imageURL: string;
    avatarURL: string;

}

export function Post(props: IPost) {
  return (
    <div className="Post">
      <div className="Avatar">
        <Avatar src={props.avatarURL} />
      </div>
      <div className="Body">
        <div className="Header">
          <div className="HeaderText">
            <h3>
              {props.displayName}{" "}
              <span className="HeaderSpecial">
                {props.isVerified && <VerifiedUser className="Badge" />} @
                {props.username}
              </span>
            </h3>
          </div>
          <div className="HeaderDescription">
            <p>{props.message}</p>
          </div>
        </div>
        <img src={props.imageURL} alt="" />
        <div className="Footer">
          <a href="#"><ChatBubbleOutline fontSize="small" /></a>
          <a href="#"><Repeat fontSize="small" /></a>
          <a href="#"><FavoriteBorder fontSize="small" /></a>
          <a href="#"><Publish fontSize="small" /></a>
        </div>
      </div>
    </div>
  );
}