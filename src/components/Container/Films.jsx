import React from 'react';
import fetchData from '../Views/fetchData';
import Table from '../Views/Table';
import {ColumnHeader} from '../Views/Table';
import Header from '../Views/Header';


const Films = (props)=>{
    console.log(props);
    return (
         <div className="container">
            <Header title="Films"/>
            <Table className="table table-striped table-hover table-responsive-sm table-dark" data={props.films} >
                <ColumnHeader className="header" colkey="title">Title</ColumnHeader>
                <ColumnHeader className="header" colkey="director">Director</ColumnHeader>
                <ColumnHeader className="header" colkey="producer">Producer</ColumnHeader>
                <ColumnHeader className="header" colkey="release_date">Release Date</ColumnHeader>
                <ColumnHeader className="header" colkey="rt_score">Rating</ColumnHeader>
            </Table>
        </div>
    )
    
}


const FilmsContainer = fetchData({reqUrl:"https://ghibliapi.herokuapp.com/films", resName:"films"});

export default FilmsContainer(Films);