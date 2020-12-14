import "./header.scss"
import React from 'react';
import enshteine from '../../assets/enshteine.jpg';
import tesla from '../../assets/nikola-tesla.jpg';
import musk from '../../assets/musk.jpg';
import chat from '../../assets/Combined Shape@1x.svg';
import shapes from '../../assets/Shapes@2x.png';
import Dots from "../shared/Dots";

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-inside1">
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
                <div className="header-inside1">
                    <div className="photos">
                        <img src={enshteine} className="photo" alt=""/>
                        <img src={tesla} className="photo" alt=""/>
                        <img src={musk} className="photo" alt=""/>
                    </div>
                        <div className="shared" onClick={() => alert('Shared to')}>Shared</div>
                        <div className="chat" onClick={() => alert('In chat')}>
                            <img src={chat} alt="." className="combiner-chat"/>
                            Chat
                        </div>
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
