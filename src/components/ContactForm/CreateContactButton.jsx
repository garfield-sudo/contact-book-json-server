import React, { useContext } from "react";
import { contactsContext } from "../../contexts/ContactsContext";

const CreateContactButton = () => {
    const { openCreateContactForm, isCreateBtnDisabled } =
        useContext(contactsContext);
    return (
        <div className="panel-block">
            <button
                onClick={openCreateContactForm}
                className="button is-link is-outlined is-fullwidth"
                disabled={isCreateBtnDisabled}
            >
                Add New Contact
            </button>
        </div>
    );
};

export default CreateContactButton;
