import React from "react";

const PostSummaryItem = ({post}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-9 col-md-10">
                    <div className="text-secondary">{post.topic}</div>
                    <div><span className="fw-bolder">{post.userName}</span>
                        <span>
                        <i className="fas fa-check-circle"></i>
                    </span>
                        <span className="text-secondary">- {post.time}</span>
                    </div>
                    <div className="fw-bolder">
                        {post.title ? post.title : " "}
                    </div>
                </div>
                <div className="col-3 col-md-2">
                    <img src={`/images/${post.image}`} className="float-end rounded-3"
                         width={90}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;

