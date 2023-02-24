import React from "react";

const PostListItem = ({post}) => {
    return (
        <li className="list-group-item">
            <div className="row align-top">
                <div className="col-1"><img src={`/images/{post.avatar}`}
                                            className="rounded-circle"
                                            width={45} alt={"Avatar"}/>
                </div>
                <div className="col-10">
                      <span><b>{post.userName}</b>
                      <i className="fa-solid fa-circle-check"></i>
                      </span>
                    <span style={{color: "darkgray"}}>${post.annotation}</span>
                    <span>{post.title}</span>
                </div>
                <div className="col-1"><i className="fa-solid fa-ellipsis"></i></div>
            </div>

            <div className="card wd-article-card rounded-5 ms-4 mt-1">
                <img className="card-img-top rounded-5 " src={`/images/{post.image}`}/>
                {post.card_title === undefined ? '' : `
                      <div className="card-body">           
                          <h6 className="card-title" style={{color: "lightgrey"}}>{post.card_title}</h6>
                          <p className="card-text" style={{color: "darkgray"}}>{post.card_content}</p>
                      </div>`
                }
            </div>

            <div className="row mt-3 ms-5">
              <span className="col-3">
                <a><i className="fa-regular fa-comment wd-icon-config"></i></a>
                <span> {post.comments}</span>
              </span>
                <span className="col-3">
                <a><i className="fa-solid fa-retweet wd-icon-config"></i></a>
                <span> {post.retweets}</span>
              </span>
                <span className="col-3">
                <a className="wd-likes-red"><i className="fa-solid fa-heart wd-icon-config"></i></a>
                <span> {post.likes}</span>
              </span>
                <span className="col-3">
                <a><i className="fa-solid fa-arrow-up-from-bracket wd-icon-config"></i></a>
                <span></span>
              </span>
            </div>
        </li>
    );
}
export default PostListItem;