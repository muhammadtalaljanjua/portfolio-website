import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.styles.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendUserData = (event) => {
    event.preventDefault();

    const serviceId = "service_w2sj5h8";
    const templateId = "template_x5orfqi";
    const publicKey = "bca66lwwxhG_ApsEF";

    const templateParameters = {
      from_name: name,
      from_email: email,
      to_name: "Muhammad Talal",
      message: message,
    };

    if (name === "") {
      toast.error("Name is Required!");
    } else if (email === "") {
      toast.error("Email is Required!");
    } else if (message === "") {
      toast.error("Message is Required!");
    } else {
      emailjs
        .send(serviceId, templateId, templateParameters, publicKey)
        .then((response) => {
          console.log("Email Sent Successfully!");
          toast.success("Email Sent Successfully!");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.log("Error Sending Email!", error);
        });
    }
  };

  return (
    <>
      <div className="container mb-3 contact contact-container">
        <div className="text-center">
          <img className="chatImage" src={require("./contact.gif")} alt="Chat GIF" />
        </div>
        <h1 className="contact-heading text-center">
          Contact <span className="colored-contact-heading">Me</span>
        </h1>
        <p className="contact-text">Have a project in mind? Let's bring it to life together!</p>
        <div className="container mt-2">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                rows={4}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <button className="col-lg submit-button" type="submit" onClick={sendUserData}>
                Send
              </button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;

// const defaultForm = {
//   name: "",
//   email: "",
//   message: "",
// };

// const Contact = () => {
//   const [input, setInput] = useState(defaultForm);

//   const handleInput = (event) => {
//     const { name, value } = event.target;

//     setInput(() => {
//       return {
//         ...input,
//         [name]: value,
//       };
//     });
//   };

//   const sendUserData = async (event) => {
//     event.preventDefault();

//     const { name, email, message } = input;

//     try {
//       const response = await fetch("http://localhost:5555/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(input),
//       });

//       if (response.ok) {
//         setInput(defaultForm);
//         const data = await response.json();
//         console.log(data);
//         alert("Done!");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
