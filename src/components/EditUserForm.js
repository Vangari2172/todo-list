import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUserForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const userDetails = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://todo-list-c0429-default-rtdb.firebaseio.com/userdata.json")
      .then((res) => {
        for (const key in res.data) {
          if (key === userDetails.userId) {
            setFName(res.data[key].fName);
            setLName(res.data[key].lName);
            setAge(res.data[key].age);
            setEmail(res.data[key].email);
            setContact(res.data[key].contact);
          }
        }
      });
  }, [userDetails.userId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      fName: fName,
      lName: lName,
      age: age,
      email: email,
      contact: contact,
    };

    axios.put(
      `https://todo-list-c0429-default-rtdb.firebaseio.com/userdata/${userDetails.userId}.json`,
      data
    );

    navigate("/");
  };

  const fNameHandler = (e) => {
    setFName(e.target.value);
  };
  const lNameHandler = (e) => {
    setLName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const contactHandler = (e) => {
    setContact(e.target.value);
  };

  return (
    <div className="container">
      <form className="mt-5 row" onSubmit={submitHandler}>
        <div className="mb-3 col-6">
          <label className="form-label">First Name</label>
          <input
            className="form-control"
            placeholder="First Name"
            type="text"
            value={fName}
            onChange={fNameHandler}
          />
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Last Name</label>
          <input
            className="form-control"
            value={lName}
            placeholder="Last Name"
            type="text"
            onChange={lNameHandler}
          />
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Age</label>
          <input
            className="form-control"
            value={age}
            placeholder="Age"
            type="number"
            onChange={ageHandler}
          />
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            value={email}
            placeholder="Email"
            type="email"
            onChange={emailHandler}
          />
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Contact</label>
          <input
            className="form-control"
            value={contact}
            placeholder="Contact"
            type="number"
            onChange={contactHandler}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
