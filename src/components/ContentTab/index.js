import React from "react";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.jpg';
import done from '../../assets/Icon@3x.svg';
import chat from '../../assets/chat.png';
import download from '../../assets/download.png';
import SharedIcon from "../shared/SharedIcon";
import './contentTab.scss'

const ContentTab = () => {
 return (
     <div className="content-activity">
         <div className="activity-tasks">
             <div className="mark">
                 TODAY
             </div>
         </div>
         <div className="activity-tasks">
             <SharedIcon color="#CEF9C6" size="40px">
                 <img src={done} alt="" className="icon-in-round"/>
             </SharedIcon>
             <div className="text">Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users</div>
             <div className="time">8:40 PM</div>
         </div>
         <div className="activity-tasks">
             <SharedIcon color="#FFF8DD" size="40px">
                 <img src={chat} alt="" className="icon-in-round"/>
             </SharedIcon>
             <div className="text">Emilee Simchenko commented on Account for teams and personal in bottom style</div>
             <div className="time">7:32 PM</div>
             <div className="answer">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</div>
         </div>
         <div className="activity-tasks">
             <SharedIcon color="#E3EFFF" size="40px">
                 <img src={download} alt="" className="icon-in-round"/>
             </SharedIcon>
             <div className="text">Darika Samak uploaded 4 files on An option to search in current projects or in all projects</div>
             <div className="time">6:02 PM</div>
             <div className="answer-img">
                 <img src={img1} alt="loading" className="img"/>
                 <img src={img2} alt="loading" className="img"/>
                 <img src={img3} alt="loading" className="img"/>
                 <img src={img4} alt="loading" className="img"/>
             </div>
         </div>
     </div>
 );
};

export default ContentTab
