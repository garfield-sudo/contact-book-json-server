import React, { useContext, useState } from "react";
import { contactsContext } from "../../contexts/ContactsContext";

const ContactForm = () => {
    const { formData, cancelForm } = useContext(contactsContext);
    const [contactName, setContactName] = useState(formData.name);
    const [contactPhone, setContactPhone] = useState(formData.phone);
    const [contactEmail, setContactEmail] = useState(formData.email);
    const [contactAddress, setContactAddress] = useState(formData.address);
    const [contactImage, setContactImage] = useState(formData.img);

    function handleInput({ target: { name, value } }) {
        if (name === "name") setContactName(value);
        if (name === "phone") setContactPhone(value);
        if (name === "email") setContactEmail(value);
        if (name === "address") setContactAddress(value);
        if (name === "image") setContactImage(value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (
            contactName === "" &&
            (contactPhone === "" ||
                contactEmail === "" ||
                contactAddress === "")
        ) {
            return;
        }
        const newContact = {
            name: contactName,
            phone: contactPhone,
            email: contactEmail,
            address: contactAddress,
            img: contactImage,
        };
        if (formData.id) {
            newContact.id = formData.id;
        }
        formData.onFormSubmit(newContact);
    }

    function handleFormCancel(e) {
        e.preventDefault();
        cancelForm();
        setContactName("");
        setContactPhone("");
        setContactEmail("");
        setContactAddress("");
    }

    return (
        <form className="box">
            <h4 className="title is-4 is-spaced has-text-centered">
                {formData.title}
            </h4>
            <hr />
            <div className="field">
                <label className="label">Contact Name</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        name="name"
                        onChange={handleInput}
                        className="input"
                        type="text"
                        placeholder="Name Surname"
                        value={contactName}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                    {contactName === "" && (
                        <p className="help is-danger">This field is required</p>
                    )}
                </div>
            </div>
            <div className="field">
                <label className="label">Phone</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        name="phone"
                        onChange={handleInput}
                        className="input"
                        type="tel"
                        placeholder="Phone Number"
                        value={contactPhone}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-phone-alt"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        name="email"
                        onChange={handleInput}
                        className="input"
                        type="email"
                        placeholder="Email Address"
                        value={contactEmail}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">Address</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        name="address"
                        onChange={handleInput}
                        className="input"
                        type="text"
                        placeholder="Local Address"
                        value={contactAddress}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-map-marker-alt"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">Image URL</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        name="image"
                        onChange={handleInput}
                        className="input"
                        type="text"
                        placeholder="Image URL Address"
                        value={contactImage}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-image"></i>
                    </span>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button
                        onClick={handleFormSubmit}
                        className="button is-link"
                    >
                        Submit
                    </button>
                </div>
                <div className="control">
                    <button
                        onClick={handleFormCancel}
                        className="button is-link is-light"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
