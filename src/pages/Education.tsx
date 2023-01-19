// import "../styling/Education.css";
import { useEffect, useState, useRef } from 'react';
import { EducationCanvas } from "./EducationCanvas";
import "../styling/Education.css";
import { AiOutlineFundProjectionScreen, AiOutlineFunction, AiFillExperiment, AiFillHtml5, AiOutlineCloudServer } from 'react-icons/ai';
import { BsWater, BsGrid1X2, BsClipboardData, BsPatchQuestionFill, BsGithub } from 'react-icons/bs';
import { FaReact, FaWaveSquare, FaJava, FaDocker, FaPython, FaFlagUsa, FaTools, FaNode } from 'react-icons/fa';
import { FcDataSheet, FcEngineering, FcTreeStructure, FcVoicePresentation } from 'react-icons/fc';
import { GiFallDown, GiTimeSynchronization, GiMagnet, GiEmptyMetalBucketHandle, GiCheckboxTree, GiVintageRobot, GiHelicopter, GiUncertainty, GiWorld, GiCircuitry, GiLabCoat, GiLaserBurst, GiSolderingIron, GiThink, GiSprint, GiMexico, GiGraduateCap } from 'react-icons/gi';
import { MdDesignServices, MdEngineering, MdPattern, MdSyncProblem } from 'react-icons/md';
import { SiMatrix, SiPostgresql, SiMaterialdesignicons, SiElectron, SiAutodesk, SiReacttable, SiArduino, SiLatex, SiRstudio, SiWolframmathematica, SiJavascript, SiFlask, SiTypescript } from 'react-icons/si';
import { TbLetterC, TbMath, TbWaveSawTool } from 'react-icons/tb';
import { GrCertificate, GrObjectGroup } from 'react-icons/gr';

export function Education(){
    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <div className="education">
                <section className="ed-section">
                    <h2 className="sub-header"> Education </h2>
                    <h3>
                        <GiGraduateCap/> Pacific Lutheran University (2023)
                    </h3>
                    <h4>
                        <GrCertificate/> Cumulative GPA: 3.91 
                    </h4>
                    <h4>
                        Classes Taken: 
                    </h4>
                    <div className="course-container">
                        <ul className="courses-taken" id="phys-class">
                            <span>
                                <strong> Applied Physics (BS) </strong>
                            </span>
                            <li>
                                <FcEngineering/>  Intro to Engineering
                            </li>
                            <li>
                                <GiFallDown className='fall'/>  General Mechanics
                            </li>
                            <li>
                                <SiElectron className='elec spin'/>  General Electromagnetism (EM)
                            </li>
                            <li>
                                <GiTimeSynchronization className='time'/> Modern Physics (Relativity)
                            </li>
                            <li>
                                <BsWater className='wave'/> Waves & Fluids
                            </li>
                            <li>
                                <MdEngineering className='eng'/> Engineering Statics
                            </li>
                            <li>
                                <GiMagnet className='mag'/> EM theory & EM Optics
                            </li>
                            <li>
                                <GiEmptyMetalBucketHandle className='mat'/> Material Science
                            </li>
                            <li>
                                <span className='dq'> &#8466;</span> Diff. Equations & Laplace Transforms
                            </li>
                            <li>
                                <TbWaveSawTool className='four'/> Fourier Analysis & BVP
                            </li>
                            <li>
                                <FaReact className='quant spin'/> Quantum Mechanics
                            </li>
                        </ul>


                        <ul className="courses-taken" id="math-class">
                            <span>
                                <strong> Math Minor </strong>
                            </span>
                            <li>
                                <AiOutlineFundProjectionScreen className='stat'/> Statistics
                            </li>
                            <li>
                                <FaWaveSquare className='disc'/> Discrete Math
                            </li>
                            <li>
                                <AiOutlineFunction className='calc'/>  Integration Calculus
                            </li>
                            <li>
                               <span className='mult1'>&#8747;</span> 
                               <span className='mult2'>&#8747;</span>
                               Multivariable Calculus
                            </li>
                            <li>
                                <SiMatrix className='line'/> Linear Algebra
                            </li>
                        </ul>

                        <ul className="courses-taken" id="cs-class">
                            <span>
                                <strong> Computer Science (BA)</strong>
                            </span>
                            <li>
                                <FaJava className='java'/>  Intro to Programming
                            </li>
                            <li>
                                <FcTreeStructure className='ds'/> Data Structures
                            </li>
                            <li>
                                <GiCheckboxTree className='alg'/> Algorithms Design/Analysis
                            </li>
                            <li>
                                <SiPostgresql className='db' /> Databases
                            </li>
                            <li>
                                <BsGrid1X2 className='web'/> Web Design
                            </li>
                            <li>
                                <SiMaterialdesignicons className='od'/> Objects & Design
                            </li>
                            <li>
                                <GiVintageRobot className='ra'/> Robotic Agents
                            </li>
                        </ul>
                    </div>

                    {/** Skills */}
                    <h4>
                        Skills & Experience: 
                    </h4>
                    <div className="skills-container">
                        <ul className="skills-gained">
                            <span>
                                <strong> Languages Learned</strong>
                            </span>
                            <li>
                                <GiMexico className="mex"/> Spanish
                            </li>
                            <li>
                                <FaFlagUsa className="usa"/> English
                            </li>

                            <li>
                                <FaJava className='java'/>  Java
                            </li>
                            <li>
                                <SiJavascript className='js'/> JavaScript, 3JS
                            </li>
                            <li>
                                <SiTypescript className='ts'/> TypeScript
                            </li>
                            <li>
                                <FaPython className='py'/> Python
                            </li>
                            <li>
                                <AiFillHtml5 className='html'/> HTML/CSS
                            </li>
                            <li>
                                <SiRstudio className='r'/> R
                            </li>
                            <li>
                                <TbMath className='matlab'/> Matlab
                            </li>
                            <li>
                                <SiLatex className='lat'/> Latex
                            </li>
                        </ul>


                        <ul className="skills-gained">
                            <span>
                                <strong> Technologies & Frameworks</strong>
                            </span>
                            <li>
                               <BsGithub/> Github & Git
                            </li>
                            <li>
                                <FaNode/> NodeJS
                            </li>
                            <li>
                               <FaReact className='re spin'/> React
                            </li>
                            <li>
                               <SiArduino className='arduino'/> Arduino
                            </li>
                            <li>
                               <SiFlask className='flask'/> Flask
                            </li>
                            <li>
                                <FaDocker className='doc'/> Docker
                            </li>
                            <li>
                                <SiAutodesk className='auto'/> Autodesk 3D CAD & Printing
                            </li>
                            <li>
                               <GiCircuitry className='elec'/> PSpice
                            </li>
                            <li>
                                <AiOutlineCloudServer/> Google Cloud Platform
                            </li>
                            <li>
                                <SiReacttable className='ms spin'/> MathSage
                            </li>
                            <li>
                                <GiLabCoat className='la'/> Lab Apparatus 
                            </li>
                            <li>
                                <GiSolderingIron className='ra'/> Soldering 
                            </li>
                            <li>
                                <FaTools/> Hand Tools
                            </li>
                            <li>
                                <GiLaserBurst className='mi'/> Michelson Interferometer 
                            </li>
                            
           
                        </ul>

                        <ul className="skills-gained">
                            <span>
                                <strong> Soft Skills </strong>
                            </span>
                            <li>
                               <GrObjectGroup className='oop'/> Object Oriented Design (OOP)
                            </li>
                            <li>
                               <GiSprint className='ad'/> Agile Development
                            </li> 
                            <li>
                                <MdDesignServices className='dp'/> Design Patterns
                            </li>  
                            <li>
                                <AiFillExperiment className='xd'/> Experimental Design
                            </li>
                            <li>
                                <BsClipboardData className='dc'/> Data Collection & Analysis
                            </li>
                            <li>
                                <GiUncertainty className='ua'/> Uncertainty Analysis
                            </li>
                            <li>
                                <GiWorld className='pi spin'/> Physical Interpretation
                            </li>
                            <li>
                                <BsPatchQuestionFill className='ct'/> Critical Thinking
                            </li>
                            <li>
                                <MdSyncProblem className='ps'/> Problem Solving
                            </li>
                            <li>
                                <FcVoicePresentation/> Presentation
                            </li>
                                                      
                        </ul>
                    </div>
                </section>
            <EducationCanvas/>
        </div>
    );
}