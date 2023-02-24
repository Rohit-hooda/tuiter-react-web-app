import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell,
    faBookmark,
    faEnvelope,
    faHashtag,
    faHome,
    faList,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">

            <a href="#" className="list-group-item">
                <FontAwesomeIcon className={"d-inline"} icon={faTwitter}/>
                <span className="d-none d-xl-inline"></span>
            </a>

            <Link to="/tuiter/home"
                  className={`list-group-item ${active === "home" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faHome}/>
                <span className="d-none d-xl-inline"> Home</span>
            </Link>

            <Link to="/tuiter/explore"
                  className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faHashtag}/>
                <span className="d-none d-xl-inline"> Explore</span>
            </Link>

            <Link to="/tuiter/notifications"
                  className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faBell}/>
                <span className=" d-none d-xl-inline"> Notifications</span>
            </Link>
            <Link to="/tuiter/messages"
                  className={`list-group-item ${active === "messages" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faEnvelope}/>
                <span className="d-none d-xl-inline"> Messages</span>
            </Link>
            <Link to="/tuiter/bookmarks"
                  className={`list-group-item ${active === "bookmarks" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faBookmark}/>
                <span className="d-none d-xl-inline"> Bookmarks</span>
            </Link>
            <Link to="/tuiter/lists"
                  className={`list-group-item ${active === "lists" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faList}/>
                <span className="d-none d-xl-inline"> Lists</span>
            </Link>
            <Link to="/tuiter/profile"
                  className={`list-group-item ${active === "profile" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faUser}/>
                <span className="d-none d-xl-inline"> Profile</span>
            </Link>
            <Link to="/tuiter/more"
                  className={`list-group-item ${active === "more" ? 'active' : ''}`}>
                <img src="/images/more-icon.png" style={{width: "20px"}}></img>
                < span className="d-none d-xl-inline"> More </span>
            </Link>
        </div>);
};
export default NavigationSidebar;