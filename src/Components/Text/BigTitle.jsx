import React from "react";

function BigTitle(props){
    return (
        <p className="big-title">
            {props.children}
        </p>    
    );
}

export default BigTitle;