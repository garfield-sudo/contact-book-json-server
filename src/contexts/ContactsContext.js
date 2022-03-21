import React, { useReducer, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/contacts";
const recordsPerPage = 10;
const sortBy = "name";
const sortOrder = "asc";

export const contactsContext = React.createContext();

const emptyContact = {
  name: "",
  phone: "",
  email: "",
  address: "",
  img: "https://bulma.io/images/placeholders/96x96.png",
};

const INIT_STATE = {
  contacts: [],
  selected_contact: emptyContact,
};

function reducer(state, action) {
  switch (action.type) {
    case "GET_CONTACTS_DATA":
      return { ...state, contacts: action.payload };
    case "SELECT_CONTACT":
      return { ...state, selected_contact: { ...action.payload } };
    default:
      return state;
  }
}

const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [isCreateBtnDisabled, setIsCreateBtnDisabled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showContactCard, setShowContactCard] = useState(true);
  const [formData, setFormData] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  // (CREATE) set of funs for CreateContact user flow
  function openCreateContactForm() {
    const formData = {
      ...emptyContact,
      title: "Create Contact",
      onFormSubmit: createContact,
    };
    setFormData(formData);
    openContactForm();
  }

  const createContact = async (newContact) => {
    const { data: createdContact } = await axios.post(API, newContact);
    await listContacts();
    handleContactSelection(createdContact);
    closeContactForm();
  };

  function openContactForm() {
    setShowContactCard(false);
    setShowContactForm(true);
    setIsCreateBtnDisabled(true);
  }

  function closeContactForm() {
    setShowContactCard(true);
    setShowContactForm(false);
    setIsCreateBtnDisabled(false);
  }

  // (READ) fetch contacts from db and update state to trigger render
  const listContacts = async () => {
    const { data, headers } = await axios(
      `${API}?_page=${activePage}&_limit=${recordsPerPage}&_sort=${sortBy}&_order=${sortOrder}`
    );
    dispatch({
      type: "GET_CONTACTS_DATA",
      payload: data,
    });
    updateTotalPages(parseInt(headers["x-total-count"]));
    handleContactSelection(data[0]);
  };

  function updateTotalPages(num) {
    setTotalPages(Math.ceil(num / recordsPerPage));
  }

  // (UPDATE)
  function openEditContactForm(contact) {
    const formData = {
      ...contact,
      title: "Edit Contact",
      onFormSubmit: handleEditContact,
    };
    setFormData(formData);
    openContactForm();
  }

  const handleEditContact = async (updatedContact) => {
    await axios.put(`${API}/${updatedContact.id}`, updatedContact);
    await listContacts();
    handleContactSelection(updatedContact);
    closeContactForm();
  };

  // (DELETE)
  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    await listContacts();
  };

  // (SELECT_TO_SHOW)
  function handleContactSelection(contact) {
    dispatch({
      type: "SELECT_CONTACT",
      payload: contact,
    });
  }

  // SEARCH FILTER
  const handleSearch = async (searchText) => {
    const { data, headers } = await axios(
      `${API}?q=${searchText}&_page=${activePage}&_limit=${recordsPerPage}&_sort=${sortBy}&_order=${sortOrder}`
    );
    dispatch({
      type: "GET_CONTACTS_DATA",
      payload: data,
    });
    updateTotalPages(parseInt(headers["x-total-count"]));
    handleContactSelection(data[0]);
  };

  // VALUES to share among child components
  const value = {
    contacts: state.contacts,
    listContacts,
    isCreateBtnDisabled,
    showContactForm,
    showContactCard,
    openCreateContactForm,
    openEditContactForm,
    cancelForm: closeContactForm,
    formData,
    deleteContact,
    selectedContact: state.selected_contact,
    handleSelect: handleContactSelection,
    totalPages,
    activePage,
    setActivePage,
    handleSearch,
  };

  return (
    <contactsContext.Provider value={value}>
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsContextProvider;
