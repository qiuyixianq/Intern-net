import React from "react";
import { useSelector } from "react-redux";
import ProfImg from "../assets/images/prof_test_crop.jpeg";
import "./ProfileTemp.css";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.authentication);

  const data = {
    legend: {
      display: false,
    },
    datasets: [
      {
        label: "Javascript",
        data: [9, 1],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 255, 255, 1)"],
      },
    ],
  };

  const data2 = {
    legend: {
      display: false,
    },
    datasets: [
      {
        label: "Javascript",
        data: [6, 4],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 255, 255, 1)"],
      },
    ],
  };

  const data3 = {
    legend: {
      display: false,
    },
    datasets: [
      {
        label: "Javascript",
        data: [7, 3],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 255, 255, 1)"],
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div className="main-body">
          <div className="row profile_main">
            <h1>Profile Information</h1>
            <div className="card card-rounded animated animatedFadeInUp fadeInUp">
              <div className="row row-no-gutters profile_overview">
                <div className="col-sm-4 ">
                  <div className="profile_image">
                    <img src={ProfImg} alt="" />
                  </div>
                  <pre />
                  <Link to="/profile/overview/profileinfo">
                    <button className="button">Edit Profile</button>
                  </Link>
                </div>
                <div className="col-sm-4 profile_right border-end">
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
                        <i className="bx bxs-map prof_icons"></i>
                        <div>{user.location}</div>
                      </li>
                      <li className="d-flex align-items-center flex-wrap">
                        <i className="bx bxl-linkedin-square prof_icons"></i>
                        <a
                          href="https://www.linkedin.com"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "600",
                          }}
                        >
                          {user.firstName}
                        </a>
                        <i
                          className="bx bx-link-external"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </li>
                      <li className="d-flex align-items-center flex-wrap">
                        <i className="bx bx-paperclip prof_icons"></i>
                        <a
                          href="https://www.uowmkdu.edu.my/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resume Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2 ms-md-auto">
                  <p>Skills</p>
                  <Doughnut
                    options={{ tooltips: { enabled: false } }}
                    data={data}
                  />
                  <pre></pre>
                  <p>Language</p>
                  <Doughnut
                    options={{ tooltips: { enabled: false } }}
                    data={data3}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h1>Education</h1>
          <div className="row profile_main">
            <div className="card card-rounded animated animatedFadeInUp fadeInUp lazy">
              <div className="main-timeline">
                <div className="timeline">
                  <div className="icon"></div>
                  <div className="date-content">
                    <div className="date-outer">
                      <span className="date">
                        <span className="year">2022</span>
                        <span className="cgpa">CGPA 3.93</span>
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">UOW Malaysia KDU</h5>
                    <p className="description">
                      Bachelor in Software Engineering
                    </p>
                  </div>
                </div>

                <div className="timeline">
                  <div className="icon"></div>
                  <div className="date-content">
                    <div className="date-outer">
                      <span className="date">
                        <span className="year">2020</span>
                        <span className="cgpa">CGPA 3.75</span>
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">University Tunku Abdul Rahman</h5>
                    <p className="description">Diploma in Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h1>Skills</h1>
          <div className="row profile_main">
            <div className="col-sm-4">
              <div className="card card-rounded animated animatedFadeInUp fadeInUp lazy">
                <p>HTML</p>
                <div
                  style={{
                    width: "100%",
                    height: "40px",
                    position: "absolute",
                    top: "60%",
                    left: 0,
                    marginTop: "-20px",
                    lineHeight: "19px",
                    textAlign: "center",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  9/10
                </div>
                <Doughnut
                  options={{ tooltips: { enabled: false } }}
                  data={data}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card card-rounded animated animatedFadeInUp fadeInUp lazy">
                <p>Javascript</p>
                <div
                  style={{
                    width: "100%",
                    height: "40px",
                    position: "absolute",
                    top: "60%",
                    left: 0,
                    marginTop: "-20px",
                    lineHeight: "19px",
                    textAlign: "center",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  6/10
                </div>
                <Doughnut
                  options={{ tooltips: { enabled: false } }}
                  data={data2}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card card-rounded animated animatedFadeInUp fadeInUp lazy">
                <p>Python</p>
                <div
                  style={{
                    width: "100%",
                    height: "40px",
                    position: "absolute",
                    top: "60%",
                    left: 0,
                    marginTop: "-20px",
                    lineHeight: "19px",
                    textAlign: "center",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  7/10
                </div>
                <Doughnut
                  options={{ tooltips: { enabled: false } }}
                  data={data3}
                />
              </div>
            </div>
          </div>
          <pre></pre>
        </div>
      </div>
    </>
  );
};

export default Profile;
