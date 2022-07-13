import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // fetch("http://localhost:3001/.Login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((r) => r.json())
    //   .then((user) => {
        setIsLoggedIn(true);

    history("/");
//   })
}

  return (
    <div id="login">
    <form widths="equal" onSubmit={handleSubmit}>
     
      <h3 id="logincolor"> Login</h3>
      <div className="mb-3">
        {/* <label className="label">Username</label> */}
        <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
            fluid label="username"
            value={formData.username}
            onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        {/* <label className="label">Password</label> */}
        <input
            className="input"
            type="dob"
            name="dob"
            placeholder="Password"
            value={formData.dob}
            onChange={handleChange}
        />
      </div>
      <div>
        <button className="button" type="submit">Login</button>
      </div>
    </form>
  </div>
  );
}


export default Login;
