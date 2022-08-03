import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type DialogMessagePropsType = {
    message: string
}


export const DialogItem = (props: DialogItemPropsType) => {

    let path = "/dialogs/" + props.id;

    return(
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export const DialogMessage = (props: DialogMessagePropsType) => {
    return <div className={s.message}>{props.message}</div>;
}