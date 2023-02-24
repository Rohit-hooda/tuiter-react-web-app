import React from "react";
import posts from "./posts";
import PostListItem from "./post-list-item";
import NavigationSidebar from "../navigation-sidebar";
import Nav from "../../nav";

function HomeComponent() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                <Nav/>
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6">
                <ul className="list-group list-group-flush">
                    {
                        posts.map(post => <PostListItem key={post.id} post={post}/>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default HomeComponent;
