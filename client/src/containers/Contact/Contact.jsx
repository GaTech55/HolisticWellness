import React, { useState } from "react";
import { FormControl, Form, Col, Button } from "react-bootstrap";
import NavBar from "../../component/NavBar/NavBar";
// import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const updateForm = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <p>
              I would love to hear from you. Fill out the form below to contact
              me. You can also find me on social media.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <Form action="https://formspree.io/f/xwkaoaok" method="POST">
              <Form.Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <FormControl
                    name="firstName"
                    placeholder="First name"
                    type="text"
                    id="firstName"
                    value={state.firstName}
                    onChange={updateForm}
                  />
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <FormControl
                    placeholder="lastName"
                    type="text"
                    id="lastName"
                    value={state.lastName}
                    onChange={updateForm}
                    name="lastName"
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <FormControl
                      type="email"
                      placeholder="name@example.com"
                      id="email"
                      value={state.email}
                      onChange={updateForm}
                      name="email"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>Phone</Form.Label>
                  <FormControl
                    name="phone"
                    placeholder="Phone Number"
                    type="number"
                    id="phone"
                    value={state.phone}
                    onChange={updateForm}
                  />
                </Col>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <FormControl name="message" as="textarea" rows={3} />
              </Form.Group>
              <Button variant="info" type="submit">
                Info
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
