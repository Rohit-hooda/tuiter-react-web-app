import React from "react";
import {useSelector} from "react-redux";
import EditProfileDisplay from "./edit-profile";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";

const EditProfile = () => {
    const profile = useSelector(
        (state) => state.profile);

    return(
    <div className="row mt-2">
        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar/>
        </div>
        <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6">
            <EditProfileDisplay key={profile._id} profile={profile[0]}/>
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4 list-group">
            <WhoToFollowList/>
        </div>
    </div>
    );
};

export default EditProfile;