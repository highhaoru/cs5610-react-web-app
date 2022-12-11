import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {json, useParams, useLocation} from "react-router-dom";


function DetailComponent() {
    const params = useParams();
    const location = useLocation();
    console.log(location)
    const gameId = params.gid;
    const game = location.state;

    return(
        <div className="container">
            <h2>Detail</h2>
            <img src={`${game.Poster}`}/>
            <div>Name: {game.Title}</div>
            <div>Release year{game.Year}</div>

        </div>
    );
}
export default DetailComponent;