import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StAnnesLocation from "./pages/StAnnesLocation";
import DonaldLocation from "./pages/DonaldLocation";
import K9Education from "./pages/K9Education";
import Grooming from "./pages/Grooming";
import SleepOverService from "./pages/SleepOverService";
import TheTeam from "./pages/TheTeam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/st-annes-location" element={<StAnnesLocation />} />
        <Route path="/donald-location" element={<DonaldLocation />} />
        <Route path="/k9-education" element={<K9Education />} />
        <Route path="/grooming" element={<Grooming />} />
        <Route path="/sleep-over-service" element={<SleepOverService />} />
        <Route path="/the-team" element={<TheTeam />} />
      </Routes>
    </Router>
  );
}

export default App
