import React from "react";
import Header from "./Header";
import TableList from "./TableList";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RouterFile = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <TableList />
              </div>
            }
          ></Route>
          <Route path="/adduser" element={<AddUserForm />}></Route>
          <Route path="/edituser/:userId" element={<EditUserForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default RouterFile;
