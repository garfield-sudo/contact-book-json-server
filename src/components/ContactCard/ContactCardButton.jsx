import React from "react";

const ContactCardButton = ({ text, handleClick }) => {
    return (
        <a onClick={handleClick} className="card-footer-item">
            {text}
        </a>
    );
};

export default ContactCardButton;
