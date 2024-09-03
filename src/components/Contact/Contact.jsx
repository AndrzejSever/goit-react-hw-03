import css from "./Contact.module.css";

export default function Contact({ item: { id, name, number }, onDelete }) {
 return (
  <li>
   <h2>
    <p>{name}</p>
    <p>{number}</p>
   </h2>

   <button
    onClick={() => {
     onDelete(id);
    }}
   >
    Delete
   </button>
  </li>
 );
}
