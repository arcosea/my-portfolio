import "../styling/IndividualProject.css"
import "../styling/Projects.css"
import { RiStackFill } from "react-icons/ri";
import { SiArduino, SiProbot } from "react-icons/si";
import { GiSoundWaves } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";

export function SmartCarProject(){
    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    // video 
    let video = "../videos/smartcar.mov";

    return(
        <div className="container-SW">
            <h2 className="ind-proj-title"> <SiProbot id="scIcon"/> Smart Car</h2>
            <video src={video} autoPlay loop controls id="sbvideo"/>
            {/** Summary */}
            <span className="ind-proj-sect-header"> 
                Summary:
            </span>
            <p className="ind-proj-desc">
                SmartCar is a programmable car that can be built using an Arduino kit. The electronic modules were programmed into an <SiArduino id='arduino'/> <em> Arduino Uno</em>. 
                Aside from having simple forward/backward and turning commands, it also has a couple unique modes. These modes include:  
                <em>a follower mode, line tracking mode and an obstacle avoidance mode </em>. These modes are made possible using a 
                <em> Ultrasonic Sensor & an RGB sensor</em>. The car is controlled using an Infrared Remote (IR) remote.
                Aside from  these modes, an <em> Arduino Nano</em> was attached with an OLED screen to display a time, temperature, humidity and to activate a motion sensor.
            </p>
            {/** Motion  */}
            <span className="ind-proj-sect-header"> 
                Motion Detection:
            </span>
            <p className="ind-proj-desc">
                A PID motion sensor is attached to the arduino uno and a buzzer, 3 LEDs are connected to the Arduino Nano. A button is used to turn on and off the motion detection mode. 
                When the mode is sent on, there is a period in which the PID sensor has to configure & this period under process when the <em id='bLED'> blue LED</em> is on. When the sensor is ready to detect
                the <em id='gLED'> green LED turns on</em>. Whenever motion is detected, the <em id='rLED'> red LED & buzzer flicker </em> for two sets.
            </p>
                
            {/** Follower mode*/}
            <span className="ind-proj-sect-header"> 
                Follower Mode:
            </span>
            <p className="ind-proj-desc">
                With this mode, the car uses the ultrasonic sensor to send <GiSoundWaves id="sound"/> sound waves out and back. Using the speed of sound, the distance an object that reflects the sound is calculated. 
                In this mode, the idea is that the car attempts to keep the object within its threshold (<strong id="dist"> distance of 30cm in this car </strong>). Whenever the distance is larger than that, the car stops 
                and scans its front <em id="deg"> 180 degree surroundings </em> in search of an object within that distance threshold.
            </p>

            {/** Obstacle avoidance mode*/}
            <span className="ind-proj-sect-header"> 
                Obstacle Avoidance Mode:
            </span>
            <p className="ind-proj-desc">
                The idea with this mode is that the car constantly measures how far away objects are as it moves and if an obstacle is within some distance threshold (<strong id="dist"> distance of 30cm in this car </strong>), then it stops and 
               scans its front <em id="deg">180 degree surroundings </em>. It scans in <em id="deg">increments of 30degrees </em> in search for the most open region and turns towards that direction and then continues to move.
            </p>

            {/** Line tracking mode*/}
            <span className="ind-proj-sect-header"> 
                Line Tracking Mode:
            </span>
            <p className="ind-proj-desc">
                Underneath the car, these are <strong id="rgb">3-RGB light sensors </strong> lined up. The idea with this mode is that it scans for light in all 3 and it registers which color is the line
                and attempts to keep the color of the line in the middle light sensor by turning in the appropriate direction as it moves.
            </p>

            {/** Data */}
            <span className="ind-proj-sect-header"> 
                Room Data
            </span>
            <p className="ind-proj-desc">
                An OLED screen, clock, temperature and humidity sensor are connected to an <SiArduino id='arduino'/> Arduino Nano. The nano reads in the room temperature and humidity and displays it
                in the screen. Using the time, an alarm can also be set & when the time is reached the red LED and buzzer go off.
            </p>
            <span className='hidden-note ind-proj-ts' data-msg="C/C++, Arduino Uno, Arduino Nano Electronic modules (Ultrasonic Sensor, DC Motors, PIR motion sensor, IR controller, LEDs, Buzzer, DHT sensor) ">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
            <span className="view-code">
                <a target="_blank" id="view-code" href="https://github.com/arcosea/SmartCar"> <BsGithub/> View SmartCar Code</a> 
            </span>

            <span className="view-code">
                <a target="_blank" id="view-code" href="https://github.com/arcosea/SmartCarAdditions"> <BsGithub/> View Additions Code</a> 
            </span>
            <div className="proj-gap"></div>
        </div>
    );
}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
