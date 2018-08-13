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

        this.handleClick = this.handleClick.bind(this);
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
                            title: film.title,
                            director: film.director,
                            producer: film.producer,
                            released: film.release_date,
                            rating: film.rt_score,
                            synopsis: film.description
                        };
                        
                        data.push(info);
                    })
  
                    this.setState({
                        films: data
                    });
                    
                })
    }

    handleClick(key){
        console.log("Clicked");
        console.log(key.currentTarget);
        console.log(this.props.children);
    }
                
    render() {
        return <FilmsView films={this.state.films} />
    }
}
export default Films;
