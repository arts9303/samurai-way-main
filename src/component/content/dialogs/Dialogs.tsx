import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem, DialogMessage} from "./DialogItem";

export const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.DialogItems}>
                <DialogItem name="Andrey" id={1} />
                <DialogItem name="John" id={2} />
                <DialogItem name="Lily" id={3} />
                <DialogItem name="Amily" id={4} />
            </div>
            <div className={s.messages}>
                <DialogMessage message="Message 1" />
                <DialogMessage message="Message 2" />
                <DialogMessage message="Message 3" />
            </div>
        </div>
    )
}