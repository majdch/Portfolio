import React from 'react';
import './index.scss';
import Title from "../common/Title";

const About = () => {
    return (
        <div className="page" id="about">
            <Title>
                About Me
            </Title>
            <div className="row">
                <div className="column">
                    <strong>
                        Hi, I am MAJD CHAGROUFI
                    </strong>
                    <p>
                        Self-taught, self-driven, passionate learner and developer focusing on FULLSTACK technologies. Looking forward to working with ingenious teams on challenging projects.
                        <br/> <br/>
                        I’m an easy going person that works well with everyone. I enjoy being around different types of people and I like to always challenge myself to improve at everything I do.
                        <br/><br/>
                       I have a good understanding of the concepts of security and ethical hacking
                    </p>
                </div>
            </div>
            <Title>
               Certificates
            </Title>
            <div className="row">
                <div className="column">
                
                    <p>
                    <big>• Full Stack Web and Multiplatform Mobile App Development Specialization:</big><br/>
	                        - Front-End Web UI Frameworks and Tools: Bootstrap 4<br/>
	                        - Front-End JavaScript Frameworks: Angular<br/>
	                        - Multiplatform Mobile App Development with Web Technologies: Ionic and Cordova<br/>
	                        - Multiplatform Mobile App Development with Native Script<br/>
	                        - Server-side Development with NodeJS, Express and MongoDB<br/>
 <br/>
                    <big>• AWS Fundamentals specialization</big><br/>
                    <big>• IBM Cloud Application Developer 2019 - Explorer Award</big> <br/>
                    <big>• Install and Manage Google Cloud's Apigee API Platform Specialization</big><br/>
 <br/>
                    <big>• HCIA SECURITY</big> <br/>
                    <big>• HCIA Routing & switching</big> <br/>
                   
	                       
 <br/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
