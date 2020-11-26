import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/slice/contactsSlice";

import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import Layout from "../layout/Layout";
// ===================================================================

const Phonebook = () => {
  const contacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    const getLocalStorageData = localStorage.getItem("contacts");
    getLocalStorageData && dispatch(getData(getLocalStorageData));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactList />
    </Layout>
  );
};

export default Phonebook;
