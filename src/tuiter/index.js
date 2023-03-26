import ExploreComponent from "./explore";
import {Route, Routes} from "react-router";
import HomeComponent from "./HomeScreenComponent";
import whoReducer from "./reducers/who-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import ProfileComponent from "./ProfileComponent";
import EditProfileInformation from "./edit-profile/index";
import profile from "../tuiter/reducers/profile-reducer";

const store = configureStore(
    {reducer: {whoToFollow: whoReducer, tuits: tuitsReducer, profile: profile}});

function Tuiter() {
    return (
        <Provider store={store}>
            <Routes>
                <Route index element={<HomeComponent/>}/>
                <Route path="home" element={<HomeComponent/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
                <Route path="profile" element={<ProfileComponent/>}/>
                <Route path="edit-profile" element={<EditProfileInformation/>}/>
            </Routes>
        </Provider>

    );
}

export default Tuiter;