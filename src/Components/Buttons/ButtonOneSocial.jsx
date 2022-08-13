import React from "react";

function ButtonOneSocial(props){
    return (
        <a href={props.link} target="_blank" className="button-style-1 flex social" area-label={props.label}>
            {props.children}
        </a>
    );
}


export default ButtonOneSocial; 