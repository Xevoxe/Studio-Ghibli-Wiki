import React from 'react';

let CardView = (props)=>{
    return (
        <div className="col data-tabs">
            <h2 className="card-title">Synopsis</h2>
            <hr class="my-6"/>
            <p className="card-text">{props.synopsis}</p>
        </div>
    )

}
export default CardView;
