import React from "react";
import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink className={s.item} activeClassName={s.active} to="/profile">Profile</NavLink></div>
            <div><NavLink className={s.item} activeClassName={s.active} to="/dialogs">Messages</NavLink></div>
            <div><NavLink className={s.item} activeClassName={s.active} to="/news">News</NavLink></div>
            <div><NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink></div>
            <div><NavLink className={s.item} activeClassName={s.active} to="/settings">Settings</NavLink></div>
        </nav>
    )
}