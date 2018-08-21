import React, { Component } from 'react';


// const InfoBox =  (props) => {return (<div className={props.className}>Info Box 2</div>)}

const withCollapsable = WrappedComponent => ({isActive}) => {

    console.log(WrappedComponent);
    // return class Collapsable extends Component {
    // constructor(props){
    //     super(props);
    //     console.log("Collaspable");
    //     console.log(props);
    //     this.state = ({
    //         isVisible: true
    //     })
    // }

    // render(){
        return <WrappedComponent {...this.state} />;
    // }
    // }

  
}

// const CollapsableBox = withCollapsable(InfoBox);

export default withCollapsable;