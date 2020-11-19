import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../../redux/action/contactsActions";

import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";

import style from "./Phonebook.module.css";
// ===================================================================

const Phonebook = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    const getLocalStorageData = localStorage.getItem("contacts");
    getLocalStorageData && dispatch(getData(getLocalStorageData));
  },[]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const findUserContact = () => {
    return contacts.filter((elem) => elem.name.toLowerCase().includes(filter));
    // return dispatch(filterContactByName(contacts,filter))
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

      <ContactForm />
      <h2 className={style.phonebook_titleContact}>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      <ContactList findUserContact={findUserContact} />
    </div>
  );
};

export default Phonebook;
