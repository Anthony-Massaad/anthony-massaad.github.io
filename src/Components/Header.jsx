import React from "react";
import { Link } from "react-router-dom";

function Header(props){
    return (
        <header className="container container-larger">
            <Link to="/" id="name" className="button-style-1 flex" area-hidden="true">A.M</Link>
            <nav>
                <ul className="flex">
                    {props.links.map((link, idx) => <li key={idx}><Link to={link.path}>{link.text}</Link></li>)}
                </ul>
            </nav>
        </header>
    );
}

export default Header; 