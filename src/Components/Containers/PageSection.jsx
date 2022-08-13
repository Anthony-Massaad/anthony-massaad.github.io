import React from "react";

function PageSection(props){
    return (
        <section id={props.id}>
            {props.children}
        </section>
    );
}

export default PageSection; 