import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../acions/contactAcion";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const { name, phone, email, id } = contact;
  return (
    <tr>
      <td>
        <Avatar name={name} size="45" round={true} className="mr-2" />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="action ">
        <Link to={`/contact/edit/${id}`}>
          <span className="material-icons">edit</span>
        </Link>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(deleteContact(id))}
          className="material-icons"
        >
          delete
        </span>
      </td>
    </tr>
  );
}

export default Contact;
