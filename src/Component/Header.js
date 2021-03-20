import React,{useState} from 'react'
import '../Styling/Header.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core';
function Header() {
    const [inputSearch,setInputSearch]=useState('');
    return (
        <div className="header">
          <div className="header-left">
            <MenuIcon/>
            <Link to="/">
            <img 
            className="header-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""></img>
            </Link>
            </div>

            <div className="header-input">
            <input value={inputSearch} 
            onChange={(e)=>setInputSearch(e.target.value)}
            placeholder="Search" type="text"></input>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header-button"/>
            </Link>
            </div>
           <div className="header-icons">
            <VideoCallIcon className="header-icon"/>
            <AppsIcon className="header-icon"/>
            <NotificationsIcon className="header-icon"/>
            <Avatar
            className="image-user"
            src="https://yt3.ggpht.com/yti/ANoDKi5-mKhkDffmTgcOwA0OuL3tEpQNNO68kJdMHAtNoA=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
            ></Avatar>
            </div>  
        </div>
    )
}

export default Header
