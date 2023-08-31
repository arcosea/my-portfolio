import { useEffect } from "react";
import "../styling/IndividualProject.css"
import "../styling/Projects.css"
// import video from "../assets/videos/autonomouscar.mov";
import img from "../assets/autocar.png"
import { SiProbot } from "react-icons/si";

export function AutonomousCarProject(){
    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Change title of page
    useEffect( () => {
        document.title = "Autonomous F1Tenth";
    }, []);

    return(
        <div className="container-SW">
            <h2 className="ind-proj-title"> Autonomous F1-Tenth Car</h2>
            <img className="auto-car" src={img}/>
            <span className="ind-proj-sect-header"> 
                Summary:
            </span>
            <p className="ind-proj-desc">
                Collaborated in a team to assemble a car containing a NVIDIA Jetson & a Hokuyo 10LX LiDAR sensor.
            </p>
            <p className="ind-proj-desc">
                Optimized emergency braking, wall following & pure pursuit algorithms in simulation prior to testing.
            </p>
            <p className="ind-proj-desc">
            Configured the car with Google's Cartographer to provide real-time SLAM in 2D & PS4 controller to activate
                    autonomous modes.
            </p>

        </div>

    );
}