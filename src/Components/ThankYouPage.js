// ThankYouPage.js

import React from "react";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body my-3">
              <h3 className="d-flex align-items-center justify-content-center">Thank You for your Response!</h3>
              <h6 className="d-flex align-items-center justify-content-center">Hope you had a great time!</h6>
              <img className="w-50 h-50 pt-2 mx-auto d-block" src="/correct.png" alt="done" />
            </div>
            <Link to="/" className="link">
              <div className="btn mb-3">Home</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
