import React from 'react'
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Works from '../Works/Works';
import './About.css';

const About = () => {
    return (
        <div className='derecha' id='about'>
             <br className='mb-5'/>
             <br />
            <section className='banner mt-5 mb-5'>
                <div className='containerP'>
                    <div className='boxb col1'>
                        <img className="img-face mx-auto mt-3" src={"/img/yop.jpg"} alt="img-yo" />
                    </div>
                    <div className='boxB'>
                        <h1>
                            Hola a todos! &#128075;
                        </h1>
                        <span className="myName">  Soy Cristobal Bravo </span>
                        <p id="textBanner"> Desarrollador Front End Junior, con residencia en Chile.
                            <p className="SecondBanner">
                                Trabajo actualmente con el Framework React js 👨‍💻👨‍💻
                                junto a herramientas de diseño tales como Bootstrap.
                            </p>
                        </p>
                        <section className="mb-5">
                            <div className="social-icons">
                                <a className='icons mr-4' href="https://github.com/Crisbravoon">
                                    <i className="fa-brands fa-github fa-3x"></i>
                                </a>
                                <a className='icons mr-4' href="mailto:cristobalbravon98@gmail.com">
                                    <i className="fa-solid fa-envelope fa-3x"></i>
                                </a>
                                <a className='icons' href="https://www.linkedin.com/in/cristóbal-bravo/">
                                    <i className="fa-brands fa-linkedin fa-3x"></i>
                                </a>
                            </div>
                        </section>
                        <a className='boxT' download href='./pdf/Cristobal_Bravo_CV.pdf' >

                            <button type="button" className=" btn-download btn bnt-orange" download='Cristobal_bravo_CV.pdf'> Descargar CV  </button>
                        </a>
                    </div>
                </div>
            </section>
            <section id='portafolio'>
                <Works />
            </section>
            <section id='contacto' className="mt-5 mb-5">
                <Contact />
            </section>
            <section id='footer' className="mt-5">
                <Footer />
            </section>
        </div>
    )
}

export default About;