import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Background/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import './App.css';
import Assessment from "./Components/Assessment/Assessment";
import Contact from "./Components/Contact/Contact";
import pop from "./Components/Popup/Popup";
import 'ionicons/dist/ionicons.js';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar is always visible */}
        <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* About route */}
          <Route path="/assessment" element={<Assessment />} /> {/* Third route */}
          <Route path="/contact" element={<Contact />} /> {/* Fourth route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
