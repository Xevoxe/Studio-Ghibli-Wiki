import React from 'react';
import Header from '../Views/Header';
import Table from '../Views/Table';
import fetchData from '../Views/fetchData';
import { ColumnHeader } from '../Views/Table';
import {Link} from 'react-router-dom';



const Characters= (props) => {
    return (
    <div className="container">  
        <Header title="Characters"/> 
        <Table className="table table-striped table-hover table-responsive-sm table-dark" data={props.characters} collapsable={RenderCharacterDetail} expandable>
            <ColumnHeader className="header" colkey="name">Name</ColumnHeader>
            <ColumnHeader className="header" colkey="gender">Gender</ColumnHeader>
            <ColumnHeader className="header" colkey="age">Age</ColumnHeader>
            <ColumnHeader className="header" colkey="eye_color">Eye Color</ColumnHeader>
            <ColumnHeader className="header" colkey="hair_color">Hair Color</ColumnHeader>
        </Table>
    </div>)
}

const RenderCharacterDetail = (props) => {
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
             <p>Appears in the film <Link className="btn btn-light" role="button" to={`/films/${props.films.id}`}>{props.films.title}</Link> AND &nbsp; </p>
        </div>
    )
}

const SpeciesDetail = fetchData({reqUrl:"",resName:""})(RenderSpeciesDetail);
const FilmDetail = fetchData({reqUrl:"",resName:""})(RenderFilmDetail);

const CharactersContainer= fetchData(
    {reqUrl:"https://ghibliapi.herokuapp.com/people",resName:"characters"});

export default CharactersContainer(Characters);