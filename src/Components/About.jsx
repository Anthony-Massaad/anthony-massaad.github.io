import React from "react";
import Header from "./Header";
import BackgroundImage from "./Sides/BackroundImage";
import SmallTitle from "./Text/SmallTitle"
import experiences from "../Experiences";
import { Fade } from "react-reveal";
import MediumContainer from "./Containers/MediumContainer";
import LargerContainer from "./Containers/LargerContainer";
import TxtOutline from "./Text/TxtOutline";
import FadeInTop from "./Animations/FadeInTop";
import MediumText from "./Text/MediumText";
import PageSection from "./Containers/PageSection";
import ContactMe from "./Sides/ContactMe";
import WaitTimer from "./Sides/WaitTimer";

function Experience(props){
	console.log(props.date.length);
    return (
		<Fade bottom>
			<div className="experience">
				<div className="timeline-icon flex"><img src={require("../images/locationIcon.png")} /></div>
				<div className="info">
					{props.date.map((item, idx) => <div style={idx != 0 ? {"top": `calc(16px * ${idx + 1}`, "marginTop": "0.5rem"} : {"top": `calc(16px * ${idx + 1}`}} className="date" key={idx}>{item}</div>)}
					<div className={props.date.length > 1 ? "content extra-margin" : "content"} style={props.date.length > 1 ? {"--extra-margin": `${props.date.length}`} : null}>
						<p className="title">{props.name}</p>
						<p className="role">{props.role}</p>
						<ul className="lst-items">
							{props.content.map((item, idx) => <li key={idx}>{item}</li>)}
						</ul>
					</div>
				</div>
			</div>
		</Fade>
    );
}


function Experiences(){
    return (
		<div className="experience-section">
			<Fade bottom><SmallTitle color="green" text="Experience" /></Fade>
			<div className="experience-container">
				{experiences.map((experience, idx) => <Experience key={idx} date={experience.date} name={experience.name} role={experience.role} content={experience.content} />)}
			</div>
		</div>
        
    );
}

function About(){
    const links = [
		{
			path: "/",
			text:  "Home"
		},
		{
			path: "/project",
			text:  "Project"
		}
	];
    return (
        <div>
			<Header links={links} />
			<PageSection id="about-me">
				<LargerContainer>
					<MediumContainer>
						<div className="bio-container">
							<div className="me">
								<FadeInTop delay="1s">
									<img src={require("../images/tony.jpg")} width="30%" />
									<p><TxtOutline>About Me!</TxtOutline></p>
								</FadeInTop>
							</div>
							<div className="bio">
								<FadeInTop delay="1.3s">
									<SmallTitle text="Hello," color="green" />
								</FadeInTop>
								<FadeInTop delay="1.4s">
									<MediumText>
										I am a third-year software engineering student at Carleton University. I am passionate about collaborating with other ambitious people and using 
										software development to solve complex problems that bring value to others. I have experience in a variety of programming languages, 
										including web development, Python, Java, and C. I am continuously learning and always looking for ways to improve my overall skills. 
										Take a look at my <a href="https://github.com/Anthony-Massaad" target="_blank" className="standard-link">Github</a> to see some of the projects I have built!
									</MediumText>
								</FadeInTop>
							</div>
						</div>
						<WaitTimer>
							<Experiences />
						</WaitTimer>
					</MediumContainer>
					<ContactMe />
				</LargerContainer>
				<BackgroundImage id="about" />
			</PageSection>
		</div>
    );
}

export default About; 