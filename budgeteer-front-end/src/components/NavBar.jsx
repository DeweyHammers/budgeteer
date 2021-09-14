import React from "react";
import { logoutUser } from "../redux/user/userActions";
import { connect } from "react-redux";

const NavBar = ({ logoutUser }) => {
  return (
    <div>
      <h1>
        Budgeteer <button onClick={logoutUser}>Logout</button>
      </h1>
    </div>
  );
};

export default connect(null, { logoutUser })(NavBar);
