import React from 'react'
import './Sidebar.css'
import SideRow from './SideRow/SideRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot'
import Subscription from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Sidebar() {
    return (
        <div className="sideBar">
            <SideRow selected={true} Icon={HomeIcon} title="Home"  />
            <SideRow Icon={WhatshotIcon} title="Trending"  />
            <SideRow Icon={Subscription} title="Subscription"  />
            <hr />
            <SideRow Icon={VideoLibraryIcon} title="Library"  />
            <SideRow Icon={OndemandVideoIcon} title="History"/>
            <SideRow Icon={OndemandVideoIcon} title="Your Video"  />
            <SideRow Icon={WatchLaterIcon} title="Watch Later"  />
            <SideRow Icon={ThumbUpOffAltIcon} title="Liked videos"  />
            <SideRow Icon={ExpandMoreIcon} title="Show more" />  
            <hr />
        </div>
    )
}

export default Sidebar
