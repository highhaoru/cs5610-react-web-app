import React, {useEffect, useState} from "react";
import {useParams, useLocation} from "react-router-dom";

import NewReview from "./new-review";
import ReviewList from "./review-list";
import {useDispatch, useSelector} from "react-redux";
import {findJoinedThunk, joinGroupThunk} from "../services/group-thunks";
import {findReviewsThunk} from "../services/review-thunks";
import GameCard from "../igdb/igdb-card";

function DetailComponent() {
    const {joined} = useSelector(state => state.group)
    const {currentUser} = useSelector((state) => state.users)
    const params = useParams();
    const location = useLocation();
    const gameId = params.gid;
    const game = location.state;
    const dispatch = useDispatch();
    const joinGroupHandler = () => {
        dispatch(joinGroupThunk({uid: currentUser._id, gid:gameId.toString()}));
    }
    useEffect(() => {
        dispatch(findJoinedThunk(currentUser._id))
    }, [])

    // console.log(joined[0])
    return(
        <div className="container">
            {/*{*/}
            {/*    joined && joined.map((game) =>*/}
            {/*            <GameCard key={game}/>*/}
            {/*        // <li key={game.imdbID} className="list-group-item">*/}
            {/*        //     {game.Title}*/}
            {/*        //     <img src={game.Poster}></img>*/}
            {/*        // </li>*/}
            {/*    )*/}
            {/*}*/}
            <div className="d-flex flex-row justify-content-evenly mt-3">
                <div>
                    <img src={`${game.Poster}`}/>
                </div>
                <div className="align-self-center ">
                    <h2>{game.Title}</h2>
                    <div>Release year: {game.Year}</div>
                    <button className={`
                    rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold`}
                            onClick={joinGroupHandler}>
                        Join Fans Group of {game.Title}
                    </button>
                    {/*<button className={`${!joined? "d-none": ""}*/}
                    {/*rounded-pill btn btn-disabled float-end mt-2 ps-3 pe-3 fw-bold`}>*/}
                    {/*    Has Joined this Group*/}
                    {/*    <i className="bi bi-check-lg align-self-center p-0 m-0"></i>*/}
                    {/*</button>*/}
                </div>
                <div></div>
            </div>
            <NewReview gid={gameId}/>
            <ReviewList gid={gameId}/>
        </div>
    );
}
export default DetailComponent;
