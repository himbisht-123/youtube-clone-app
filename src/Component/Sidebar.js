import React from 'react'
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import '../Styling/Sidebar.css';
function Sidebar() {
    return (
        <div className="sidebar">
            
           <SidebarRow selected Icon={HomeIcon} title="Home"/>
           <SidebarRow Icon={WhatshotIcon} title="Trending"/>
           <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
           <hr></hr>
           <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
           <SidebarRow Icon={HistoryIcon} title="History"/>
           <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
           <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
           <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos"/>
           <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
           <hr></hr>

        </div>
    )
}

export default Sidebar;