import React, { Component } from 'react';

const withContainer = ({reqUrl}) => WrappedComponent => {
    return class Container extends Component {
        constructor(props) {
            super(props);

            this.state = ({
                data: null,
            })
        }

         componentWillMount(){
            fetch(reqUrl).then ((response) => response.json())
            .catch((error) => { console.log(error)})
            .then((res)=> {
                //Check to see if the response is an array or an object
                // if(!Array.isArray(res)){
                //     let data = {};
                //     console.log(Object.entries(res));
                //     for( let [key,value] of Object.entries(res)){
                //         data[key] = value;
                //     }
                //     console.log(data);
                // }

                if(!Array.isArray(res)){
                    this.setState(prevState => ({
                        data: res
                    }))
                }else{
                    this.setState(prevState => ({
                    data: [...res]
            })
            )}}
            )
        }
            render() {
                console.log(this.state);
                return this.state.data? <WrappedComponent {...this.state} /> : <div></div>
            }
        }
    }
export default withContainer;