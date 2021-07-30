import React from "react";
import { useSelector } from "react-redux";

const Saved = () => {
  const { savedJob } = useSelector(state => state.authentication.user);

  //main render
  return (
    <div className="saved">
      <h4>Saved Job</h4>
      <div className="savedList">
        {savedJob.map((job,index) => {
          if (job.job.length !== 0) {
            return (
              <div key={index} className="card text-dark bg-light mb-3" style={{ maxWidth: "18rem" }}>
                <h5 className="card-header bg-info">{job.company}</h5>
                <div className="card-body">
                  <h6 className="card-title">{job.job.map((title, jobIndex) => (
                    <div key={jobIndex}>
                      <span>{jobIndex + 1}. </span>
                      <span>{title}</span>
                      <br />
                    </div>
                  ))}</h6>

                </div>
              </div>
            )
          }
          else return <React.Fragment key={index}></React.Fragment>
        })}
      </div>

    </div>
  );
};

export default Saved;
