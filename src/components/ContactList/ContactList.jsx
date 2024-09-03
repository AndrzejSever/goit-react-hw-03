import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, onDelete }) {
 return (
  <ul className={css.conteiner}>
   {contacts.map((item) => {
    return <Contact item={item} onDelete={onDelete} key={item.id} />;
   })}
  </ul>
 );
}
