import React from "react";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WhoToFollowListItem = ({who}) => {
    return (
        <li className="list-group-item">
            <div className="row align-items-center justify-content-xl-around">
                <div className="col-lg-2 col-xl-2 col-xxl-2">
                    <img src={`/images/${who.avatarIcon}`} width="50px" className="rounded-circle"/>
                </div>
                <div className="col-lg-6 col-xl-6 col-xxl-7 text-nowrap">
                    <div className="fw-bolder">
                        {who.handle}
                        <span><FontAwesomeIcon className={"d-inline"} icon={faCheckCircle}/></span>
                    </div>
                    <div>@{who.userName}</div>
                </div>
                <div className="col-lg-1 col-xl-3 col-xxl-3">
                    <button type="button" className="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;