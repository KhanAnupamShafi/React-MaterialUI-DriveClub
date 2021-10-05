import React from "react";
import { Link } from "react-router-dom";
import NoteFound from "../../Images/404.png";

const NotFound = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center my-5">
          <div class="error-template">
            <h1>Oops!</h1>
            <img className="img-fluid" width="500" src={NoteFound} alt="" />
            <div class="error-details fs-4 my-2">
              Sorry, an error has occured, Requested page not found! or You
              might not have permissions to see this page.
            </div>
            <div class="error-actions">
              <Link to="/" class="btn btn-primary btn-lg">
                <span class="glyphicon glyphicon-home"></span>
                Take Me Home{" "}
              </Link>
              <Link to="/" class="btn btn-default btn-lg">
                <span class="glyphicon glyphicon-envelope"></span> Contact
                Support{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
