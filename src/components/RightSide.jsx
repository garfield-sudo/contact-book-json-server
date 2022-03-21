import React, { useContext } from "react";
import { contactsContext } from "../contexts/ContactsContext";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";

const RightSide = () => {
    const { showContactCard, showContactForm } = useContext(contactsContext);

    return (
        <div className="column">
            {showContactCard && <ContactCard />}
            {showContactForm && <ContactForm />}
        </div>
    );
};

export default RightSide;
