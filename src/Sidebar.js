import React from 'react';
import './Sidebar.css';
/*import TwitterIcon from './images/logo.png';*/
import Logo from './logo.png'
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        {/* Twitter icon 사이트 위에 로고 */}
        {/*<TwitterIcon className='sidebar_twitterIcon' /> */}
        <img src={Logo} className='BobaLogo' alt="" />
        <SidebarOption active Icon={HomeIcon} text='Home' />
        <SidebarOption Icon={SearchIcon} text='Explore' />
        <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
        <SidebarOption Icon={MailOutlineIcon} text='Messages' />
        <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
        <SidebarOption Icon={ListAltIcon} text='Lists' />
        <SidebarOption Icon={PermIdentityIcon} text='Profile' />
        <SidebarOption Icon={MoreHorizIcon} text='More' />

        {/* Button -> Tweet 사이드바 밑에 있는거 */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;