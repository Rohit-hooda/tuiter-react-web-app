import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import TuitStats from "../tuits";
import WhoToFollowList from "../who-to-follow-list";
import WhatsHappening from "../home/whats-happening";

function HomeComponent() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6">
                <h1 className={"p-1"}>Home</h1>
                <WhatsHappening/>
                <TuitStats/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4 list-group">
                <WhoToFollowList/>
            </div>

        </div>
    )
}

export default HomeComponent;
