import "../styling/Experience.css";
import { useEffect, useState, useRef } from 'react';
import {Link} from "react-router-dom"
import {Route, Routes, NavLink} from "react-router-dom";
import { AiOutlineLaptop} from "react-icons/ai";
import { Gi3DStairs, GiTeacher, GiStopSign} from "react-icons/gi";
import { FcTreeStructure } from "react-icons/fc";
import { MdConstruction, MdHealthAndSafety} from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import {MdWork} from "react-icons/md";
import { SpaceCanvas } from "./SpaceCanvas";

// import logo images
import naimor from "../assets/logos/naimor.png";
import plu from "../assets/logos/plu.png";
import plu2 from "../assets/logos/plu2.png";
import utiligi from "../assets/logos/utiligi.png";

export function Experience(){
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
                    entry.target.classList.add("show");
                } else{
                    entry.target.classList.remove("show");
                }
            })
        });

        // Display each element that was originally hidden
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach( (elem) =>{
            observer.observe(elem);
        })
    }, []);

    // Change title of page
    useEffect( () => {
        document.title = "Work Experience";
    }, []);

    return (
        <div className="container">
            <SpaceCanvas/>
            <div className="section-header">
                <h2 className="header-name hidden"> <MdWork id="suitIcon"/> Work Experience <GrUserWorker id="workIcon"/> </h2>
            </div>
            <section className="section" id="work-section-timeline">
                {/* SWE Job */}
                <div className="inner-container">
                    <div className="comp-container-left hidden" id="swe-job">
                        <h3 className="component-name"> <AiOutlineLaptop id="ltIcon"/> Software Engineer</h3>
                        <img src={naimor} alt="company logo" id="naimor-img"></img>
                        <span className="left-arrow"></span>
                        <h4 className="company-left" id="naimor"> NaiMor, Inc </h4>
                        <span className="timeline"> August 2022 - August 2023</span>
                        <p className="description">
                            Designed a responsive web-app with mobile compatibility using <strong id="react">React</strong> for <strong id="cascade"> Cascade's Manufacturing </strong> store.
                        </p>
                        <p className="description">
                            Implement algorithms that can assemble OBJ models based on customer input using Typescript & <strong id="threejs">Javascripts 3D library (3JS)</strong>.
                        </p>
                        <p className="description">
                            Provides user with a price estimate for their stair configuration based on <strong id="parameters">shape, style, materials, colored, dimensions & more </strong>. 
                            Also allows users to place order directly into <strong id="shopify"> Shopify </strong>.
                        </p>
                        
                        <p className="note-link">
                            <strong><em id="link"> Website Link: </em></strong>  
                            <a target="_blank" id="naimor_link" href="https://www.cascademanufacturing.com/products/custom-staircase"> <Gi3DStairs /> Stairmaster</a>
                        </p>  
                    </div>
                    <div className="visual">
                    </div>
                </div>

                {/* Tutor Job */}
                <div className="inner-container">
                    <div className="visual">
                    </div>
                    <div className="comp-container-right hidden" id="tutor-job">
                        <h3 className="component-name"> <GiTeacher id="teachIcon"/> Math/CS Tutor</h3>
                        <img  src={plu2} alt="company logo"></img>
                        <span className="right-arrow"></span>
                        <h4 className="company-right" id="plu-name"> Pacific Lutheran University </h4>
                        <span className="timeline"> August 2022 - May 2023</span>
                        <p className="description">
                            Responsible for providing <strong id="ac-sys"> academic assistance </strong> to other students through drop-in hours or scheduled one to one appointments for <strong id="ac-sys"> Math & Computer Sciences Courses </strong>.
                        </p> 
                    </div>
                </div>

                {/* TA Job */}
                <div className="inner-container">
                    <div className="comp-container-left hidden" id="ta-job">
                        <h3 className="component-name"> <FcTreeStructure /> Data Structures Teacher Assistant</h3>
                        <img  src={plu} alt="company logo"></img>
                        <span className="left-arrow"></span>
                        <h4 className="company-left" id="plu-name"> Pacific Lutheran University </h4>
                        <span className="timeline"> February 2022 - May 2022</span>
                        <p className="description">
                            I was responsible for checking students pre-lab responses & answering any <em id="lab"> technical or conceptual lab related questions </em>students may have had.
                            Also graded <strong id="num-lab"> 6 different labs </strong> for roughly <strong id="num-lab"> 40 students </strong> & provided <strong id="cfeed"> constructive feedback</strong>.
                        </p>
                       
                    </div>
                </div>

                {/* Apprentice Job */}
                <div className="inner-container">
                    <div className="comp-container-right hidden" id="app-job">
                        <h3 className="component-name"> <MdConstruction id="toolsIcon" /> Apprentice</h3>
                        <img id="logo" src={utiligi} alt="company logo"></img>
                        <span className="right-arrow"></span>
                        <h4 className="company-right" id="utiligi"> Utiligi Telecommunications </h4>
                        <span className="timeline"> June - September 2020, 2021, 2022</span>
                        <p className="description">
                            I was responsible for assisting my coworkers in various types of jobs. Some of the types of jobs I participated in include:
                            <strong id="work-type"> Underground OSP Cabling, Horizontal Directional Drilling (HDD), Hydro Excavating, Trenching and Concrete/Asphalt Restoration, HDD Bore Profiling and Planning
                            , Duct Verification (Rod & Proof), Optic Fiber Installation and Traffic Control</strong>. 
                        </p> 
            
                        <p className="note">
                            <strong id="certs">Certifications: </strong>Washington Flagging Permit <GiStopSign id="stopIcon" /> , CPR <MdHealthAndSafety id="safetyIcon" />
                        </p>
                    </div>
                </div>
            </section>

        </div>



    )
}