import React from 'react';
import "./sharedIcon.scss"
import done from '../../../assets/Icon@3x.svg';
import chat from '../../../assets/chat.png';
import download from '../../../assets/download.png';

const SharedIcon = (props) => {
    const getIcon = () => {
        switch(props.selected) {
            case '0': {
                return <img src={done} alt="" className="icon-in-round"/>
            }
            case '1': {
                return <img src={chat} alt="" className="icon-in-round"/>
            }
            case '2': {
                return <img src={download} alt="" className="icon-in-round"/>
            }
            default: {
                return null
            }
        }
    }
    return (
        <div className="shared-icon" style={{backgroundColor:props.color, width:props.size, height:props.size}}>
            {getIcon()}
        </div>
    );
};

export default SharedIcon
