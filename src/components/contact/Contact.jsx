import "./contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
const dotenv = require("dotenv");
dotenv.config();

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVISE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">My Info</h1>
          <div className="c-info">
            <div className="c-info-item">
              <i
                className="c-icon fas fa-phone"
                style={{ color: darkMode && "#8b71b5" }}
              ></i>
              +966554705345
            </div>
            <div className="c-info-item">
              <i
                className="c-icon fas fa-envelope"
                style={{ color: darkMode && "#8b71b5" }}
              ></i>
              Turki.Haqawii@gmail.com
            </div>
            <div className="c-info-item">
              <i
                className="c-icon fab fa-github"
                style={{ color: darkMode && "#8b71b5" }}
              ></i>
              <a
                href="https://github.com/TurkiHaqawi"
                style={{ color: "inherit" }}
              >
                My Github
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Send message if you want me</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && (
              <span style={{ marginLeft: 15, color: darkMode && "#8b71b5" }}>
                Thank you....
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
