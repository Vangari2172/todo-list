import React, { useState, useEffect } from "react";
import "./TableList.css";
import axios from "axios";
import { Link } from "react-router-dom";

const TableList = () => {
  const [getData, setGetData] = useState([]);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    axios
      .get("https://todo-list-c0429-default-rtdb.firebaseio.com/userdata.json")
      .then((res) => {
        const dataFetch = [];
        for (const key in res.data) {
          dataFetch.push({
            _id: key,
            fName: res.data[key].fName,
            lName: res.data[key].lName,
            age: res.data[key].age,
            eMail: res.data[key].email,
            contact: res.data[key].contact,
          });
        }

        setGetData(dataFetch);
        setIsClick(false);
      });
  }, [isClick]);

  return (
    <div>
      <div>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((item, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.fName}</td>
                    <td>{item.lName}</td>
                    <td>{item.age}</td>
                    <td>{item.eMail}</td>
                    <td>{item.contact}</td>
                    <td>
                      <Link to={`/edituser/${item._id}`}>
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "orangered",
                            color: "white",
                          }}
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "orangered",
                          color: "white",
                        }}
                        onClick={() => {
                          axios.delete(
                            `https://todo-list-c0429-default-rtdb.firebaseio.com/userdata/${item._id}.json`
                          );
                          setIsClick(true);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
