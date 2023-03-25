import React, {useState} from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

function TuitStats() {
    const tuitsArray = useSelector((state) => state.tuits);
    return (
        <>
            <ul className="list-group list-group-flush">
                {
                    tuitsArray.map(tuit => <TuitItem key={tuit.id} tuit={tuit}/>)
                }
            </ul>
        </>
    )
}

export default TuitStats;