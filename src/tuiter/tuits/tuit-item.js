import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowUpFromBracket,
    faCircle,
    faCircleCheck,
    faComment,
    faHeart,
    faRetweet,
    faX
} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="row align-top">
                <div className="col-10">
                    <img src={`../images/${tuit.image}`}
                         className="rounded-circle "
                         width={45} alt={"Avatar"}></img>
                    <span className={"p-1"}><b>{tuit.userName}</b>
                      <i className="fa-solid fa-circle-check"></i>
                    </span>

                    <FontAwesomeIcon className={"fa-solid fa-circle-check "}
                                     icon={faCircleCheck}/>
                    <span style={{color: "darkgray"}} className={"p-1"}>{tuit.handle}</span>
                    <FontAwesomeIcon className={"fa-solid fa-circle fa-xs"} icon={faCircle}/>
                    <span style={{color: "darkgray"}} className={"p-1"}>{tuit.time}</span>
                     <FontAwesomeIcon
                        className={"fa-solid float-end p-2 fa-xs"} icon={faX} onClick={() => deleteTuitHandler(tuit.id)}/>
                </div>
                <div className="col-10">
                    <span>{tuit.tuit}</span>
                </div>

            </div>

            <div className="row mt-3 ms-5">
                           <span className="col-3">
                           <a>
                           <FontAwesomeIcon className={"fa-regular wd-icon-config"}
                                            icon={faComment}/>
                           </a>
                           <span> {tuit.replies}</span>
                           </span>
                <span className="col-3">
                           <a>
                           <FontAwesomeIcon className={"fa-regular wd-icon-config"}
                                            icon={faRetweet}/>
                           </a>
                           <span> {tuit.retuits}</span>
                           </span>
                <span className="col-3">
                           <a style={{color: "red"}}>
                           <FontAwesomeIcon className={"fa-solid wd-icon-config"}
                                            icon={faHeart}/>
                           </a>
                           <span> {tuit.likes}</span>
                           </span>
                <span className="col-3">
                           <a>
                           <FontAwesomeIcon className={"fa-solid wd-icon-config"}
                                            icon={faArrowUpFromBracket}/>
                           </a>
                           <span></span>
                           </span>
            </div>
        </li>);

};
export default TuitItem;

