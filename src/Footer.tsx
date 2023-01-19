import {Link} from "react-router-dom";
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';
import { MdPermContactCalendar } from "react-icons/md";
import { BsPersonBadge, BsPersonFill } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { TbFileCertificate } from "react-icons/tb";


// Class 
export default function Footer(){
    return (
        <nav className="footer">
            <ul className="left-footer">
                <li>
                    <BsPersonFill className="icon"/>  Erick Arcos
                </li>

                <li>
                   <FaEnvelope className="icon"/> arcosea0@gmail.com
                </li>
            </ul>
            <ul className="middle-footer">
                <li>
                    <Link to="/contact" className="site-title link"> <MdPermContactCalendar/> Contact Me </Link>   
                </li>
                <li>
                    <Link to="/education" className="site-title link"> <TbFileCertificate/> Education </Link>  
                </li>
    

            </ul>

            <ul className="right-footer">
                <li>
                    <a target="_blank" className="view-website link" href="https://www.linkedin.com/in/erick-arcos2023/"> <FaLinkedin className="icon"/> LinkedIn </a>            
                </li>
                <li>
                    <a target="_blank" className="view-website link" href="https://github.com/arcosea"> <FaGithub className="icon"/> GitHub</a>  
                </li>
            </ul>
        </nav>
    )
}