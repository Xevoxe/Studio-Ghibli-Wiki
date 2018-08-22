import React, {Component} from 'react'

const shouldUpdate = WrappedComponent => {
    return class ShouldUpdate extends Component{
        constructor(props){
        super(props);

        console.log(props);
        }

        componentWillMount(){
            console.log("Mounting");
        }
        shouldComponentUpdate(){
            return false;
        }

        componentWillReceiveProps(){
            console.log("props received");
        }
        
        render(){
            return <WrappedComponent />;
        }

    }

}
export default shouldUpdate;


    