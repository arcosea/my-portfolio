import "../styling/Contact.css";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import { BsPersonBadge } from "react-icons/bs";
import { MdMessage, MdOutlineMarkEmailUnread, MdSend } from "react-icons/md";
import { ContactCanvas } from "./ContactCanvas";
import React, { useEffect, useState, useRef } from 'react';

// Define ID
const SERVICE_ID = 'service_rxcozvi';
const TEMPLATE_ID = 'template_x9asmo8';
const USER_ID = 'N-Co5OaAcmUr9I2u-';

export function Contact(){
    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    // Function to send emails
    const sendEmail = (e: any) => {
        e.preventDefault();
        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);

            // Display message & remove after 5 seconds
            let msg = document.querySelector(".submit-message");
            msg?.classList.add("show-msg");
            setTimeout(() => {
                msg?.classList.remove("show-msg");
            }, 10000);
            
           
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();

        
    };
    

    return (
        <div className="cont-container">
            <ContactCanvas/>
            <h2 className="cont-header"> Contact Me</h2>
            <p className="submit-message">
                Your Message was Sent!
            </p>
            <Form className="form-container" onSubmit={sendEmail}>
                <div className="ind-form-cont">
                    <label className="form-name"> <BsPersonBadge/> Name: </label>
                    <input required className="form-input" type="text" name="name" />
                </div>
                <div className="ind-form-cont">
                    <label className="form-name"> <MdOutlineMarkEmailUnread/> Email: </label>
                    <input required className="form-input" type="email" name="email" />
                </div>
                <div className="ind-form-cont">
                    <label className="form-name"> <MdMessage/> Message: </label>
                    <textarea className="form-input" id="text-area" name="message" />
                </div>
                <div className="ind-form-cont">
                    <input className="submit" type="submit" value="Submit"/>
                </div>
                
                
            </Form>

        </div>
    );
}
