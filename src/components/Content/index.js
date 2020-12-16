import React from 'react';
import "./content.scss"
import ContentTab from "../ContentTab";

const Content = (props) => {
    const renderActiveContentTab = () => {
        switch(props.activeTab) {
            case 0: {
                return <div className="content-tab">...need add!</div>
            }
            case 1: {
                return <div className="content-tab">...need add!</div>
            }
            case 2: {
                return <div className="content-tab"><ContentTab/></div>
            }
            case 3: {
                return <div className="content-tab">...need add!</div>
            }
            case 4: {
                return <div className="content-tab">...need add!</div>
            }
            default: {
                return null
            }
        }

    }
    return (
        <div className="content">
            {renderActiveContentTab()}
        </div>
    );
};

export default Content;

