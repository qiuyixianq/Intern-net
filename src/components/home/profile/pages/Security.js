import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./Security.css";
const axios = require('axios').default;

const Security = () => {
  const { token, user } = useSelector(state => state.authentication);
  const oldPassRef = useRef(null);
  const newPassRef = useRef(null);
  const confirmPassRef = useRef(null);

  //event func
  const handleSubmit = async () => {
    if (!token) alert('Authentication error occured, refresh on home page or login again');
    else {
      const oldPassword = oldPassRef.current.value;
      const newPassword = newPassRef.current.value;
      const confirmPass = confirmPassRef.current.value;
      // !value
      if (!newPassword || !confirmPass || !oldPassword) alert('Invalid value');
      else {
        //have value;confirm password not match
        if (newPassword !== confirmPass) alert('Un-match confirm password');
        else {
          //all value entered valid
          const result = await axios.put('http://localhost:4000/profile/password', { email: user.email, oldPassword, newPassword });
          if(result.data.success) alert('Password updated successfully');
          else alert('Password updated failed, please check old password');
        }
      }
    }
  }

  return (
    <div className="container content">
      <h1 className="h3 mb-3">Security Settings</h1>

      <div className="tab-content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Password</h5>

            <div>
              <div className="form-group">
                <label htmlFor="inputPasswordCurrent">Current password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordCurrent"
                  ref={oldPassRef}
                />
                <small>
                  <a href="/">Forgot your password?</a>
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordNew">New password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordNew"
                  ref={newPassRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordNew2">Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordNew2"
                  ref={confirmPassRef}
                />
              </div>
              <p></p>
              <button onClick={() => handleSubmit()}>Save changes</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
