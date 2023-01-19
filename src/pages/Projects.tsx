
// Imports
import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react';
import "../styling/Projects.css";
import { SpaceCanvas } from './SpaceCanvas';
import { Gi3DStairs, GiEntryDoor} from "react-icons/gi";
import { AiOutlineCaretRight } from "react-icons/ai";
import { TbLego} from "react-icons/tb";
import {RiStackFill} from "react-icons/ri";
import {BsStars, BsController} from "react-icons/bs";
import {FaJedi, FaCarSide} from "react-icons/fa";
import {SiProbot} from "react-icons/si";
import {GiSpinningBlades, GiSoundWaves, GiCannonBall} from "react-icons/gi";
import { Link, Route, Routes } from 'react-router-dom';
import { MdWeb } from 'react-icons/md';


/**
 * Class that displays all projects
 */
export function Projects(){
        
        // Auto scrolls to the top after rendering
        useEffect(() => {
            window.scrollTo(0, 0)
        }, []); 

        /*
        *  Constantly create animation
        */
        useEffect( () => {
        // Callback function to see if elements are visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("reveal");
                } else{
                    entry.target.classList.remove("reveal");
                }
            })
        });

        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("slide");
                } else{
                    entry.target.classList.remove("slide");
                }
            })
        });

        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("unblur");
                } else{
                    entry.target.classList.remove("unblur");
                }
            })
        });

        const observer4 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    let softItem = document.querySelector("#soft-item");
                    let engItem = document.querySelector("#eng-item");
                    let physItem = document.querySelector("#phys-item");
                    if(entry.target.classList.contains("soft")){
                        softItem?.classList.add("nav-active");
                    } else {
                        softItem?.classList.remove("nav-active");
                    }

                    if(entry.target.classList.contains("eng")){
                        engItem?.classList.add("nav-active");
                    } else {
                        engItem?.classList.remove("nav-active");
                    }

                    if(entry.target.classList.contains("phys")){
                        physItem?.classList.add("nav-active");
                    } else {
                        physItem?.classList.remove("nav-active");
                    }

                }
            })
        });

        // Display each element that was originally hidden
        const revealElements = document.querySelectorAll(".proj-s-container");
        revealElements.forEach( (elem) =>{
            observer.observe(elem);
        });

        // Slide each item with this class
        const slideElements = document.querySelectorAll(".stash");
        slideElements.forEach( (elem) =>{
            observer2.observe(elem);
        });

        // Unblur each item with this class
        const blurElements = document.querySelectorAll(".blur");
        blurElements.forEach( (elem) =>{
            observer3.observe(elem);
        });

        // Check for current project
        const currElem = document.querySelectorAll(".proj-container");
        currElem.forEach( (elem) =>{
            observer4.observe(elem);
        });

        function active(entry: any){
            let softItem = document.querySelector("#soft-item");
            let engItem = document.querySelector("#eng-item");
            let physItem = document.querySelector("#phys-item");
            if(entry.target.classList.contains("soft")){
                softItem?.classList.add("nav-active");
            } else {
                softItem?.classList.remove("nav-active");
            }

            if(entry.target.classList.contains("eng")){
                engItem?.classList.add("nav-active");
            } else {
                engItem?.classList.remove("nav-active");
            }

            if(entry.target.classList.contains("phys")){
                physItem?.classList.add("nav-active");
            } else {
                physItem?.classList.remove("nav-active");
            }


        }

    }, []);

    // Opening & closing text for each section
    let sweOpen = "[ Software Projects ] ";
    let sweClose = "[ Software Projects ]";
    let eOpen = "[ Embedded System Projects ]";
    let eClose = "[ Embedded System Projects ]";
    let pOpen = "[ Physics Projects ]";
    let pClose = "[ Physics Projects ]";

    // links to pdfs
    let plcPDF = "../papers/PropellerLiftCoefficient.pdf"
    let miPDF = "../papers/MichelsonInterferometer.pdf";
    let ncPDF = "../papers/NuclearScattering.pdf"

    // page title
    let title = "[ Projects ]";

 
    // Code for scrolling 
    const scrollToSWE = () => {
        let elementId = '#swe-type';
        const section = document.querySelector(elementId);
        section!.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    const scrollToE = () => {
        let elementId = '#e-type' ;
        const section = document.querySelector(elementId);
        section!.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    const scrollToP = () => {
        let elementId = '#p-type';
        const section = document.querySelector(elementId);
        section!.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    
    // HTML project
    return (
      <div className='projects' >
        <SpaceCanvas/>
        <h1 id="proj-site-header"> {title} </h1>
        <nav className='navbar'>
            <ul className='list'>
                <li className='nav-item' id="soft-item">
                    <span onClick={scrollToSWE}>
                        Software 
                    </span>
                </li>
                <li className='nav-item' id="eng-item">
                    <span onClick={scrollToE}>
                        Embedded Systems
                    </span>
                </li>
                <li className='nav-item' id="phys-item">
                    <span onClick={scrollToP}>
                        Physics
                    </span>
                </li>
            </ul>
        </nav>
        <h2 className="proj-type-header soft" id="swe-type" > {sweOpen} </h2>
        {/** Stair master */}
        <div className="proj-container proj-s-container soft" id="odd-s">
            <span className='proj-title'> <Gi3DStairs/> StairMaster</span>
            <p className='proj-desc'> A responsive website for <em id="naimor-inc"> NaiMor, Inc </em> that allows customers to style stairs for purchase based on design shape, material, color, size and other features. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href="https://sigafonl.github.io/Stairmaster/"> <AiOutlineCaretRight/> View Website</a>   
            </span>
            <span className='hidden-note' data-msg="Typscript, 3JS, Shopify, lil-gui, Troika-Text, Blender, OBJ 3D Models, HTML/CSS, Node.JS, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** Portfolio */}
        <div className="proj-s-container soft" id="odd-s">
            <span className='proj-title'> <MdWeb/> Portfolio</span>
            <p className='proj-desc'> A responsive website for that showcases my work experience, education, projects & hobbies. </p>
            <span className='proj-note'>
                <Link to="/" id="view-website">  <AiOutlineCaretRight/> View Website </Link>  
            </span>
            <span className='hidden-note' data-msg="React, Typscript, 3JS, emailJS, HTML/CSS, Node.JS, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** Star Wars  */}
        <div className="proj-container proj-s-container soft" id="even-s">
            <span className='proj-title' id="swProj"> <FaJedi id="swIcon"/> Star Wars Image Generator </span>
            <p className='proj-desc'>
                Collaborated with a group to create a Website that allows users search a Star Wars Postgres database from 5 unique categories & generates an image
                based on the top result.
            </p>
            <span className='proj-note'>
                <Link to="/projects/starwars" id="view-website">  <AiOutlineCaretRight/> View Demo </Link>
            </span>
            <span className='hidden-note' data-msg="React, Typescript, Python, Docker, OpenAI, HTML/CSS, PostgresSQL, pgAdmin, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        
        </div>

        {/** Lego Finder */}
        <div className="proj-container proj-s-container soft" id="odd-s">
            <span className='proj-title' id='legoProj'> <TbLego/> LegoFinder</span>
            <p className='proj-desc'> An Object Detection web application using a custom 1000+ image dataset that allows users to detect between 5 of the top 20 most common 
                    Lego pieces in any image taken with 70% accuracy or higher. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href="https://lego-finder-7ed0f.web.app/"> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="React, Typescript, Python, PyTorch, Google Cloud Platform, Firebase, Detecto, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** Star Battle */}
        <div className="proj-container proj-s-container soft" id="last-proj">
            <span className='proj-title' id="sbProj"> <BsStars id="sbIcon" /> Star Battle Puzzle</span>
            <p className='proj-desc'> Collaborated with a group to design & implement a friendly Graphic User Interface for a sudoku-like puzzle that users can play. </p>
            <span className='proj-note'>
                <Link to="/projects/starbattle" id="view-website">  <AiOutlineCaretRight/> View Demo </Link>
            </span>
            <span className='hidden-note' data-msg="Java, Java Swing GUI, HTTP Server/Client, Agile Development, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/* End swe projects & start engineering projects */}
        <h2 className="proj-type-header soft" id="swe-type">  {sweClose} </h2>
        <div className="proj-gap"></div>
        <h2 className="proj-type-header eng" id="e-type">  {eOpen} </h2>

        {/* LaserDrive  */}
        <div className="proj-container eng stash" id="ld-proj">
            <span className='proj-title' id="ldProj"> <FaCarSide id="ldIcon" /> LaserDrive </span>
            <p className='proj-desc'> Collaborating with a group to build an Autonomous F1Tenth RC Car. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href=""> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="Python, ROS, F1Tenth Car & Simulator, Asana, React, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** SmartCar */}
        <div className="proj-container eng stash" id="sc-proj">
            <span className='proj-title' id="scProj"> <SiProbot id="scIcon"/> SmartCar </span>
            <p className='proj-desc'> Infrared remote (IR) controlled car with obstacle avoidance, motion detection, follower and line tracking
            modes, aside from simple driving commands. Also attached an OLED screen that displays temperature, humidity and time. </p>
            <span className='proj-note'>
                <Link to="/projects/smartcar" id="view-website">  <AiOutlineCaretRight/> View Demo </Link>
            </span>
            <span className='hidden-note' data-msg="C/C++, Arduino Uno, Electronic modules (Ultrasonic Sensor, DC Motors, PIR motion sensor, IR controller) ">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** Arduino Controller  */}
        <div className="proj-container eng stash" id="last-proj">
            <span className='proj-title' id="cProj"> <BsController id="cIcon"/> RF Controller </span>
            <p className='proj-desc'> Built a custom RF transmitter & receiver control DC motors, servo sensor and an LED using joysticks & potentiometer. 
                                        Also decoded an IR controller & repurposed it to change colors of an LED strip.
            </p>
            <span className='proj-note'>
                <Link to="/projects/controller" id="view-website">  <AiOutlineCaretRight/> View Demo </Link>
            </span>
            <span className='hidden-note' data-msg="C/C++, Arduino Nano, Electronic modules (BLDC Motors, nRF24L01) ">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** End Engineering Section & Start Physics sections*/}
        <h2 className="proj-type-header eng" id="e-type">  {eClose} </h2>
        <div className="proj-gap"></div>
        <h2 className="proj-type-header phys" id="p-type">  {pOpen} </h2>

        {/** Lift Propulsion  */}
        <div className="proj-container phys blur" id="lc-proj">
            <span className='proj-title' id="lcProj"> <GiSpinningBlades id="lcIcon"/> Lift Propeller Coefficient </span>
            <p className='proj-desc'> An experimental study & analysis on the lift generated from rotating a 2-bladed propeller.
            </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" onClick={ () => window.open(plcPDF)}> <AiOutlineCaretRight/> View Report (PDF)</a>
            </span>
            <span className='hidden-note' data-msg="Michelson Interferometer, Excel, Solver, Laser, Camera">
                <RiStackFill className='tech-stack-icon'/> Tools
            </span>
        </div>

        {/** Michelson Interferometer */}
        <div className="proj-container phys blur" id="mi-proj">
            <span className='proj-title' id="miProj"> <GiSoundWaves id="miIcon"/> Michelson interferometer Experiment. </span>
            <p className='proj-desc'> Observed changes in destructive interference patterns created by
                    interferometer and determined the wavelength of an HeNe laser to be
                    within 3.8% of expected value. Also determined the index of refraction for
                    air.
            </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" onClick={ () => window.open(miPDF)}> <AiOutlineCaretRight/> View Report (PDF)</a>
            </span>
            <span className='hidden-note' data-msg="Michelson Interferometer, Excel, Solver, Data recording, Laser, Camera">
                <RiStackFill className='tech-stack-icon'/> Tools
            </span>
        </div>

        {/** Nuclear Scattering */}
        <div className="proj-container phys blur" id="last-proj">
            <span className='proj-title' id="ncProj"> <GiCannonBall id="ncIcon"/> Nuclear Scattering Simulation. </span>
            <p className='proj-desc'> Performed an analogous experiment where ball bearings were fired at a cylindrical target &
                    scattering angles were observed. Determined its radius to be within 4.3% of
                    actual value.
            </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" onClick={ () => window.open(ncPDF)}> <AiOutlineCaretRight/> View Report (PDF)</a>
            </span>
            <span className='hidden-note' data-msg="Excel, Solver, Ball Bearing pump, Data recording, Uncertainty Analysis">
                <RiStackFill className='tech-stack-icon'/> Tools
            </span>
        </div>
        <h2 className="proj-type-header" id="p-type">  {pClose} </h2>

        {/** End */}
      </div>
    ); 
}