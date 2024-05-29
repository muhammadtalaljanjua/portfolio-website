const express = require("express");
const router = express.Router();
const users = require("../models/contactSchema");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

router.post("/register", async (request, response) => {
  const { firstName, lastName, email, mobile, message } = request.body;

  if (!firstName || !lastName || !email || !mobile) {
    response.status(401).json({ status: 401, error: "Field Required" });
  }

  try {
    const userExist = await users.findOne({ email: email });
    if (userExist) {
      const userMessage = await userExist.MessageSave(message);
      console.log(userMessage);
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "sending email using nodejs",
        text: "Your Response Has Been Submitted",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email Sent!" + info.response);
          response.status(201).json({ status: 201, message: "Email Sent Successfully!" });
        }
      });
    } else {
      const newUser = new users({
        firstName,
        lastName,
        email,
        mobile,
        messages: { message: message },
      });

      const storeData = await newUser.save();

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "sending email using nodejs",
        text: "Your Response Has Been Submitted",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error:" + error);
        } else {
          console.log("Email Sent!" + info.response);
          response.status(201).json({ status: 201, message: "Email Sent Successfully!" });
        }
      });
      response.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    response.status(401).json({ status: 401, error: "Field Required!" });
    console.log(error);
  }
});

module.exports = router;
