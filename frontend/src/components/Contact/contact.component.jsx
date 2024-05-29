import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.styles.css";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const sendUserData = async (event) => {
    event.preventDefault();

    const { name, email, message } = input;
    if (name == "") {
      toast.error("Name is Required!");
    } else if (email == "") {
      toast.error("Email is Required!");
    } else if (!email.includes("@")) {
      toast.error("Invalid Email");
    } else {
      const response = await fetch("http://localhost:5555/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();
      if (data.status == 201) {
        toast.success("Your Response Submitted!");
        setInput({
          ...input,
          name: "",
          email: "",
          message: "",
        });
      }
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
        <div className="container mt-2">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={input.name}
                onChange={handleInput}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={input.email}
                onChange={handleInput}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                rows={4}
                onChange={handleInput}
                value={input.message}
                name="message"
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="col-lg submit-button" type="submit" onClick={sendUserData}>
                Send
              </Button>
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
