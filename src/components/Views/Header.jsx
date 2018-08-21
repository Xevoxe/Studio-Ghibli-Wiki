import React from 'react';
import logo from '../../images/logo.png';

const Header = (props) => {
    return (
        <div className="jumbotron header">
            <img src={logo}></img>
            <h1 className="display-3">{props.title}</h1>
        </div>
    )
} 
export default Header;