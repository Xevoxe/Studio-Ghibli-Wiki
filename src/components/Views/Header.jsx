import React from 'react';


const Header = (props) => {
    return (
        <div id="jumbotron" className="jumbotron header">
            <img className="img-fluid"src="/images/logoparade.png" alt="Ghibli Logo"></img>
            <h1 className="display-4">{props.title}</h1>
        </div>
    )
} 
export default Header;