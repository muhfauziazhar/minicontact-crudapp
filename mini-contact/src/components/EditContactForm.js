import React, { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditContactForm = () => {
  const [getFullName, setFullName] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getNote, setNote] = useState("");

  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/contacts/${id}`,
    }).then((results) => {
      const fullname = results.data.payload[0].fullName;
      const phone = results.data.payload[0].phone;
      const note = results.data.payload[0].note;
      const id = results.data.payload[0].id;

      setFullName(fullname);
      setPhone(phone);
      setNote(note);
    });
  }, []);

  const inputHandlerFullName = (fullname) => {
    return setFullName(fullname);
  };

  const inputHandlerPhone = (phone) => {
    return setPhone(phone);
  };

  const inputHandlerNote = (note) => {
    return setNote(note);
  };

  function updateContact() {
    // console.log("name: ", getFullName);
    // console.log("phone: ", getPhone);
    // console.log("note: ", getNote);
    axios({
      method: "put",
      url: `http://localhost:3001/api/contacts/${id}`,
      data: {
        fullname: getFullName,
        phone: getPhone,
        note: getNote,
      },
    }).then((result) => {
      if (result.data.payload.affectedRows) {
        alert("data berhasil update !");
        window.location.href = "/list-contact";
      } else {
        alert("data gagal di Update!");
        window.location.reload();
      }
    });
  }

  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm m-10">
              <label htmlFor="fullname" className="required">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control"
                required="required"
                value={getFullName}
                onChange={(e) => inputHandlerFullName(e.target.value)}
              />
            </div>
            <div className="col-sm m-10">
              <label htmlFor="phone" className="required">
                Nomor Telepon
              </label>
              <input
                type="number"
                className="form-control"
                value={getPhone}
                onChange={(e) => inputHandlerPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm m-10">
              <label htmlFor="fullname">Catatan</label>
              <textarea
                type="text"
                className="form-control"
                defaultValue={getNote}
                onChange={(e) => inputHandlerNote(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm m-10">
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => updateContact()}
                style={{ cursor: "pointer" }}
              >
                Update Kontak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContactForm;
