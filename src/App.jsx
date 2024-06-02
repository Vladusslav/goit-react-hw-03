import "./App.css";
import { useState, useEffect } from "react";
import InitialContactsList from "../data/initialContactList.json";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const dataContacts = window.localStorage.getItem("savedContacts");

    if (dataContacts !== null) {
      return JSON.parse(dataContacts);
    }
    return InitialContactsList;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className="phonebook-list">Phonebook</h1>
      <ContactForm onAdd={addNewContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
}