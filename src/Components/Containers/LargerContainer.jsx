import React from "react";

function LargerContainer(props){
    return (<div className="container container-larger position-relative">{props.children}</div>);
}


export default LargerContainer; 