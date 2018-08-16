import React, { Component } from 'react';
import CharactersView from '../Views/CharactersView';
import withContainer from '../Views/withContainer';

const CharacterswithContainer= () => {
    return <CharactersWithContainer />

    // componentWillMount(){
    //     fetch("https://ghibliapi.herokuapp.com/people").catch((error) => console.log(error))
    //     .then((characters)=> characters.json())
    //     .then((characters) => {
    //          let data = [];
    //          characters.map((character) => {
    //              let info = {
    //                  data: {
    //                         name: character.name,
    //                         age: character.age,
    //                         gender: character.gender,
    //                         eye_color: character.eye_color,
    //                         hair_color: character.hair_color,
    //                  },
    //                  id: character.id,
    //                  species: character.species,
    //                  films: character.films    
    //              }
    //              data.push(info);
    //          })
    //          this.setState({characters: data});
    //     })
    // }

}

const CharactersWithContainer = withContainer(
    {reqUrl:"https://ghibliapi.herokuapp.com/people", resName:'characters'})(CharactersView)


export default CharactersWithContainer;