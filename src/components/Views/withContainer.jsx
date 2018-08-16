import React, { Component } from 'react';

const withContainer = ({reqUrl, resName}) => WrappedComponent => {
    return class Container extends Component {
        constructor(props) {
            super(props);

            this.state = ({
                [resName]: [],
            })
        }

         componentWillMount(){
            fetch(reqUrl).then ((response) => response.json())
            .catch((error) => { console.log(error)})
            .then((data)=> {this.setState(prevState => ({
                [resName]: [...data]
            })
            )}
            )
        }

            render() {
                return <WrappedComponent {...this.props} {...this.state} />
            }
        }
    }
export default withContainer;