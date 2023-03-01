import React from "react";
import {
    faArrowUpFromBracket,
    faComment,
    faEllipsis,
    faHeart,
    faRetweet
} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostListItem = ({post}) => {
    return (
        <li className="list-group-item">
            <div className="row align-top">
                <div className="col-1">
                    <img src={`../images/${post.avatar}`}
                         className="rounded-circle"
                         width={45} alt={"Avatar"}></img>
                </div>
                <div className="col-10">
                      <span><b>{post.userName}</b>
                      <i className="fa-solid fa-circle-check"></i>
                      </span><br/>
                    <span style={{color: "darkgray"}}>{post.annotation}</span> <br/>
                    <span>{post.title}</span>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon className={"fa-solid"} icon={faEllipsis}/>
                </div>
            </div>

            <div className="card wd-article-card rounded-5 ms-4 mt-1">
                <img className="card-img-top rounded-5 " src={`../images/${post.image}`}
                     style={{height: 450}}/>
                {post.card_title === undefined ? '' :
                      <div className="card-body">           
                          <h6 className="card-title" style={{color: "grey"}}>{post.card_title}</h6>
                          <p className="card-text" style={{color: "darkgray"}}>{post.card_content}</p>
                      </div>
                }
            </div>

            <div className="row mt-3 ms-5">
              <span className="col-3">
                <a>
                    <FontAwesomeIcon className={"fa-regular wd-icon-config"} icon={faComment}/>
                </a>
                <span> {post.comments}</span>
              </span>
                <span className="col-3">
                <a>
                    <FontAwesomeIcon className={"fa-regular wd-icon-config"} icon={faRetweet}/>
                </a>
                <span> {post.retweets}</span>
              </span>
                <span className="col-3">
                <a style={{color: "red"}}>
                    <FontAwesomeIcon className={"fa-solid wd-icon-config"}
                                     icon={faHeart}/>
                  </a>
                <span> {post.likes}</span>
              </span>
                <span className="col-3">
                <a>
                    <FontAwesomeIcon className={"fa-solid wd-icon-config"}
                                     icon={faArrowUpFromBracket}/>
                </a>
                <span></span>
              </span>
            </div>
        </li>
    );
}
export default PostListItem;