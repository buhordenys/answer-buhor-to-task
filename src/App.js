import React from 'react';
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import './App.scss';

function App() {
  return (
    <div className="app-wrapper">
        <Sidebar/>
        <Page/>
    </div>
  );
}

export default App;
