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

function App() {
  return (
    
  <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/starwars" element={<StarWarsProject />} />
        <Route path="/projects/starbattle" element={<StarBattleProject />} />
        <Route path="/projects/smartcar" element={<SmartCarProject />} />
        <Route path="/projects/controller" element={<ControllerProject />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
    <Footer/>
  </>
  );

}

export default App;
