import { FaJedi } from "react-icons/fa";
import "../styling/IndividualProject.css"
import {BsGithub} from "react-icons/bs";
import { RiStackFill } from "react-icons/ri";
import { useEffect } from "react";
import video from "../assets/videos/starwar.mov";

export function StarWarsProject(){
    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    // Change title of page
    useEffect( () => {
        document.title = "StarWars Project";
    }, []);

    return(
        <div className="container-SW">
            <h2 className="ind-proj-title"> <FaJedi id="swIcon"/> Star Wars Image Generator</h2>
            <video controls autoPlay loop>
                <source src={video} type="video/mp4" />
            </video>

            <p className="ind-proj-desc">
                This website allows users to search for a name from any one of 5 potential categories related to Star Wars: Characters, Planets, Species, Vehicles & Starships.
                Each of those categories is a table in the database in which Characters, Planets, and Species are all related. Vehicles and Starships are both independent
            </p>
            <p className="ind-proj-desc">
                Whenever User clicks search, a request is made to the Flask backend searching for the target name in database.
                If the category is characters, planets or species then it loads corresponding column results from character in addition to characters homeworld and characters species.
                If category is either Vehicles & Starships, then it just displays the name, model, manufacturer, number of passengers, and class of Vehicle and Starship.
            </p>

            <span className='hidden-note ind-proj-ts' data-msg="React, Typescript, Python, Docker, OpenAI, HTML/CSS, PostgresSQL, pgAdmin, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
            <span className="view-code">
                <a target="_blank" id="view-code" href="https://github.com/arcosea/StarWarsApp"> <BsGithub/> View Code</a> 
            </span>
        
        </div>
    );
}

