import React from 'react';
import {Fragment} from 'react';
import CardView from './CardView';

let FilmsView = (props) => {
    console.log(props.films);
    return (
        <div className="container">

            <div className="row">
                <div className="col">
                    <h5>Title</h5>
                </div>
                <div className="col">
                    <h5>Director</h5>
                </div>
                <div className="col">
                    <h5>Producer</h5>
                </div>
                <div className="col">
                    <h5>Released Date</h5>
                </div>
            </div>
            {props.films.map((film) => {
                return (
                    <Fragment key={film.key}>
                        <div className="row" onClick={props.onClick}>
                            <div className="col">
                                <p>{film.title}</p>
                            </div>
                            <div className="col">
                                <p>{film.director}</p>
                            </div>
                            <div className="col">
                                <p>{film.producer}</p>
                            </div>
                            <div className="col">
                                <p>{film.released}</p>
                            </div>
                        </div>
                    </Fragment>
                )}
            )}                
        </div>
    )
};
export default FilmsView;