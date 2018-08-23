import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = (props) =>
{
    return (
        <div className="nav-bar">
            <Link role="button" to="/"><button type="button" className={`btn ${props.style === "dark" ? "btn-dark" : "btn-light"}`}>Home</button></Link>
            <Link role="button" to="/Characters"><button type="button" className={`btn ${props.style === "dark" ? "btn-dark" : "btn-light"}`}>Characters</button></Link>
            <Link role="button" to="/films"><button type="button" className={`btn ${props.style === "dark" ? "btn-dark" : "btn-light"}`}>Films</button></Link>
        </div>
    )
}
export default Navigation;