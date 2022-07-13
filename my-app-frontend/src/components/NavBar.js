import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  const history = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    history("/.Login");
  }

  const renderLogout = isLoggedIn ? <button className="ui logout button" onClick={handleLogout}> Logout </button> : null

  return (
    <div>
      <div className="navbar">
        <NavLink className="navlink" to="/"> Home </NavLink>
        <NavLink className="navlink" to="/.Contact"> Contact </NavLink>
        {renderLogout}
      </div>
    </div>
  );
};

export default NavBar;