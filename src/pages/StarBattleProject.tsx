import "../styling/IndividualProject.css"
import "../styling/Projects.css"
import {BsStars, BsController, BsGithub} from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
export function StarBattleProject(){
    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    // video 
    let video = "../videos/starbattle.mov";

    return(
        <div className="container-SW">
            <h2 className="ind-proj-title"> <BsStars id="bsIcon"/> Star Battle Puzzle</h2>
            <video src={video} autoPlay loop controls id="sbvideo"/>
            <p className="ind-proj-desc">
                Sudoku-like game where users can select a puzzle using an identifier, a request is made to the backend server that searches for that puzzle. If no puzzle is found,
                an error message is displayed. If puzzle is found, data on the different regions and solution is sent to front end which parses the it & generates the puzzle accordingly
                on a friendly user-interface. The users can then play the game according to the following rules:
            </p>
            <span className="ind-proj-rule"> (1) Each puzzle is divided into 10 different regions   </span>
            <span className="ind-proj-rule"> (2) Dots & Stars can be placed, but stars cannot be adjacent to one another </span>
            <span className="ind-proj-rule"> (3) To solve the puzzle: each region, column and row must contain 2 stars  </span>

            <p className="ind-proj-desc">
                This project was done for school with a group. The purpose was to be able to design our own system given general requirements.
                In addition, we got to experiment with different design patterns and practice agile development & working in sprints while collaborating with others.
            </p>
            <span className='hidden-note ind-proj-ts' data-msg="Java, Java Swing GUI, HTTP Server/Client, Agile Development, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
            <div className="proj-gap"></div>
        </div>
    );
}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
