import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, NavLink} from "react-router-dom";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {Projects} from "./pages/Projects";
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { StarWarsProject } from './pages/StarWarsProject';
import { StarBattleProject } from './pages/StarBattleProject';
import Navbar from './NavBar';
import Footer from './Footer';
import { SmartCarProject } from './pages/SmartCarProject';
import { ControllerProject } from './pages/ControllerProject';
import { Contact } from './pages/Contact';
import { AutonomousCarProject } from './pages/AutonomousCarProject';

function App() {
  let title = "about me"
  return (
    
  <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/my-portfolio" element={< Home />}/>
        <Route path="/my-portfolio/about" element={<About />} />
        <Route path="/my-portfolio/projects" element={<Projects />} />
        <Route path="/my-portfolio/projects/autonomouscar" element={<AutonomousCarProject/>} />
        <Route path="/my-portfolio/projects/starwars" element={<StarWarsProject />} />
        <Route path="/my-portfolio/projects/starbattle" element={<StarBattleProject />} />
        <Route path="/my-portfolio/projects/smartcar" element={<SmartCarProject />} />
        <Route path="/my-portfolio/projects/controller" element={<ControllerProject />} />
        <Route path="/my-portfolio/experience" element={<Experience />} />
        <Route path="/my-portfolio/education" element={<Education />} />
        <Route path="/my-portfolio/contact" element={<Contact />} />

      </Routes>
    </div>
    <Footer/>
  </>
  );

}

export default App;
