import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body my-3">
              <h1 className="pt-5 d-flex align-items-center justify-content-center">
                Exhabition Survey
              </h1>
              <h3 className="pt-5 d-flex align-items-center justify-content-center">
                Your answers are appreciated
              </h3>
            </div>
            <Link to="/start" className="link">
              <div className="btn mb-3">Start</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
