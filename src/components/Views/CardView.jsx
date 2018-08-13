import React from 'react';

let CardView = (props)=>{
    console.log(props.children);
    return (
        <div className={props.isHidden ? "hidden" : "card"}>
            <h5 className="card-title">Synopsis</h5>
            <p className="card-text">{props.synopsis}</p>
        </div>
    )

}
export default CardView;
