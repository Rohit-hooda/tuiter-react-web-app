import ExploreComponent from "./explore";
import {Route, Routes} from "react-router";
import HomeComponent from "./HomeScreenComponent";

function Tuiter() {
    return (
        <Routes>
            <Route index element={<HomeComponent/>}/>
            <Route path="home" element={<HomeComponent/>}/>
            <Route path="explore" element={<ExploreComponent/>}/>
        </Routes>

    );
}

export default Tuiter;