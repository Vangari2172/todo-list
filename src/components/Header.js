import React from "react";
import { Link } from "react-router-dom";

const NAVBAR = {
  display: "flex",
  justifyContent: "right",
  marginRight: "20px",
};

const Header = () => {
  return (
    <div>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg bg-light" style={NAVBAR}>
            <Link to="/adduser">
              <button
                className="btn"
                style={{ backgroundColor: "orangered", color: "white" }}
              >
                Add User
              </button>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
