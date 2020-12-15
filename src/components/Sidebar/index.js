import "./sidebar.scss"
import React from 'react';
import SharedIcon from "../shared/SharedIcon";
import logo3x from '../../assets/Logo@3x.svg';
import search from '../../assets/Search@3x.svg';
import picasso from '../../assets/picasso.jpg';
import Dots from "../shared/Dots";

const Sidebar = () => {
    const inputRef = React.useRef();

    const onInput = () => {
        if (inputRef.current === null) return;
        inputRef.current.style.width = '100%';
        inputRef.current.focus();
    };
    const onBlur = (e) => {
        e.currentTarget.style.width = '0px';
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo-name">
                    <div className="logo">
                        <img src={logo3x} alt='...' className="sidebar-logo"/>
                    </div>
                </div>
                <div className="sidebar-search">
                    <div className="sidebar-name">
                        PROJECTUS
                    </div>
                    <input type="text" className="input" ref={inputRef} onBlur={onBlur}/>
                    <img src={search} className="search-button" onClick={onInput}/>
                </div>
            </div>
            <div className="sidebar-user">
                <div className="user">
                    <img src={picasso} alt="No ava" className="sidebar-avatar"/>
                    <div className="user-info">
                        <div className="info-name">
                            Pablo Ruiz Picasso
                        </div>
                        <div className="info-position info-footer">
                            Product Owner
                        </div>
                    </div>
                </div>
                <div className="user-dots" onClick={() => alert("User Dots")}>
                    <Dots/>
                </div>
            </div>
            <div className="statistic">
                <div className="statistic-quantity">
                    <div className="quantity">
                        372
                    </div>
                    <div className="info-footer">
                        Completed Tasks
                    </div>
                </div>
                <div className="statistic-quantity">
                    <div className="quantity">
                        11
                    </div>
                    <div className="info-footer">
                        Open Tasks
                    </div>
                </div>
            </div>
            <div className="sidebar-menu">
                <div className="menu sidebar-active" onClick={() => alert('In Menu')}>
                    Menu
                </div>
                <div className="menu" onClick={() => alert('In Home')}>
                    Home
                </div>
                <div className="menu" onClick={() => alert('In My tasks')}>
                    My Tasks
                </div>
                <div className="menu notifications" onClick={() => alert('In Notifications')}>
                    Notifications
                    <div className="notifications-new">
                        <SharedIcon color="#FFC200" size="20px" classname="round-number">3</SharedIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

