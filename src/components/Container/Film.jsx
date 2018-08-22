import React, {Component} from 'react';
import fetchData from '../Views/fetchData';
import Header from '../Views/Header';

const Film = (props)=> {
        let reqUrl = `https://ghibliapi.herokuapp.com/films/${props.match.params.id}`

        return <FilmContainer reqUrl={reqUrl} resName="film"/>
}
export default Film;

const renderFilm = (props)=>{
    console.log(props);
    return (
        <div className="container">
            <Header title={props.film.title}></Header>

            <div className="card w-75 center">
                <div className="card-body">
                    <h3 className="card-title">Synopsis</h3>
                    <p className="card-text">{props.film.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="row">
                            <span className="col-3">Director:</span>
                            <span className="col">{props.film.director}</span>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                            <span className="col-3">Producer:</span>
                            <span className="col">{props.film.producer}</span>
                        </div>
                    </li>
                        <li className="list-group-item ">
                            <div className="row">
                                <span className="col-3">Release Date:</span>
                                <span className="col">{props.film.release_date}</span>
                            </div>
                        </li>
                        <li className="list-group-item ">
                            <div className="row">
                                <span className="col-3">Rating:</span>
                                <span className="col">{props.film.rt_score}</span>
                            </div>
                        </li>
                </ul>
            </div>    
        </div>
    )
}

const FilmContainer = fetchData({reqUrl:"",resName:""})(renderFilm);

