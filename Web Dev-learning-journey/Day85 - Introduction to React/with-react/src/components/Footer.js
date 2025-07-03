// Importing React to use JSX syntax
import React from 'react';

// Defining the Footer functional component
function Footer() {
  return (
    // JSX structure for the footer
    <footer className="footer">
      
      {/* Unordered list containing footer navigation links */}
      <ul className="footer-links">
        <li>
          {/* Anchor tag linking to the Privacy Policy page */}
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          {/* Anchor tag linking to the Terms of Service page */}
          <a href="#">Terms of Service</a>
        </li>
        <li>
          {/* Anchor tag linking to the Contact Us page */}
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
}

// Exporting the Footer component for use in other parts of the app
export default Footer;
