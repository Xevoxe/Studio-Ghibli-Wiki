import React from 'react';
import GridView from './GridView';
import logo from '../../images/logo.png';

const CharactersView = (props) => {
    let headings= ["Name","Age","Gender","Eye Color","Hair Color"];
    console.log(props.characters);   
    return (
        <React.Fragment>
            {/* <div className="jumbotron header">
                <img src={logo}></img>
                <h1 className="display-3">Characters</h1>
            </div>*/

            <GridView fields={headings} data={props.characters}/> }

        </React.Fragment>
    )
}
export default CharactersView;