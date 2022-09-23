import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'
import './Contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aj681ib', 'template_vf4ralp', form.current, 'user_JdbcALMXCeuud1a1OeMTC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        swal("Mensaje Enviado!",  "Gracias por contactarte conmigo ,Pronto contestaré tú mensaje ", "success");
    };

    return (
        <div id='contacto' className=" FormContacto container">
            <Form className=" contactForm w-50" autoComplete="off" ref={form} onSubmit={sendEmail} >
                <h1 className="text-center mb-3">Hablemos 📧</h1>
                <Form.Group className=' mb-3' controlId="exampleForm.ControlInput1">
                    <Form.Label className='textForms'>Nombre Completo</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Carlos Blanco" />
                </Form.Group>
                <Form.Group className=' mb-3' controlId="exampleForm.ControlInput1">
                    <Form.Label className='textForms'>Email </Form.Label>
                    <Form.Control name='user_email' type="email" placeholder="correo@correo.com" />
                </Form.Group>
                <Form.Group className=' mb-3' controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='textForms' >Mensaje</Form.Label>
                    <Form.Control name='message' as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    <Button className="btnForms mx-auto btn-primary" type="submit" value='send'>
                        Enviar Mensaje
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Contact;
