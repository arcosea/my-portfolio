import "../styling/IndividualProject.css"
import "../styling/Projects.css"
import { RiStackFill } from "react-icons/ri";
import { SiArduino, SiProbot } from "react-icons/si";
import { BsController, BsGithub } from "react-icons/bs";
import { GiLed } from "react-icons/gi";
import { TbSpeedboat } from "react-icons/tb";

export function ControllerProject(){
    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    // video 
    let video = "../videos/controller.mov";

    return(
        <div className="container-SW">
            <h2 className="ind-proj-title"> <BsController id="cIcon"/> RF Controller</h2>
            <video src={video} autoPlay loop controls id="sbvideo"/>
            {/** Summary */}
            <span className="ind-proj-sect-header"> 
                Summary:
            </span>
            <p className="ind-proj-desc">
                Built a radio controller by using nRF24L01 modules connected to <SiArduino id='arduino'/> <em> Arduino Nanos</em> to make a transmitter & a reciever . 
                The transmitter recieves data from joystick and potentiometer and that data from the arduino nano they are all connected to. The transmitter, 
                then uses the data from the joystick and potentiometer and sends it to the reciever nRF24L01 module. The reciever then parses that data and depending on
                which data it sends, it can control a brushless dc motor, a servo motor, an <GiLed/> LED or any other module.
            </p>
        
            <p className="ind-proj-desc">
                The purpose of creating a radio controller was to improve the experience of using the <SiProbot id="scIcon"/> SmartCar. Since the car
                previously uses an Infrared remote controller (pure buttons), it is not quick user friendly. However, using a radio controller with joysticks makes
                the connection between the car and the transmitter more useful and easier experience. In addition, the controller could also be used for other projects
                such as a <TbSpeedboat/> hovercraft -- which I never got around to doing.
            </p>
                
            <span className='hidden-note ind-proj-ts' data-msg="C/C++, Arduino Nano, Electronic modules (BLDC Motors, nRF24L01) ">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
            <span className="view-code">
                <a target="_blank" id="view-code" href="https://github.com/arcosea/RadioController"> <BsGithub/> View Code</a> 
            </span>
            <div className="proj-gap"></div>
        </div>
    );
}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
