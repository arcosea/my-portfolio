import { FaJedi } from "react-icons/fa";
import "../styling/IndividualProject.css"
import {BsGithub} from "react-icons/bs";
import { RiStackFill } from "react-icons/ri";

export function StarWarsProject(){
    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    // video 
    let video = "../videos/starwar.mov";

    return(
        <div className="container-SW">
            <h2 className="ind-proj-title"> <FaJedi id="swIcon"/> Star Wars Image Generator</h2>
            <video src={video} autoPlay loop controls/>
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

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
