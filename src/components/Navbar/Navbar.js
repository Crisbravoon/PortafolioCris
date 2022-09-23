import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  ">
                <div className="container-fluid ">
                    {/* <Link className="navbar-brand" smooth to='#about'> <img className="img-logo ml-4" src={'./img/Logo1.png'}></img ></Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-2" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" smooth to='#about'>Sobre Mi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" smooth to='#portafolio'>Portafolio</Link>
                            </li>
                            <li className="nav-item" href='#contact'>
                                <Link className="nav-link" smooth to='#contacto'>Hablemos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
