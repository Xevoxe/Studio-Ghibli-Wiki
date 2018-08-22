import React from 'react';
import Header from '../Views/Header';
import Table from '../Views/Table';
import fetchData from '../Views/fetchData';
import { ColumnHeader } from '../Views/Table';



const Characters= (props) => {
    console.log(props);
    return (
    <React.Fragment>   
        <Header title="Characters"/> 
        <Table className="table table-striped table-hover table-responsive-sm table-dark" data={props.characters} collapsable={RenderCharacterDetail}>
            <ColumnHeader className="header" colkey="name">Name</ColumnHeader>
            <ColumnHeader className="header" colkey="gender">Gender</ColumnHeader>
            <ColumnHeader className="header" colkey="age">Age</ColumnHeader>
            <ColumnHeader className="header" colkey="eye_color">Eye Color</ColumnHeader>
            <ColumnHeader className="header" colkey="hair_color">Hair Color</ColumnHeader>
        </Table>
    </React.Fragment>)
}

const RenderCharacterDetail = (props) => {
    console.log(props);
    return (
        <div className="character-detail row">
            <div className="row center">
                <FilmDetail reqUrl={props.films[0]} resName={"films"}/>
                <SpeciesDetail reqUrl={props.species} resName="species"/>
            </div>
        </div>
    )
}

const RenderSpeciesDetail = (props)=> {
        return (
            <div>
                <p> Species is <button>{props.species.classification}</button></p>
            </div>
        )
}
const RenderFilmDetail = (props)=> {
    return (
         <div>  
             <p>Appears in the film <button>{props.films.title}</button> AND &nbsp; </p>
        </div>
    )
}

const SpeciesDetail = fetchData({reqUrl:"",resName:""})(RenderSpeciesDetail);
const FilmDetail = fetchData({reqUrl:"",resName:""})(RenderFilmDetail);



export default Characters;