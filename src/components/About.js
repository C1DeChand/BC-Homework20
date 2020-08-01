import React from "react";
import { Link } from "react-router-dom";
import aboutPic from "../images/AboutPic.jpg"

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <div className="container-fluid">
        <div className="row fixed-top">
            <div className="col-12 bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1" id="name">Cameron DeChand</span>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>    
                    <div className="collapse navbar-collapse ml-auto" id="navLinks">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/BC-Homework20/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/BC-Homework20/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/BC-Homework20/about" style={{color: "white", fontWeight: 600}}>About</Link>-+
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card" id="back-card-index">
                    <div className="card-body">
                        <h1 className="card-title" id="header1">About Me</h1>
                        <hr></hr>
                        <div className="row">
                            <div className="col-12">
                                <img src={aboutPic} className="card-img float-left" alt="Cameron DeChand." style={{width: "15rem", marginRight: "1rem"}}/>
                                <p className="card-text" id="cardText">
                                    My name is Cameron DeChand. I grew up in Seattle, WA and have lived here all my life. 
                                    I'm currently an employee of Fred Meyers as a Customer Enguagement Specialist within the Asset Protection Department. 
                                    I'm also taking the University of Washington Coding Bootcamp to increase my universally applicable skills. 
                                    I hope this will increase my career oppertunities in the future, either with my current employer or with someone else.
                                    <br></br>
                                    <br></br>
                                    Feel free to click the links below to view some of my work, or check out my portfolio page.
                                    <br></br>
                                </p>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-4 text-center">
                                        <a className="btn btn-dark btn-lg" href="https://www.linkedin.com/in/C1DeChand/">LinkedIn</a>
                                    </div>
                                    <div className="col-4 text-center">
                                        <a className="btn btn-dark btn-lg" href="./assets/Cameron DeChand Resume.pdf">Resume</a>
                                    </div>
                                    <div className="col-4 text-center">
                                        <a className="btn btn-dark btn-lg" href="https://github.com/C1DeChand">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row fixed-bottom">
            <div className="col-12">
                <hr id="hr-bar"></hr>
                <nav className="navbar navbar-dark bg-dark" id="copyrightBar">
                    <span className="navbar-text mx-auto" id="copyrightText">© Copyright 2020 Cameron DeChand</span>
                </nav>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;
