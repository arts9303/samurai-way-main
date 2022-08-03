import React from "react";
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>

                <textarea></textarea>
                <div>
                    <button className="add">Add</button>
                </div>
            </div>

            <div>
                <Post message="Post 1 text"/>
                <Post message="Post 2 text"/>

            </div>

        </div>
    )
}