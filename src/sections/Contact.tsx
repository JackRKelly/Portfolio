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
        <h1>Contact</h1>
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
                title='Send an email to "me@jrk.digital"'
              >
                <EmailIcon />
              </ContactOption>
              <ContactOption
                string="Jack Kelly"
                href="https://www.linkedin.com/in/jackkelly4/"
                title="View Jack Kelly's LinkedIn page"
              >
                <LinkedIn />
              </ContactOption>

              <ContactOption
                string="Resume"
                href="/pdf/jack-kelly-resume.pdf"
                title="View Jack Kelly's Resume"
              >
                <DownloadIcon />
              </ContactOption>
            </ContactOptionsWrapper>

            <input type="hidden" name="form-name" value="contact" />

            <div
              className={`input-wrapper input ${
                fullname.length > 0 ? "filled" : ""
              }`}
            >
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                required
              />
            </div>

            <div
              className={`input-wrapper input ${
                email.length > 0 ? "filled" : ""
              }`}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div
              className={`input-wrapper textarea ${
                message.length > 0 ? "filled" : ""
              }`}
            >
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                cols={30}
                rows={7}
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-button"
              title="Submit the contact form"
            >
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
