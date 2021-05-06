import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

var styles = {
  background: "#ed5545",
  color: "white",
  bottom: "0rem",
  left: "0",
  right: "0",
};
var styles2 = {
  color: "white",
};
const Footer = () => {
  return (
    <footer className="text-white py-5" style={styles}>
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="mb-3">
              <a href="#" className="text-decoration-none">
                <FaFacebookSquare style={styles2} />
              </a>
              <a href="#" className="text-decoration-none">
                {" "}
                <FaTwitterSquare style={styles2} />
              </a>
              <a href="#" className="text-decoration-none">
                {" "}
                <AiFillLinkedin style={styles2} />
              </a>
              <a href="#" className="text-decoration-none">
                {" "}
                <AiOutlineInstagram style={styles2} />
              </a>
            </div>
            <br />
            <p>
              Moteur de recherche <strong>d'annonces immobilières</strong> pour{" "}
              <strong>acheter</strong> ou <strong>louer</strong> un appartement,
              une <strong>maison</strong> de particulier à particulier.
              <br />
              <strong>Publier une annonce</strong> pour vendre ou mettre en
              location un bien immobilier entre particulier est{" "}
              <strong>gratuit.</strong>
            </p>
          </div>
        </div>

        <p class="text-center">
          © Copyright 2021 Immobilier - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
