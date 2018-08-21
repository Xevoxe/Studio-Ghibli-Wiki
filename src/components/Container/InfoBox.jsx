import React, {Component} from 'react';

const InfoBox =  (props) => {
    console.log(`InfoBox = ${props}`);
    return <div className={props.className}>{props.name}</div>;
}
export default InfoBox;