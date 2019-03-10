import React from "react";
import ShieldLogo from "../../img/shield-logo.svg";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
        <div className="notfound__content">
          <img src={ShieldLogo} alt="Not Found" />
          <h1>Sorry, The content you requested does not exist.</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
