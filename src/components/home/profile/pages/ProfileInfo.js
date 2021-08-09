import React, { useState } from "react";
import "./Security.css";
import ProfImg from "../assets/images/prof_test.jpeg";
import { useSelector } from "react-redux";
const axios = require('axios').default;

const ProfileInfo = () => {
  const { token, user } = useSelector( state => state.authentication);
  const [ updateUser, setUpdateUser ] = useState({});

  const handleSubmit = async (el) => {
    el.preventDefault();
    const email = user.email;
    if(!token) alert('Authentication error occured, refresh on home page or login again');

    const resUser = await axios.put('http://localhost:4000/profile/information', { updateUser, email });
    if(resUser.data.updateSuccess) alert('Updated successfully');
  }

  const handleChange = el => {
    const { name, value } = el.target;
    setUpdateUser({...updateUser, [name]: value});
  }

  return (
    <div className="container content mb-5">
      <h1 className="h3 mb-3">Profile Information</h1>
      <div className="card">
        <div className="card-body">

          <form onSubmit={el => handleSubmit(el)}>
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label htmlFor="inputUsername">Full Name</label>
                  <h4>{`${user.firstName}, ${user.surName}`}</h4>
                </div>

                <div className="form-group row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                      placeholder={user.firstName}
                      name='firstName'
                      onChange={el => handleChange(el)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName"
                      placeholder={user.surName}
                      name='surName'
                      onChange={el => handleChange(el)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputUsername">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhoneNumber"
                    placeholder={user.mobile}
                    name='mobile'
                    onChange={el => handleChange(el)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputUsername">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLocation"
                    placeholder={user.location}
                    name='location'
                    onChange={el => handleChange(el)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputUsername">Linkedln</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLinkedln"
                    placeholder="Linkedln Username"
                    name='linkedIn'
                    onChange={el => handleChange(el)}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center">
                  <img
                    alt="Andrew Jones"
                    src={ProfImg}
                    className="rounded-circle img-responsive mt-2"
                    width="200"
                    height="200"
                  />
                  <div className="mt-2">
                    <button>
                      <small>Upload</small>
                    </button>
                    <p></p>
                  </div>
                  <small>
                    For best results, use an image at least 128px by 128px in
                    .jpg format
                  </small>
                </div>
              </div>

            </div>
            <p></p>
            <button type="submit">Save changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
