import React from "react";

interface Props {
  href: string;
  string: string;
  children: React.ReactNode;
}

const ContactOption: React.FC<Props> = ({ href, string, children }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="submit-button"
      >
        <div className="icon">{children}</div>
        <p>{string}</p>
      </a>
    </li>
  );
};

export default ContactOption;
