import { useState } from "react";
export default function SearchBox({ value, onFilter }) {
 return (
  <div>
   <input type="text" value={value} onChange={(ev) => onFilter(ev.target.value)} />
  </div>
 );
}
