import React from 'react';
import {Link} from 'react-router-dom';



const Home = ()=> {
    return (
        <div id="container" className="container">
            <div id="jumbotron" className="jumbotron center title jumbotron-fluid">
                <div className="container">
                    <img className="img-fluid"alt="Ghibli Logo" src="/images/logo.png">
                        </img>
                    <h1 className="display-5">STUDIO GHIBLI WIKI</h1>
                </div>
            </div>
          
            <div className="nav-container">
                <div className="nav-row row">
                    <div className="icon col-md no-gutters">
                        <span className="nav-icon align-middle">
                            <img className="pulse-animation img-fluid mx-auto d-block"
                                src="/images/charsilhouettes_sm.png" 
                                alt="Characters"/>
                            <Link role="button" to={'/characters'}><h2 className="display-4">Characters</h2></Link>
                        </span>
                    </div>
                    <div className="icon col-md no-gutters">
                        <span className="nav-icon align-middle">
                            <img className="rotate-animation img-fluid mx-auto d-block"
                                src="/images/film_sm.png"
                                alt="Films"/>
                            <Link role="button" to={'/films'}><h2 className="display-4">Films</h2></Link>
                        </span>
                    </div>
                </div>
            </div>
        
        </div>
    )

}
export default Home;