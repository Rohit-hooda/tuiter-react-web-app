import React from "react";
import posts from "./posts";
import PostSummaryItem from "../post-summary-list/post-summary-item";

function HomeComponent() {
    return (
        <div>
                <div >
                    <ul className="list-group list-group-flush">
                        {
                            posts.map(post => <PostSummaryItem key={post.id} post={post}/>)
                        }
                    </ul>
                </div>
        </div>
    )
}

export default HomeComponent;
