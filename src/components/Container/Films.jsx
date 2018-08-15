import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import 'es6-promises';
import DataRow from '../Views/DataRow';
import CellView from '../Views/CellView';
import CardView from '../Views/CardView';
import Collapsable from '../Views/Collapsable';


import logo from '../../images/logo.png';


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
                            data: {
                            title: film.title,
                            director: film.director,
                            producer: film.producer,
                            released: film.release_date,
                            rating: film.rt_score},
                            synopsis: film.description
                        };
                        data.push(info);
                    })
                    
                    this.setState({
                        films: data
                    });
                    
                })
    }

    handleClick(e){
    }
                
    render() {

        //Header for data
        let headings = ["Title","Director","Producer","Released","Rating"];
        let fields = () => {
            return (
                <DataRow className="row fields-row" onClick={this.handleClick}>
                    {headings.map((heading,index)=> {
                        return (
                        <div className={index < 2 ? "col-3" : "col"} key={index}>
                            <CellView tag="h2">{heading}</CellView>
                        </div>
                        )
                    })}
                </DataRow>
            )
        }

        return (
            <React.Fragment>
                <div className="jumbotron header">
                    <img src={logo}></img>
                    <h1 className="display-3">Films</h1>
                </div>

                {fields()}    
                {this.state.films.map((film,index)=> {
                    return ( 
                        <Collapsable>
                            <DataRow className={"row data-cells " + (index % 2 === 0 ? "even" : "odd")} onClick={this.handleClick}>
                                {Object.keys(film.data).map((key,i)=>{
                                    return (
                                                <div className={i < 2 ? "col-3" : "col"} key={key}>
                                                    <CellView>{film.data[key]}</CellView>
                                                    </div>
                                    )
                                    })}
                            </DataRow>
                            <DataRow>
                                <CellView tag="span">
                                    <CardView synopsis={film.synopsis}></CardView>
                                </CellView>
                            </DataRow>
                        </Collapsable>
                    )
                }
            )}
            </React.Fragment>
        )
    }  
} 
                               
export default Films;
