import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contact.styles.css";

const Contact = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const getValue = (event) => {
    const { name, value } = event.target;

    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="container mb-3 contact contact-container">
        <h1 className="contact-heading text-center">
          Contact <span className="colored-contact-heading">Me</span>
        </h1>
        <div className="container mt-2">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={input.firstName}
                onChange={getValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={input.lastName}
                onChange={getValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={input.email} onChange={getValue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="mobile" value={input.mobile} onChange={getValue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={getValue}
                value={input.message}
                name="message"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="col-lg" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
