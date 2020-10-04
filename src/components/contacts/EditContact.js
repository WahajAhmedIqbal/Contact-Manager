import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../acions/contactAcion";
// import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditContact() {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onupdatecontact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, { name, phone, email });

    dispatch(updateContact(update_contact));
    console.log(update_contact);
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header ">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onupdatecontact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={email}
              placeholder="Enter Your Emai"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Edit Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
