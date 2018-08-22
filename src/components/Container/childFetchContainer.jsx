import React, {Component} from 'react';
import fetchData from '../Views/fetchData';

const childFetch = WrappedComponent => {
    
    return class ChildFetch extends Component{
        constructor(props){
        super(props);
            console.log(props);
            console.log("Inside ChildFetch");
            //Parse Fetch Url from props
            this.state = ({
                [props.resName]: null,
                reqUrl: props.reqUrl
            })

        }

        componentWillMount(){
            console.log("Mounting");
            // const Component = fetchData({resName: "species", reqUrl: this.props.species})(WrappedComponent)
            
        }

        render() {
            // const Component = fetchData({resName: "species", reqUrl: this.props.species})(WrappedComponent)
            return <WrappedComponent/>
         }
    }
}
export default childFetch;

// const Component = fetchData({resName: "species", reqUrl: this.props.species})(WrappedComponent)