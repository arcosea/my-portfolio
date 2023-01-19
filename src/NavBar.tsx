import { FaHome } from "react-icons/fa";
import {Link} from "react-router-dom"
import { isPropertySignature } from "typescript";

export default function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" className="site-title"> <FaHome/> Home </Link>
            <ul>
                <li>
                    <Link to="/about" className="site-title"> About Me</Link>
                </li>
                <li>
                    <Link to="/experience" className="site-title"> Experience</Link>
                </li>
                <li>
                    <Link to="/projects" className="site-title"> Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

