import "../styling/About.css";
import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import { GiArtificialHive, GiArtificialIntelligence, GiMountainClimbing, GiRunningShoe, GiSoccerBall, GiSolarSystem, GiThreeFriends, GiTimeSynchronization, GiVintageRobot } from "react-icons/gi";
import { FaChess, FaRobot, FaRocket, FaRunning, FaVolleyballBall, FaWaveSquare } from "react-icons/fa";
import { MdEngineering, MdOutlineWeb, MdSportsTennis, MdTransform } from "react-icons/md";
// Profile image
import profileImg from "../assets/profile.png";

// Running images
import xc_plu from "../assets/running/xc-plu-invite.png";
import xc_spu from "../assets/running/xc-spu.png";
import team from  "../assets/running/team.png";
import ten_k from  "../assets/running/10k.png";
import inv from  "../assets/running/inv.png";
import lc_inv from "../assets/running/lc-invite.png";
import lc from "../assets/running/lc.png";

// Movies & Shows
import inter from "../assets/shows/int.png";
import aot from  "../assets/shows/aot2.png";
import got from  "../assets/shows/got.png";
import bb from "../assets/shows/bb.png";
import ww from "../assets/shows/ww.png";
import vs from "../assets/shows/vs.png";
import sw from "../assets/shows/sw.png";

export function About(){
    /**********         Running Slide Show              *************/
    // Running slideshow & method for storing images & keeping track of which to display
    let imageURL = [xc_plu, xc_spu, team, ten_k, inv, lc_inv, lc];
    let [imageIndex, setImageIndex] = useState(0);
    let [imageLink, setImageLink] = useState(xc_plu);
    let slideInterval: any;
    let intervalTime = 5000; // In ms
    let autoScroll = true;

    // Go to previous Running slide 
    const previousRunSlide = (e: any) => {
        if (imageIndex === 0){
            setImageIndex(imageURL.length - 1);
            setImageLink(imageURL[imageIndex]);
        } else{
            setImageIndex(imageIndex - 1);
            setImageLink(imageURL[imageIndex]);
        }
    }

    // Go to next Running Slide
    const nextRunSlide = (e: any) => {
        if (imageIndex === imageURL.length - 1){
            setImageIndex(0);
            setImageLink(imageURL[imageIndex]);
        } else{
            setImageIndex(imageIndex + 1);
            setImageLink(imageURL[imageIndex]);
        }
    }

    // Automatically goes to next Running slide after some time
   function autoRun() {
        slideInterval = setInterval(nextRunSlide, intervalTime);
   }

   // Automatically moves to next Running slide
   useEffect( () => {
        if(autoScroll){
            autoRun();
        }
        // Clean up function to clear up bug
        return () => clearInterval(slideInterval);
   }, [imageIndex]);

     /**********            Favorite Shows Slide Show      *************/
   // Favorite shows slideshow & method for storing images & keeping track of which to displa
   let showURL = [inter, aot, got, sw, vs, bb, ww];
   let showTitle = ["Interstellar", "Attack on Titan", "Game of Thrones", "Star Wars", "Vinland Saga", "Breaking Bad", "Westworld"];
   let [currentTitle, setCurrentTitle] = useState("Interstellar");
   let [showIndex, setShowIndex] = useState(0);
   let [showLink, setShowLink] = useState(inter);
   let slideInterval_show: any;
   let scrollAuto = true;


    // Go to previous Show slide 
    const previousShowSlide = (e: any) => {
        if (showIndex === 0){
            setShowIndex(showURL.length - 1);
            setShowLink(showURL[showIndex]);
            setCurrentTitle(showTitle[showIndex]);
        } else{
            setShowIndex(showIndex - 1);
            setShowLink(showURL[showIndex]);
            setCurrentTitle(showTitle[showIndex]);
        }
    }

    // Go to next Show Slide
    const nextShowSlide = (e: any) => {
        if (showIndex === showURL.length - 1){
            setShowIndex(0);
            setShowLink(showURL[showIndex]);
            setCurrentTitle(showTitle[showIndex]);
        } else{
            setShowIndex(showIndex + 1);
            setShowLink(showURL[showIndex]);
            setCurrentTitle(showTitle[showIndex]);
        }
    }

    // Automatically goes to next Show slide after some time
    function autoShow() {
        slideInterval_show = setInterval(nextShowSlide, intervalTime);
    }

    // Automatically moves to next Show slide
    useEffect( () => {
        if(scrollAuto){
            autoShow();
        }
        // Clean up function to clear up bug
        return () => clearInterval(slideInterval_show);
    }, [showIndex]);

    // Change title of page
    useEffect( () => {
        document.title = "About Me";
    }, []);

    return (
        

        
        <div id="container">
            
            <h2 id="header"> About Me</h2>
            
            {/** BIO  */}
            <div id="person">
                <p id = "intro">
                    Hey Everyone! My Name is <strong>Erick Arcos</strong>, a <em> student-athlete </em> at <strong>Pacific Lutheran University</strong>. 
                    I am studying <strong>Applied Physics (BS)</strong> and <strong>Computer Science (BA)</strong> with a <strong> Minor in Mathematics. </strong> 
                    I will be <strong> graduating in  May of 2023. </strong>
                </p>
                <img src={profileImg} id="profile" alt="profile picture of Erick Arcos"></img>
            </div>
            <div >
                <section className="section">
                    <h3 className="sub-header"> Interests </h3>
                    <div className="interests">
                    <ul >
                        <li>
                           <FaRocket/>  Space Exploration
                        </li>
                        <li>
                            <GiSolarSystem/> Astrophysics
                        </li>
                        <li>
                            <FaRobot/> Robotics
                        </li>
                        <li>
                            <GiTimeSynchronization/> General Relativity
                        </li>
                    </ul>

                    <ul >
                        <li>
                           <MdOutlineWeb/>  Software Development
                        </li>
                        <li>
                            <GiArtificialHive/> Artifical Intelligence
                        </li>
                        <li>
                            <GiVintageRobot/> Machine Learning
                        </li>
                    </ul>

                    </div>
                </section>
            </div>

            
            {/** Sports & Activities */}
            <div id="activities">
                <section className="section">
                    <h3 className="sub-header"> Sports & Activities </h3>
                    <ul className="fav-act">
                        <li>
                            <span className="sub-title" > 
                                <GiSoccerBall id="ball"/> Soccer
                            </span>
                            <p>
                                Played soccer up until my sophomore year of High School.
                            </p>
                        </li>
                        <li>
                            <span className="sub-title"> 
                                <FaRunning id="forward"/> Track
                            </span>
                            <p>
                                My personal bests are 4:03 min in the 1500m and a 15:43 5k
                            </p>
                        </li>
                        <li>
                            <span className="sub-title"> 
                                <GiRunningShoe id="upward"/> Cross Country
                            </span>
                            <p>
                                Personal bests are 26:17 min in the 8k and 1:18:05 in the Half Marathon
                            </p>
                        </li>
                    </ul>
        


                    <div className="slideshow" >
                        <button className="slider" id="previous-run" onClick={previousRunSlide}> 	&larr; </button>
                        <img className="slide" id="run-slides" alt="default" src={imageLink}/>
                        <button className="slider" id="next-run" onClick={nextRunSlide}> &rarr; </button>
                    </div>

                    <span className="sub-title">
                        Other Activities
                    </span>
                    <ul className="other-act">
                        <li>
                            <span className="sub-title" >
                                <FaVolleyballBall /> Volleyball
                            </span>
                        </li>
                        <li>
                            <span className="sub-title" >
                                <MdSportsTennis/> Badminton
                            </span>
                        </li>
                        <li>
                            <span className="sub-title" >
                                <GiMountainClimbing/> Rock Climbing
                            </span>
                        </li>
                        <li>
                            <span className="sub-title" >
                                <FaChess/> Chess
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
            
            {/** Family Background */}
            <div>
                <section className="section">
                    <h3 className="sub-header"><GiThreeFriends/> Family & Background  </h3>
                    <p>
                        I value spending time with Friends & Family. I have three younger brothers. I am the first in my family to have graduated High School and attended University! 
                    </p>
                </section>
            </div>

            {/** Fav shows/movies */}
            <div>
                <section className="section">
                    <h3 className="sub-header"> Favorite Shows & Movies </h3>

                    
                        <span className="sub-title" id="show-title"> {currentTitle}</span>
                        <div className="slideshow" >
                            <button className="slider" id="previous" onClick={previousShowSlide}> 	&larr; </button>
                            <img className="slide" alt="default" src={showLink}/>
                            <button className="slider" id="next" onClick={nextShowSlide}> &rarr; </button>
                        </div>   
                </section>
            </div>

            
            
        </div>
        
    );
}