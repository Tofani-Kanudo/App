import React from 'react'
import { Component } from 'react';
import './companyProjects.css'
import {Link} from 'react-router-dom';
import ProjectDescription from '../ProjectDescription/projectDescription';

class CompanyProjects extends Component
{
    state={
        projects:[
            {
                title:'Webpage as podcast',
                image:  require('../templates/Untitled-1 4.png'),
                description:""          
            },
            {
                title:'Break the fake',
                image:
                require('../templates/Untitled-1 2.png'),            
                description:"Fake news has become a problem that internet companies and governments are equally concerned about. Present new ways to preserve the trustworthiness of online"
            },
            {
                title:'Redefine the consumer experience',
                image:require('../templates/E-commerce 2 FV 1.png'),
                description:"According to a research, 73% of all people point to customer experience as an important factor in the purchasing decisions. How would you"   
            },
            {
                title: "Information you'd wish to visualise",
                image:require('../templates/Untitled-2 1.png'),
                description:"Data plays an important role in today's society, and over 80% of it's a location connection. While there is an enormous amount of public data"
            },
            { 
                title:"Social media analytics platform",
                image:require('../templates/Untitled-9 1.png')
                ,
                description:""
            },
            {
                title: "Platform connecting shippers and carriers",
                image:require('../templates/Untitled-5 1.png'),
                description:""
            },
            {
                title:"Omni-channel retailers delivery platform",
                image:require('../templates/Untitled-8 1.png'),
                description:""
            },
            {
                title: "Livestreaming communication platform",
                image:require('../templates/Untitled-7 1.png'),
                description:""
            },
            {   
                title:"Automated Analytics platform for marketers",
                image:require('../templates/Untitled-6 1.png'),
                description:""
        }
    ]
    }
    render()
    {
        const {projects}= this.state
        return(
            <div className="company-container">
            <div className="projects-container">
               {projects.map((project,i)=>{
                   return( 
                        <div key={i} className="project"> 
                            <Link style={{textDecoration:'none'}} className="text-link" to={"/project/"+i}>
                                <div className="project-row">
                                    <div className="projectImage" ><img className="image" src={project.image} alt="project logo"></img></div>
                                    <div className="projectTitle">{project.title}</div>
                                </div>
                            </Link>
                        </div>
                   )
               })}
            </div>
            <br/>
                <div><button className="showMoreProject">SHOW MORE PROJECTS</button></div>
                <svg className="decoration" width="527" height="545" viewBox="0 0 527 545" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                    <ellipse cx="255.243" cy="320.064" rx="163.176" ry="162.373" transform="rotate(121.519 255.243 320.064)" fill="#FFDD83"/>
                    <ellipse cx="255.663" cy="319.379" rx="115.751" ry="114.143" transform="rotate(121.519 255.663 319.379)" fill="white"/>
                    <ellipse cx="295.175" cy="125.791" rx="66.7174" ry="65.9136" transform="rotate(121.519 295.175 125.791)" fill="#4F51C0"/>
                    <ellipse cx="95.7499" cy="261.858" rx="34.5645" ry="32.9568" transform="rotate(121.519 95.7499 261.858)" fill="#FF91A5"/>
                    </g>
                </svg>
            </div>
        )
    }
}

export default CompanyProjects