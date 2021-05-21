import React from 'react';
import { FormControl, Form, Col } from 'react-bootstrap';
import NavBar from "../../component/NavBar/NavBar";

const Contact = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <p>I would love to hear from you.  Fill out the form below to contact me.  You can also find me on social media.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <FormControl placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <FormControl placeholder="Last name" />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <FormControl type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Label>Phone</Form.Label>
                                    <FormControl placeholder="Phone" />
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <FormControl as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;