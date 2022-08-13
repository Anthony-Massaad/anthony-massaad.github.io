import React from "react";

function ButtonTwo(props){
    return (<div className="link-container"><a href={props.link} className="button-style-2" target="_blank">{props.text}</a></div>);
}

export default ButtonTwo;