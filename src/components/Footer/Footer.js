
import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer container my-5 ">
            <footer className="col-sm boxFooter text-center text-white">
                <div className="container pt-4">
                    <Row>
                        <Col md={3} lg={4} xl={4}>
                            <img className="img-logo" src={'./img/Logo1.png'}></img >
                        </Col>
                        <Col md={4} lg={4} xl={4}>
                            <div className="footerCopy text-center text-dark p-3" >
                                © 2022 Copyright  /
                                <a className="text-dark">  Hecho con ❤ Cristóbal Bravo</a>
                            </div>
                        </Col>
                        <Col xs={10} sm={9} md={5} lg={4} xl={4}>
                            <section className="iconSocial mb-4">
                                <a className=" btn-lg text-dark m-1" href="mailto:cristobalbravon98@gmail.com">
                                    <i className="fa-solid fa-envelope fa-2x"></i></a>
                                <a
                                    className=" btn-lg text-dark m-1" href="https://www.linkedin.com/in/cristóbal-bravo/">
                                    <i className="fa-brands fa-linkedin fa-2x"></i>
                                </a>
                                <a className=" btn-lg text-dark m-1" href="https://github.com/Crisbravoon" >
                                    <i className="fa-brands fa-github fa-2x"></i>
                                </a>
                            </section>
                        </Col>
                    </Row>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
