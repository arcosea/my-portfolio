import "../styling/Home.css";
import {Link} from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import * as THREE from "three";
import {Text} from 'troika-three-text';
import { WelcomeCanvas } from "./WelcomeCanvas";

export function Home(){
    // Change title of page
    useEffect( () => {
        document.title = "Home";
    }, []);
    return (
        <div className="home">
            <div className="home-container">
                <p className="home-intro" id="text-1">
                    Welcome! My name is Erick. Check out my <Link to="/my-portfolio/projects" id="proj-link"> Projects!</Link>
                </p>
                
            </div>
            <WelcomeCanvas/>
        </div>
    );
}