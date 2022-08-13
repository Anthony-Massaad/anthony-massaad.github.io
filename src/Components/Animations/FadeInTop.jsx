import React from "react";

function FadeInTop(props){
    return (
        <div className="fade-in-initials" style={{"animationDelay" : props.delay}}>
            {props.children}
        </div>
    )
}

export default FadeInTop;