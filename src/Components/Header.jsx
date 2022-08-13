import React from "react";
import { NavLink } from "react-router-dom";

function Header(props){
    return (
        <header className="container container-larger">
            <NavLink to="/" id="name" className="button-style-1 flex" area-hidden="true">A.M</NavLink>
            <nav>
                <ul className="flex">
                    {props.links.map((link, idx) => <li key={idx}><NavLink to={link.path}>{link.text}</NavLink></li>)}
                </ul>
            </nav>
        </header>
    );
}

export default Header; 