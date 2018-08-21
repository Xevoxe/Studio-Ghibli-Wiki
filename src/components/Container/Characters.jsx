import React from 'react';
import Header from '../Views/Header';
import InfoBox from '../Container/InfoBox';
import Table from '../Views/Table';
import withContainer from '../Views/withContainer';
import { ColumnHeader } from '../Views/Table';


const Characters= (props) => {
    return (
    <React.Fragment>   
        <Header title="Characters"/> 
        <Table className="table table-striped table-hover table-responsive-sm table-dark" data={props.characters} collapsable={ExpandedContent}>
            <ColumnHeader className="header" colkey="name">Name</ColumnHeader>
            <ColumnHeader className="header" colkey="gender">Gender</ColumnHeader>
            <ColumnHeader className="header" colkey="age">Age</ColumnHeader>
            <ColumnHeader className="header" colkey="eye_color">Eye Color</ColumnHeader>
            <ColumnHeader className="header" colkey="hair_color">Hair Color</ColumnHeader>
        </Table>
    </React.Fragment>)
}

const ExpandedContent = (props)=>{
    const CharacterContainer = withContainer({reqUrl: props.films[0]})(renderCharacterDetail);
    return (
        <CharacterContainer/>
    )
}

const renderCharacterDetail = (props) => {
    return <div></div>
}





export default Characters;