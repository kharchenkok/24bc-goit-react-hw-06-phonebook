import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";

import { addContact, deleteContact, getData } from "../../redux/action/contactsActions";
import { getFilterValue } from "../../redux/action/filterActions";

import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";

import { v4 as uuidv4 } from "uuid";
import style from "./Phonebook.module.css";


const Phonebook = () => {
  const contacts=useSelector(state=>state.contacts)
  const filter=useSelector(state=>state.filter)
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");
  const dispatch=useDispatch()

  useEffect(() => {
    const getLocalStorageData = localStorage.getItem("contacts");
    getLocalStorageData && dispatch(getData(getLocalStorageData));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addUserContact = (name, number) => {
    const userContact = { name: name, number: number, id: uuidv4() };
    dispatch(addContact(userContact));
  };

  const userFilter = (e) => {
    dispatch(getFilterValue(e));
  };
  

  const findUserContact = () => {
    return contacts.filter((elem) => elem.name.toLowerCase().includes(filter));
    // return dispatch(filterContactByName(contacts,filter))
  };

  const deleteUserContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={style.phonebook_wrapper}>
      <CSSTransition
        in={true}
        timeout={500}
        classNames={style}
        appear={true}
        unmountOnExit
      >
        <h1 className={style.phonebook_title}>Phonebook</h1>
      </CSSTransition>
      <ContactForm addUserContact={addUserContact} contacts={contacts} />

      <h2 className={style.phonebook_titleContact}>Contacts</h2>
      {contacts.length > 1 && <Filter userFilter={userFilter} filter={filter} />}
      <ContactList
        findUserContact={(contacts.length>1)? (findUserContact()) : (contacts)}
        deleteUserContact={deleteUserContact}
      />
    </div>
  );
};

export default Phonebook;
