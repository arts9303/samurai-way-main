import React from "react";
import {MyPosts} from "./myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";

export const Profile = () => {
    return(
        <div>

            <ProfileInfo />
            <MyPosts />

        </div>
    )
}