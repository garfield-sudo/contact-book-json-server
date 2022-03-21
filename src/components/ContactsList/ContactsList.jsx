import React, { useContext, useEffect } from "react";
import { contactsContext } from "../../contexts/ContactsContext";
import ContactsListItem from "../ContactsListItem/ContactsListItem";

const ContactsList = () => {
    const { contacts, listContacts } = useContext(contactsContext);

    useEffect(() => {
        listContacts();
    }, []);

    return (
        <div className="contacts_list">
            {contacts.map((contact) => (
                <ContactsListItem key={contact.id} contact={contact} />
            ))}
        </div>
    );
};

export default ContactsList;
