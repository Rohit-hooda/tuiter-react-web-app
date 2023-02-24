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

const NavigationSidebar = ({active}) => {
    return (
        <div className="list-group">

            <a href="#" className="list-group-item">
                <FontAwesomeIcon className={"d-inline"} icon={faTwitter}/>
                <span className="d-none d-xl-inline"></span>
            </a>

            <a href="#" className={`list-group-item ${active === "Home" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faHome}/>
                <span className="d-none d-xl-inline"> Home</span>
            </a>

            <a href="#" className={`list-group-item ${active === 'Explore' ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faHashtag}/>
                <span className="d-none d-xl-inline"> Explore</span>
            </a>
            <a href="#" className={`list-group-item ${active === 'Notifications' ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faBell}/>
                <span className=" d-none d-xl-inline"> Notifications</span>
            </a>
            <a href="#" className={`list-group-item ${active === "Messages" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faEnvelope}/>
                <span className="d-none d-xl-inline"> Messages</span>
            </a>
            <a href="#" className={`list-group-item ${active === "Bookmarks" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faBookmark}/>
                <span className="d-none d-xl-inline"> Bookmarks</span>
            </a>
            <a href="#" className={`list-group-item ${active === "Lists" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faList}/>
                <span className="d-none d-xl-inline"> Lists</span>
            </a>
            <a href="#" className={`list-group-item ${active === "Profile" ? 'active' : ''}`}>
                <FontAwesomeIcon className={"d-inline"} icon={faUser}/>
                <span className="d-none d-xl-inline"> Profile</span>
            </a>
            <a href="#" className={`list-group-item ${active === "More" ? 'active' : ''}`}>
                <img src="/images/more-icon.png" style={{width: "20px"}}></img>
                < span className="d-none d-xl-inline"> More </span>
            </a>
        </div>);
};
export default NavigationSidebar;