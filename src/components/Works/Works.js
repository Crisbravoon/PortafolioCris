
import React from 'react'
import './Works.css';

const Works = () => {
    return (
        <div>
            <section className="proyectos" id="works">
                <div className="subproyectos">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="title mb-5 ">Proyectos</h1>
                    <br />
                    <div className="containerS animate__animated animate__fadeInUp">
                        <div className="boxS">
                            <img className="img-grocery mx-auto mt-3" src={"/img/Grocery.jpg"} alt="" />
                            <h3 className="mt-2">Gorcery Bud</h3>
                            <p className="mx-auto mt-2">
                                <i className="icons-tools ml-3 fa-brands fa-react fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-js-square fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-bootstrap  fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-html5 fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-css3-alt fa-2x"></i>
                            </p>
                            <div className='boxT'>
                                <a type="button" className="btn btn-dark mr-4" href="https://crisbravoon.github.io/Grocery-Bud/">Proyecto</a>
                                <a type="button" className="btn btn-dark" href="https://github.com/Crisbravoon/Grocery-Bud">Codigo</a>
                            </div>
                        </div>
                        <div className="boxS">
                            <img className="img-grocery mx-auto mt-3" src={"/img/Rick.jpg"} alt="" />
                            <h3 className="mt-2">Rick And Morty</h3>
                            <p className="mx-auto mt-2">
                                <i className="icons-tools ml-3 fa-brands fa-react fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-js-square fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-bootstrap  fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-html5 fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-css3-alt fa-2x"></i>
                            </p>
                            <div className='boxT'>
                                <a type="button" className="btn btn-dark mr-4" href="https://crisbravoon.github.io/Rick-And-Morty/">Proyecto</a>
                                <a type="button" className="btn btn-dark" href="https://github.com/Crisbravoon/Rick-And-Morty">Codigo</a>
                            </div>
                        </div>
                        <div className="boxS">
                            <img className="img-grocery mx-auto mt-3" src={"/img/Gift.jpg"} alt="" />
                            <h3 className="mt-2">Gift Expert</h3>
                            <p className="mx-auto mt-2">
                                <i className="icons-tools ml-3 fa-brands fa-react fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-js-square fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-bootstrap  fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-html5 fa-2x"></i>
                                <i className="icons-tools ml-3 fa-brands fa-css3-alt fa-2x"></i>
                            </p>
                            <div className='boxT'>
                                <a type="button" className="btn btn-dark mr-4" href="https://crisbravoon.github.io/React.js-GifsExpertApp/">Proyecto</a>
                                <a type="button" className="btn btn-dark" href="https://github.com/Crisbravoon/React.js-GifsExpertApp">Codigo</a>
                            </div>
                        </div>
                        <div className="boxS">
                            <img className="img-grocery mx-auto mt-3" src={"/img/python(POO).jpg"} alt="" />
                            <h3 className="mt-2 mb-3">Airline tickets     (POO)</h3>
                            <p className="mx-auto ">
                                <i className="icons-tools fa-brands fa-python fa-2x"></i>
                            </p>
                            <div className='boxT'>
                                <a type="button" className="btn btn-dark" href="https://github.com/Crisbravoon/Airline-tickets--POO-">Codigo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Works
