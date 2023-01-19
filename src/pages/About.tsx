import "../styling/About.css";
import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import { GiArtificialHive, GiArtificialIntelligence, GiMountainClimbing, GiRunningShoe, GiSoccerBall, GiSolarSystem, GiThreeFriends, GiTimeSynchronization, GiVintageRobot } from "react-icons/gi";
import { FaChess, FaRobot, FaRocket, FaRunning, FaVolleyballBall, FaWaveSquare } from "react-icons/fa";
import { MdEngineering, MdOutlineWeb, MdSportsTennis, MdTransform } from "react-icons/md";


export function About(){
    /**********         Running Slide Show              *************/
    // Running slideshow & method for storing images & keeping track of which to display
    // To small: "running/prenats.png", "running/vball.png", "running/10k.png"
    let imageURL = ["running/xc-plu-invite.png", "running/xc-spu.png", "running/team.png", "running/10k.png", "running/inv.png", "running/lc-invite.png", "running/lc.png"];
    let [imageIndex, setImageIndex] = useState(0);
    let [imageLink, setImageLink] = useState("running/xc-plu-invite.png");
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
   let showURL = ["shows/int.png", "shows/aot2.png", "shows/got.png", "shows/bb.png", "shows/ww.png"];
   let showTitle = ["Interstellar", "Attack on Titan", "Game of Thrones", "Breaking Bad", "Westworld"];
   let [currentTitle, setCurrentTitle] = useState("Interstellar");
   let [showIndex, setShowIndex] = useState(0);
   let [showLink, setShowLink] = useState("shows/int.png");
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
                <img src="/profile.png" id="profile" alt="profile picture of Erick Arcos"></img>
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
                                I grew up playing soccer from when I was 8 till midway through High School.
                            </p>
                        </li>
                        <li>
                            <span className="sub-title"> 
                                <FaRunning id="forward"/> Track
                            </span>
                            <p>
                                My personal bests are 4:16 min in the 1500m and a 15:43 5k
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
                                <FaVolleyballBall /> volleyball
                            </span>
                        </li>
                        <li>
                            <span className="sub-title" >
                                <MdSportsTennis/> badminton
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
            
        </div>
    );
}