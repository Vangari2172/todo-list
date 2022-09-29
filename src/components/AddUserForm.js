import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUserForm = () => {
  let navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      fName: event.target[0].value,
      lName: event.target[1].value,
      age: event.target[2].value,
      email: event.target[3].value,
      contact: event.target[4].value,
    };

    axios.post(
      "https://todo-list-c0429-default-rtdb.firebaseio.com/userdata.json",
      data
    );

    navigate("/");
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
          />
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Last Name</label>
          <input className="form-control" placeholder="Last Name" type="text" />
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Age</label>
          <input className="form-control" placeholder="Age" type="number" />
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Email</label>
          <input className="form-control" placeholder="Email" type="email" />
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Contact</label>
          <input className="form-control" placeholder="Contact" type="number" />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
