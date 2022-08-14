import React, {useState, useEffect} from "react";
import Header from "./Header";
import BackgroundImage from "./Sides/BackroundImage";
import $ from "jquery"
import SmallTitle from "./Text/SmallTitle";
import { Fade } from "react-reveal";
import MediumContainer from "./Containers/MediumContainer";
import ButtonTwo from "./Buttons/ButtonTwo";
import ButtonOneSocial from "./Buttons/ButtonOneSocial";
import FadeInTop from "./Animations/FadeInTop";
import BigTitle from "./Text/BigTitle";
import TxtOutline from "./Text/TxtOutline";
import PageSection from "./Containers/PageSection";
import WaitTimer from "./Sides/WaitTimer";

function Introduction(){
    const [isBounce, setIsBounce] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsBounce(true);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    function linkClick(event){
        event.preventDefault(); 
        $('html, body').animate({
            scrollTop: $("#skill").offset().top + 80},
            'slow');
    }

    return (
		<PageSection id="home-page">
            <BackgroundImage id="hello" />
            <MediumContainer>
				<FadeInTop delay="1s">
					<SmallTitle text="Hi there," color="green" />
				</FadeInTop>
				<FadeInTop delay="1.1s">
					<BigTitle>
						I'm Anthony Massaad, a <TxtOutline>Software Engineering Student</TxtOutline> at Carleton University. 
						Currently working as a web developer for Elections Canada
					</BigTitle>
				</FadeInTop>
                <ul className="home-ext-links">
                    <li>
						<FadeInTop delay="1.2s">
							<ButtonOneSocial link="https://github.com/Anthony-Massaad" label="Anthony Massaad Github">
								<img src={require("../images/github-square.svg").default} width="0" />
								<span>Anthony Massaad Github</span>
							</ButtonOneSocial>
						</FadeInTop>
					</li>
                    <li>
						<FadeInTop delay="1.3s">
							<ButtonOneSocial link="https://www.linkedin.com/in/anthony-massaad-782b911b6/" label="Anthony Massaad Linkedin">
								<img src={require("../images/linkedin-square.svg").default} width="0" />
								<span>Anthony Massaad Linkedin</span>
							</ButtonOneSocial>
						</FadeInTop>
					</li>
                    <li>
						<FadeInTop delay="1.4s">
							<ButtonOneSocial link="mailto:massaadanthony@hotmail.com" label="Contact me via Email">
								<img src={require("../images/at.svg").default} width="0" />
								<span>Anthony Massaad Email Address</span>
							</ButtonOneSocial>
						</FadeInTop>
					</li>
                </ul>
				<div className="aside-home-links">
					<FadeInTop delay="1.4s">
						<ButtonTwo link={require("../docs/AnthonyMassaadResume.pdf")}  text="View Resume" />
						<ButtonTwo link={require("../docs/Grades.pdf")}  text="View Grades" />
					</FadeInTop>
				</div>
                <div className={`arrow-down-container ${isBounce ? "animate-bounce" : "animate-bottom-original"}`}>
                    <a href="#skill" onClick={linkClick} className={`arrow-down transform-x-center}`} id="scroll-to-skills"><i className="arrow rotate-45deg"></i></a>
                </div>
			</MediumContainer>
		</PageSection>
    );
}

function Skill(props){
	function createListItem(text, key){
		return (<li key={key}>{text}</li>);
	}

	return (
		<div className="skill-section">
			<Fade bottom>
				<SmallTitle text={props.title} color="orange" />
			</Fade>
			<Fade bottom delay={400}>
				<ul>
					{props.items.map((item, key) => createListItem(item, key))}
				</ul>
			</Fade>
		</div>
	);
}


function Skills(){
	const programming = ["Python", "Java", "PHP", "Ejs", "C", "C++", "HTML", "CSS", "JavaScript", "SQL", "React", "XML"];
	const technology = ["Linux", "Eclipse", "Intellij", "Node.js", "Express", "Socket.io", "Visual Studio Code", "Pycharm", "PhotoShop", "Git"];
	const concepts = ["Operating Systems", "Object Oriented Programming", "Algorithms and Data Structure", "Data Modelling", "Software Design Patterns", "Data Architecture"];

    return(
		<PageSection id="skill">
			<div className="container container-medium position-relative skills-content"> 
				<Skill title="Programming" items={programming} />
				<Skill title="Tools and Technology" items={technology} />
				<Skill title="Programming Concepts" items={concepts} /> 
			</div>
			<BackgroundImage id="skills" />
		</PageSection>
    );
}

function Home(){
	const [isLoaded, setIsLoaded] = useState(false); 

	useEffect(() => {
        setTimeout(()=>{
            setIsLoaded(true);
        }, 100);
    },[]); 

	const links = [
		{
			path: "/about",
			text:  "About"
		},
		{
			path: "/project",
			text:  "Project"
		}
	];

	return (isLoaded &&
		<div>
			<Header links={links} />
			<Introduction />
			<Skills />
		</div>	
	);
}

export default Home; 