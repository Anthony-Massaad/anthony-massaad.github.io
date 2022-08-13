import React, {useState, useEffect} from "react";

function WaitTimer(props){
    const [isLoaded, setIsLoaded] = useState(false); 
	useEffect(() => {
        setTimeout(()=>{
            setIsLoaded(true);
        }, 1000);
    },[]);
    
    return (<div style={isLoaded ? {"display" : "block"} : {"display" : "none"}}>{props.children}</div>)
}

export default WaitTimer; 