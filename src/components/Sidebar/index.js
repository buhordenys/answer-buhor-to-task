import "./sidebar.scss"
import React from 'react';
import SharedIcon from "../shared/SharedIcon";
import logo3x from '../../assets/Logo@3x.svg';
import search from '../../assets/Search@3x.svg';
import picasso from '../../assets/picasso.jpg';
import Dots from "../shared/Dots";

const Sidebar = () => {
    const OnInput = () => {
        return (
            /*<input type="text" className="input"/>*/
            console.log('click')
        )
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo-name">
                    <div className="logo">
                        <img src={logo3x} alt='...' className="sidebar-logo"/>
                    </div>
                    <div className="sidebar-name">
                        PROJECTUS
                    </div>
                </div>
                <div className="sidebar-search" onClick={() => alert('Turn on Input')}>
                    <input type="text" className="input"/>
                    <img src={search} className="search-button" onClick={() => OnInput()}/>
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
                <div className="user-dots" onClick={() => alert("User dots")}>
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
                        <SharedIcon color="#FFC200" size="20px" classname="round-number"/>
                        <p className="number">3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

