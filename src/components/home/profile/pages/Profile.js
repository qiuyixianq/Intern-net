import React from "react";
import { useSelector } from "react-redux";
import ProfImg from "../assets/images/prof_test.jpeg";
import "./ProfileTemp.css";

const Profile = () => {
  const { user } = useSelector(state => state.authentication);
  
  return (
    <>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-3 mb-3">
              <div className="card card-rounded">
                <div className="profile_image">
                  <img src={ProfImg} alt="" />
                </div>
                <div className="profile_name">
                  <div className="name">{`${user.firstName}, ${user.surName}`}</div>
                  <div className="title">{user.profession}</div>
                </div>
                <div className="profile_info">
                  <ul className="profile_timeline">
                    <li className="d-flex align-items-center flex-wrap">
                      <i className="bx bxs-phone prof_icons"></i>
                      <div>{user.mobile}</div>
                    </li>
                    <li className="d-flex align-items-center flex-wrap">
                      <i className="bx bx-envelope prof_icons"></i>
                      <div>{user.email}</div>
                    </li>
                    <li className="d-flex align-items-center flex-wrap">
                      <i className="bx bxl-linkedin-square prof_icons"></i>
                      <div>{user.firstName}</div>
                    </li>
                  </ul>
                  <br />
                  <button>Contact Me</button>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-3 lazy">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {`${user.surName} ${user.firstName}`}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <h6 className="mb-0">Education</h6>
                    <label className="col-sm-3 date-label text-secondary">
                      March 2022
                    </label>
                    <div className="col-sm-9 ">UOW Malaysia KDU</div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-secondary">
                      Bachelor Degree of Sofware Engineering (2022)
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <h6 className="mb-0">Experience</h6>
                    <label className="col-sm-3 date-label text-secondary">
                      May 2022 - Current
                    </label>
                    <div className="col-sm-9">Intern-Net Ltd.</div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-secondary">
                      Software Engineer Lead
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <h6 className="mb-0">Additional Information</h6>
                    <label className="col-sm-3 date-label text-secondary">
                      Expected Salary
                    </label>
                    <div className="col-sm-9 ">MYR 8,000</div>
                    <label className="col-sm-3 date-label text-secondary">
                      Preffered Location
                    </label>
                    <div className="col-sm-9 ">
                      Selangor, Kuala Lumpur, Johor
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">About Me</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"></div>
                    <label className="col-sm-3 date-label text-secondary">
                      Address
                    </label>
                    <div className="col-sm-9 ">
                      {user.location}
                    </div>
                    <label className="col-sm-3 date-label text-secondary">
                      Nationality
                    </label>
                    <div className="col-sm-9 ">Malaysia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
