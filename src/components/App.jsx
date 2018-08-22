import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Characters from './Container/Characters';
import Film from './Container/Film';
import Films from './Container/Films';

class App extends Component{



    render(){
        return (
            <Router>
                <Fragment>
                    <Link to="/characters"></Link>
                    <Link to="/films/:id"></Link>
                    <Switch>
                        <Route exact path= "/characters" component={Characters} />
                        <Route exact path = "/films" component = {Films} />
                        <Route exact path= "/films/:id" component={Film} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}




export default App;