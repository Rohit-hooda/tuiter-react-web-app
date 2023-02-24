import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import NavigationSidebar from "../navigation-sidebar";
import Nav from "../../nav"
import WhoToFollowList from "../who-to-follow-list";

const ExploreComponent = () => {
    return (

        <div className="row mt-2">
            <Nav/>
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Explore"/>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6">
                <div className="row">
                    <div className="col-11 position-relative">
                        <input placeholder="Search Tuiter"
                               className="form-control rounded-pill ps-5"/>
                        <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                    </div>
                    <div className="col-1">
                        <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                    </div>
                </div>
                <ul className="nav nav-pills mb-2">
                    <li className="nav-item">
                        <a className="nav-link active">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">News</a>
                    </li>
                </ul>
                <div className="position-relative mb-2">
                    <img src="/images/spacex.webp" className="w-100"/>
                    <h1 className="position-absolute wd-nudge-up text-white">
                        SpaceX Starship</h1>
                </div>
                <PostSummaryList/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4 list-group">
                <WhoToFollowList/>
            </div>
        </div>
    )

};
export default ExploreComponent;