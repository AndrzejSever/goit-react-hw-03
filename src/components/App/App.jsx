import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(() => {
   const savedContacts = localStorage.getItem("contacts");
   return savedContacts ? JSON.parse(savedContacts) : [];
  });

    useEffect(() => {
     localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

 const addContact = (value, actions) => {
  actions.resetForm();

  setContacts([...contacts, { id: nanoid(), ...value }]);
 };

 console.log(contacts);

 const [filter, setFilter] = useState("");

 const contactFilter = contacts.filter((contact) => {
  return contact.name.toLowerCase().includes(filter.toLowerCase());
 });

 const deleteContact = (id) => {
  setContacts(contacts.filter((contact) => contact.id !== id));
 };
 return (
  <>
   <h1>Phonebook</h1>
   <ContactForm onSubmit={addContact} />
   <SearchBox value={filter} onFilter={setFilter} />
   <ContactList contacts={contactFilter} onDelete={deleteContact} />
  </>
 );
}
