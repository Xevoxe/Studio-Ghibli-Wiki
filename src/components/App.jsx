import React, {Component} from 'react';
import Characters from './Container/Characters';
import withContainer from './Views/withContainer';
import withParser from './Views/withParser';


class App extends Component{



    render(){
        return <div className="container">
                <CharactersWithContainer />
                </div>
    }
}

let test = ['name','age','gender', 'eye_color','hair_color','films','species'];



const CharactersWithContainer= withContainer(
    {reqUrl:"https://ghibliapi.herokuapp.com/people"})(withParser({attributes: test, parsedData: "characters"})(Characters));

export default App;