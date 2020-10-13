import React from "react";

interface Props {
  children?: React.ReactNode;
}

const ContactOptionsWrapper: React.FC<Props> = ({ children }) => {
  return <ul className="contact-options">{children}</ul>;
};

export default ContactOptionsWrapper;
