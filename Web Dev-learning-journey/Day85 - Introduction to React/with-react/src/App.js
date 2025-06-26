// Importing logo (optional - not used here) and CSS styles
import logo from './logo.svg';
import './App.css';

// Importing React hook and components
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // useState hook to manage the counter value
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      {/* Navbar component with a prop 'logoText' */}
      <Navbar logoText="CodeWithSandy" />

      {/* Display current value of the counter */}
      <div className="value">{value}</div>

      {/* Button to increment the counter on click */}
      <button className="increment-btn" onClick={() => { setValue(value + 1) }}>
        Click Me
      </button>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
