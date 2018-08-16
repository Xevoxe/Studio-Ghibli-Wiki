import React from 'react';
import GridView from '../Views/GridView';
import logo from '../../images/logo.png';

let FilmsView = (props) => {
    let headings = ["Title","Director","Producer","Released","Rating"];
    return (
            <React.Fragment>
                <div className="jumbotron header">
                    <img src={logo}></img>
                    <h1 className="display-3">Films</h1>
                </div>

                <GridView fields={headings} data={props.films}/>
 
            </React.Fragment>
        )
};
export default FilmsView;