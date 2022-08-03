import React from 'react';
import './App.css';
import {BrowserRouter, Route, Router} from "react-router-dom";
// start components import
import {Header} from "./component/header/Header";
import {Sidebar} from "./component/sidebar/Sidebar";
import {Profile} from "./component/content/profile/Profile";
import {Dialogs} from "./component/content/dialogs/Dialogs";

import {News} from "./component/content/news/News";
import {Music} from "./component/content/music/Music";
import {Settings} from "./component/content/settings/Settings";
//end components import

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">

                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
