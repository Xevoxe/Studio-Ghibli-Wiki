import React from 'react';
import fetchData from '../Views/fetchData';
import Table from '../Views/Table';
import {ColumnHeader} from '../Views/Table';
import Header from '../Views/Header';
import Navigation from '../Container/Navigation';


const Films = (props)=>{
    return (
         <div className="container">
            <Header title="Films"/>
            <Navigation style="dark"/>
            <Table className="table table-striped table-hover table-responsive-sm table-dark" data={props.films} onClick={handleClick} >
                <ColumnHeader className="header" colkey="title">Title</ColumnHeader>
                <ColumnHeader className="header" colkey="director">Director</ColumnHeader>
                <ColumnHeader className="header" colkey="producer">Producer</ColumnHeader>
                <ColumnHeader className="header" colkey="release_date">Release Date</ColumnHeader>
                <ColumnHeader className="header" colkey="rt_score">Rating</ColumnHeader>
            </Table>
        </div>
    )
    
}

//Handle Click events on the table rows.  Passed into Table on onClick event handler.
const handleClick = (e,history) =>{
    history.push(`/films/${e.currentTarget.id}`);
}


const FilmsContainer = fetchData({reqUrl:"https://ghibliapi.herokuapp.com/films", resName:"films"});

export default FilmsContainer(Films);