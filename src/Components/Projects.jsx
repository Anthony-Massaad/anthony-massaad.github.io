import React from "react";
import BackgroundImage from "./Sides/BackroundImage";
import Header from "./Header";
import SmallTitle from "./Text/SmallTitle";
import projects from "../Projects";
import { Fade } from "react-reveal";
import ButtonTwo from "./Buttons/ButtonTwo";
import LargerContainer from "./Containers/LargerContainer";
import FadeInTop from "./Animations/FadeInTop";
import MediumContainer from "./Containers/MediumContainer";
import SectionHeadline from "./Text/SectionHeadline";
import PageSection from "./Containers/PageSection";
import ContactMe from "./Sides/ContactMe";
import WaitTimer from "./Sides/WaitTimer";

function Project(props){
    return (
        <Fade bottom>
            <li className="project">
                <div className="image-container"><img src={require(`../images/${props.imgURL}`)} alt={props.name}  width="300px" /></div>
                <div className="description">
                    <h3 className="name">{props.name}</h3>
                    <h4 className="language">{props.language}</h4>
                    <ul className="lst-items">
                        {props.content.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                    <ButtonTwo link={props.githubURL} text="View Project" />
                </div>
            </li>
        </Fade>
    );
}

function Projects(){
    const links = [
		{
			path: "/",
			text:  "Home"
		},
		{
			path: "/about",
			text:  "About"
		}
	];

    return (
        <div>
            <Header links={links} />
            <PageSection id="project-section">
                <LargerContainer>
                    <MediumContainer>
                        <FadeInTop delay="1s">
                            <SmallTitle text="Presenting," color="green" />
                        </FadeInTop>
                        <FadeInTop delay="1.1s">
                            <SectionHeadline>My Favorite Projects</SectionHeadline>
                        </FadeInTop>    
                        <WaitTimer>
                            <ul className="projects-container">
                                {projects.map((project, idx) => {
                                    return <Project key={idx} name={project.name} language={project.language} content={project.content} githubURL={project.github} imgURL={project.imgUrl} />
                                })}
                            </ul>
                            <Fade bottom delay={200}>
                                <ButtonTwo link="https://github.com/Anthony-Massaad" text="Check out my Github for More!" />
                            </Fade>
                        </WaitTimer>  
                    </MediumContainer>
                    <ContactMe />
                </LargerContainer>
                <BackgroundImage id="project" />
            </PageSection>
        </div> 
    );
}

export default Projects; 