import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import {Link} from "react-router-dom";
const Header = () => {
    const [inputSearch, setInputSearch] = useState("")
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                <img
                    className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png" alt="youtube" />
                </Link>
            </div>
            <div className="header__input">
                <input
                    value={inputSearch}
                    onChange={e=> setInputSearch(e.target.value)}
                    type="text"
                    placeholder="search..." />
                <Link to={`/search/${inputSearch}`}  >
                <SearchIcon
                    className='header__inputButton'
                />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="haeder__icon"  />
                <AppsIcon className="haeder__icon" />
            <NotificationsIcon  className="haeder__icon" />
            <Avatar
                src="https://yt3.ggpht.com/Z6XP53myxsw8sHle6EbItBravniS8bQQhnSBKWMDNV3WFDqSadw-ve3sQIRph6GfmlSpNt58xA=s108-c-k-c0x00ffffff-no-rj"
            />
            </div>
        </div>
    )
}

export default Header
