import React, { Component } from 'react';

const fetchData = ({reqUrl, resName}) => WrappedComponent => {
    return class FetchData extends Component {
        constructor(props) {
            super(props);
            console.log(props);
            
            if(props.reqUrl){
                reqUrl = props.reqUrl;
            }
            if(props.resName){
                resName = props.resName;
            }



            this.state = ({
                [resName]: null,
            })
        }

         componentWillMount(){
            fetch(reqUrl).then ((response) => response.json())
            .catch((error) => { console.log(error)})
            .then((res)=> {
                //Check to see if the response is an array or an object
                if(!Array.isArray(res)){
                    this.setState(prevState => ({
                        [resName]: res
                    }))
                }else{
                    this.setState(prevState => ({
                    [resName]: [...res]
            })
            )}}
            )
        }
            render() {
                return this.state[resName] ? <WrappedComponent {...this.props} {...this.state} /> : <div></div>
            }
        }
    }
export default fetchData;