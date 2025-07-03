// rfce - React Functional Component Export
// This is a React component that exports a functional component named Navbar.

import React from 'react'; // Importing React (required for JSX)

// Defining the Navbar functional component and receiving props as parameter
const Navbar = (props) => {
  return (
    // JSX structure for the navigation bar
    <nav className="navbar">
      
      {/* Logo section using the prop 'logoText' passed from parent */}
      <div className="logo">{props.logoText}</div>

      {/* Navigation links */}
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

// Exporting the Navbar component so it can be used in other files (like App.js)
export default Navbar;
