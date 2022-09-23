
import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Contact from './components/Contact/Contact.js';
import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.js';
import Works from './components/Works/Works.js';


const Portafolio = () => {
    return (
        <div id='#portafolio'>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/Portafolio" component={Works} />
                    <Route exact path="/Contacto" component={Contact} />
                </Switch>
            </Router>
        </div>
    )
}

export default Portafolio;
