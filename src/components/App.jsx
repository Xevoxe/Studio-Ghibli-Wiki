import React, {Component} from 'react';
import Characters from './Container/Characters';
import fetchData from './Views/fetchData';


class App extends Component{



    render(){
        return <div className="container">
                <CharactersContainer />
                </div>
    }
}


const CharactersContainer= fetchData(
    {reqUrl:"https://ghibliapi.herokuapp.com/people",resName:"characters"})(Characters);

export default App;