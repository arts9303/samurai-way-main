import React from 'react';
import './App.css';
// start components import
import {Header} from "./component/header/Header";
import {Sidebar} from "./component/sidebar/Sidebar";
import {Profile} from "./component/content/profile/Profile";
//end components import

function App() {
    return (
        <div className="app-wrapper">

            <Header />
            <Sidebar />
            <div className="content">
                <Profile />
            </div>
        </div>
    );
}

export default App;
