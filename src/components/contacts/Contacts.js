import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

function Contacts() {
  const contacts = useSelector((state) => state.contact.contacts);
  return (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Contacts;
