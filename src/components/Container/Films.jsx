import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import 'es6-promises';
import FilmsView from '../Views/FilmsView';



class Films extends Component{
    constructor(props){
        super(props);

        this.state = {
            films: []
            
        }
    }

    componentWillMount(){
        //Fetch Film data from API
        fetch("https://ghibliapi.herokuapp.com/films")
            .then( (films) => films.json())
            .catch((error) => { console.log(error)})
                .then( (films) => {
                    let data = [];
                    //Parse out the information required
             
                    films.map((film)=> {
                        let info = {
                            key: film.id,
                            data: {
                            title: film.title,
                            director: film.director,
                            producer: film.producer,
                            released: film.release_date,
                            rating: film.rt_score},
                            description: film.description
                        };
                        data.push(info);
                    })
                    
                    this.setState({
                        films: data
                    });
                    
                })
    }
                
    render() { return <FilmsView films={this.state.films} />
    }
}                            
export default Films;
