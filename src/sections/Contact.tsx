import { encode } from "../util";
import React, { FC, FormEvent, useState } from "react";
import { AboutShapes, DownloadIcon, EmailIcon, LinkedIn } from "../assets/svg";
import ContactOption from "../components/ContactOption";
import ContactOptionsWrapper from "../components/ContactOptionsWrapper";
import Content from "../components/Content";

interface Props {
  isMobile: boolean;
  contactRef: React.MutableRefObject<null>;
}

export const Contact: FC<Props> = ({ isMobile, contactRef }) => {
  //Form state
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" ref={contactRef}>
      <Content>
        {isMobile ? <></> : <AboutShapes />}
        <h1
          onClick={() => {
            window.history.replaceState("", "", "#contact");
          }}
          title="Click to update the active link"
        >
          Contact
        </h1>
        <div className="form-wrapper">
          <form
            id="contactForm"
            className="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();

              let formData = {
                fullname: fullname,
                email: email,
                message: message,
              };

              fetch("/form", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "contact", ...formData }),
              })
                .then(() => {
                  alert("Message Received!");
                  setEmail("");
                  setFullname("");
                  setMessage("");
                })
                .catch((error) => alert(error));

              e.preventDefault();
            }}
          >
            <ContactOptionsWrapper>
              <ContactOption
                string="me@jrk.digital"
                href="mailto:me@jrk.digital"
              >
                <EmailIcon />
              </ContactOption>
              <ContactOption
                string="Jack Kelly"
                href="https://www.linkedin.com/in/jackkelly4/"
              >
                <LinkedIn />
              </ContactOption>

              <ContactOption string="Resume" href="/pdf/jack-kelly-resume.pdf">
                <DownloadIcon />
              </ContactOption>
            </ContactOptionsWrapper>
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <textarea
              name="message"
              cols={30}
              rows={7}
              placeholder="Reason for reaching out to me"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            ></textarea>
            <button type="submit" className="submit-button">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                >
                  <path
                    id="plane"
                    d="M44,0,33,40.333,18.1,27.062l14.3-15.1L13.228,25.216,0,22ZM16.5,30.558V44l5.973-8.123Z"
                    fill="#fff"
                  />
                </svg>
              </div>

              <p>Send Message</p>
            </button>
          </form>
        </div>
      </Content>
    </section>
  );
};
