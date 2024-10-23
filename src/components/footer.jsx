//Refer to the Notes at the bottom of page for explanations to the code
import React from "react";
//import { Link } from "react-router-dom"; // to navigate to other pages (if necessary)
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footContent">
        <p> FaculTeam</p>
        <nav>
          <ul className="footerLinks"></ul>
        </nav>
      </div>
    </footer>
  );
}

//-------------- Notes -----------------
// Created an import for Link (Line 3) inorder to navigate to other pages (if necessary)
// import css file(Line 4) in order to apply styling
//created an unordered list of links (<nav> tag is used to wrap the list of links.)
//each link is contained in a <li> element
// <Link to> allows us to create a link to the file path of choice

//LINKS:
/**     <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/social-media">Social Media</Link>
            </li> */
