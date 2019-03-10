import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <h1>Developed by Daniel Ferreira - {date}</h1>
          <div className="footer__social">
            <a href="https://twitter.com/danferreiradfs" target="blank">
              <h2 className="footer__social-icon">
                <i className="fa fa-twitter icon" />
              </h2>
            </a>

            <a href="https://github.com/danielferreiradf" target="blank">
              <h2 className="footer__social-icon">
                <i className="fa fa-github icon" />
              </h2>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
