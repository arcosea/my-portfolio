import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWorkOutline, MdPersonPin } from "react-icons/md";
import {Link} from "react-router-dom"
import { isPropertySignature } from "typescript";

export default function Navbar(){
    return (
        <nav className="nav">
            <Link to="/my-portfolio" className="site-title"> <FaHome/> &nbsp; Home </Link>
            <ul>
                <li>
                    <Link to="/about" className="site-title"> <MdPersonPin/> &nbsp; About Me</Link>
                </li>
                <li>
                    <Link to="/experience" className="site-title"> <MdOutlineWorkOutline/> &nbsp; Experience</Link>
                </li>
                <li>
                    <Link to="/projects" className="site-title"> <GrProjects className="nav-icon"/>  &nbsp; Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

