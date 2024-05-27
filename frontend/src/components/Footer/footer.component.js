import React from "react";
import "./footer.styles.css";

const Footer = () => {
  return (
    <>
      <footer className="text-center footer-container">
        <div className="container">
          <section className="mb-2">
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://www.linkedin.com/in/talal-janjua"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://www.facebook.com/talal.janjua.2000"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://x.com/talal_janjua_"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://github.com/muhammadtalaljanjua"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://www.instagram.com/talal_janjua/"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://wa.me/923211941854"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="mailto:hafiztalalaqeel1@gmail.com"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-brands fa-google"></i>
            </a>
          </section>
        </div>

        <div className="text-center">© 2024 Copyright - Made by Muhammad Talal</div>
      </footer>
    </>
  );
};

export default Footer;
