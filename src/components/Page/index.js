import React, {useState} from 'react';
import Header from "../Header";
import Content from "../Content";
import './page.scss'

const Page = () => {
    const [activeTab, setActiveTab] = useState(2);
    return (
        <div className="page-wrapper">
            <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Content activeTab={activeTab}/>
        </div>
    )
};

export default Page
