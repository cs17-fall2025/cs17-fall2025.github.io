import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Assignments from "./components/Assignments";
import Notes from "./components/Notes";
import Resources from "./components/Resources";
import Staff from "./components/Staff";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}