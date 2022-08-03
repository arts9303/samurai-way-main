import React from "react";
import s from "./Sidebar.module.css"

export const Sidebar = () => {
    return(
        <nav className={s.nav}>
            <div><a href="src/component/sidebar/Sidebar#">Profile</a></div>
            <div><a href="src/component/sidebar/Sidebar#">Messages</a></div>
            <div><a href="src/component/sidebar/Sidebar#">News</a></div>
            <div><a href="src/component/sidebar/Sidebar#">Music</a></div>
            <div><a href="src/component/sidebar/Sidebar#">Settings</a></div>
        </nav>
    )
}