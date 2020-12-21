import React, { useState } from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from '@material-ui/core/Avatar';
import MicSharpIcon from '@material-ui/icons/MicSharp';
import { Link } from "react-router-dom";


function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="burger" />
                <Link to="/">
                    <img className="header__logo" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt="YouTube"/>
                </Link>
            </div>
            <div className="header__center">
                <div className="header__input">
                    <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type = "text"/>
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className="header__inputButton" />
                    </Link>
                </div>
                <div className="header__voice">
                    <MicSharpIcon />
                </div>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Raftaar" src="https://avatars0.githubusercontent.com/u/71835715?s=60&amp;v=4"/>
            </div>
        </div>
    )
}

export default Header
