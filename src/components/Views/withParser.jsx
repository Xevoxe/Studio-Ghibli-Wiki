import React, { Component } from 'react';

const withParser = ({attributes, parsedData}) => WrappedComponent => {
    return class Parser extends Component {
        constructor(props){
            super(props);

            this.state = ({
                [parsedData]: null
            })
        }

        componentWillMount(){
            let parsedItems = [];
            this.props.data.map((item)=>{ 
                let parsedItem = {};
                 attributes.map((attr)=> {
                     parsedItem[attr] = item[attr];         
                 })
            parsedItems.push(parsedItem);
            })
            this.setState({
                [parsedData]: parsedItems
            })

        }
        render(){
            return this.state[parsedData] ? <WrappedComponent {...this.state}/> : null
        }
        
    }
}
export default withParser;