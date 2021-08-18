import * as React from 'react';
import { SidebarElement, ISidebarElement } from "./SidebarElement";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

import "../styles/_Sidebar.scss"


export function Sidebar() {
  return (
    <div className="Sidebar" >
      <TwitterIcon className="Twitter-icon"/>
      <SidebarElement Icon={HomeIcon} text="Home"/>
      <SidebarElement Icon={SearchIcon} text="Explore" />
      <SidebarElement Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarElement Icon={MailOutlineIcon} text="Messages" />
      <SidebarElement Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarElement Icon={ListAltIcon} text="Lists" />
      <SidebarElement Icon={PermIdentityIcon} text="Profile" />
      <SidebarElement Icon={MoreHorizIcon} text="More" />

      <Button fullWidth className="Tweet">
        Tweet
      </Button>
    </div>
  );
}
