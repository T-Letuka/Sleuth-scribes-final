import React from "react";
import "./Contact.css";
import email from "../../assets/email.png";

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="contact-col">
        <h3 className="invite">
          Send us a message <img src={email} alt="email" className="email" />
        </h3>
        <p>
          Got a burning question about a case? Need assistance deciphering a
          cryptic clue? Or perhaps you just want to share your latest
          breakthrough in the world of mystery-solving? Don't be a stranger!{" "}
        </p>
        <ul>
          <li>EMAIIL: TIISETSOMONAMA2002@GMAIL.COM</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Type your message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
