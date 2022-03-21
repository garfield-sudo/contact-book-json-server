import React, { useContext } from "react";
import { contactsContext } from "../../contexts/ContactsContext";

const ContactsListItem = ({ contact }) => {
    const { handleSelect, selectedContact } = useContext(contactsContext);

    return (
        <a
            onClick={() => handleSelect(contact)}
            className={`panel-block ${
                contact.id === selectedContact.id ? "is-active" : null
            }`}
        >
            <span className="panel-icon">
                <i className="fas fa-address-book" aria-hidden="true"></i>
            </span>
            {contact.name}
        </a>
    );
};

export default ContactsListItem;
