import React from "react";

function SmallTitle(props){
    return (
        <p className={`small-title ${props.color}`}>{props.text}</p>
    );
}

export default SmallTitle; 