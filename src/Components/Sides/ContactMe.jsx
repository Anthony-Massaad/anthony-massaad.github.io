import React from "react";
import ButtonOneSocial from "../Buttons/ButtonOneSocial"

function ContactMe(){
    return (
        <div id="contact-me" className="flex">
            <span>Contact Me</span>
            <ButtonOneSocial link="mailto:massaadanthony@hotmail.com" label="Contact me via Email">
                <img src={require("../../images/mail_icon.svg").default} width="0" />
            </ButtonOneSocial>
        </div>
    );
}

export default ContactMe; 