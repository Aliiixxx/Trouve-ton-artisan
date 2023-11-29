import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="legal-menu">
        <h3>Legal Pages</h3>
        <ul>
          <li>
            <Link to="/legal/mentions">Mentions Légales</Link>
          </li>
          <li>
            <Link to="/legal/personalData">Données Personnelles</Link>
          </li>
          <li>
            <Link to="/legal/accessibility">Accessibilité</Link>
          </li>
          <li>
            <Link to="/legal/cookies">Cookies</Link>
          </li>
        </ul>
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>
          101 cours Charlemagne <br />
          CS 20033 <br />
          69269 LYON CEDEX 02 <br />
          France <br />
          <a href="tel:+330426734000">+33 (0)4 26 73 40 00</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
