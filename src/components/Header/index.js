import "./header.scss"
import React from 'react';
import enshteine from '../../assets/enshteine.jpg';
import tesla from '../../assets/nikola-tesla.jpg';
import musk from '../../assets/musk.jpg';
import share from '../../assets/share.png';
import chat from '../../assets/Combined Shape@1x.svg';
import shapes from '../../assets/Shapes@2x.png';
import Dots from '../shared/Dots';
import Chip from "../shared/Chip";

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-inside1 width1">
                    <div>
                        <img src={shapes} className="shapes" alt=""/>
                    </div>
                    <div className="header-name">
                        Website Redesign
                    </div>
                    <div className="extra-menu" onClick={() => alert("Header extra menu")}>
                        <Dots/>
                    </div>
                </div>
                <div className="header-inside1 width2">
                    <div className="photos">
                        <img src={enshteine} className="photo" alt=""/>
                        <img src={tesla} className="photo" alt=""/>
                        <img src={musk} className="photo" alt=""/>
                    </div>
                    <Chip
                        onClick={() => alert('Shared to')}
                        backgroundColor="#EAEAEA"
                        color="#131313"
                    >
                        <p className='header-chip'>Share</p>
                        <img src={share} className="share-icon" alt=""/>
                    </Chip>
                    <Chip
                        onClick={() => alert('In chat')}
                        backgroundColor="#FFF8DD"
                        color="#FFC200"
                    >
                        <img src={chat} className="combiner-chat" alt=""/>,
                        <p className="header-chip">Chat</p>
                    </Chip>

                </div>
            </div>
            <div className="header-tabs">
                <div
                    className={`tabs-item ${props.activeTab === 0 ? "active" : ""}`}
                    onClick={() => props.setActiveTab(0)}
                >
                    Tasks
                </div>
                <div
                    className={`tabs-item ${props.activeTab === 1 ? "active" : ""}`}
                    onClick={() => props.setActiveTab(1)}
                >
                    Kanban
                </div>
                <div
                    className={`tabs-item ${props.activeTab === 2 ? "active" : ""}`}
                    onClick={() => props.setActiveTab(2)}
                >
                    Activity
                </div>
                <div
                    className={`tabs-item ${props.activeTab === 3 ? "active" : ""}`}
                    onClick={() => props.setActiveTab(3)}
                >
                    Calendar
                </div>
                <div
                    className={`tabs-item ${props.activeTab === 4 ? "active" : ""}`}
                    onClick={() => props.setActiveTab(4)}
                >
                    Files
                </div>
            </div>
        </div>
    );
};

export default Header;
