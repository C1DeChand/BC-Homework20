import React from "react";
import { Link } from "react-router-dom";
import projectOne from "../images/projectOne.png"
import projectTwo from "../images/projectTwo.png"
import homework03 from "../images/Homework03.png"
import homework05 from "../images/Homework05.png"
import homework06 from "../images/Homework06.png"
import homework13 from "../images/homework13.png"

function Portfolio() {
  return (
      <div className="container-fluid">
        <div className="row fixed-top">
            <div className="col-12 bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1" id="name">Cameron DeChand</span>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>    
                    <div className="collapse navbar-collapse" id="navLinks">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/portfolio" style={{color: "White", fontWeight: 600}}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card" id="back-card-port">
                    <div className="card-body">
                        <h1 className="card-title" id="header1">My Portfolio</h1>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">
                                <figure className="figure">
                                    <a href="https://julieritz.github.io/Project-One/"><img src={projectOne} className="card-img border border-dark portImg" id="portImg1" alt="First collaborative project, date night helper." style={{width: "350px", height: "350px"}}></img></a>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure className="figure">
                                    <figcaption className="figure-caption figureCap" id="figureCap1"><strong>DATE NIGHT HELPER</strong><br></br>An Application that takes yes or no questions and generates recipe and cocktail suggestions based off the answers. Specifically designed for those who have been quarantined during the COVID-19 pandemic. It was created in collaboration with <a href="https://github.com/julieritz">Julie Ritz</a> and <a href="https://github.com/djnatronic">Nathan Bowdish</a>.</figcaption>
                                    <figcaption className="figure-caption figureCap" id="figureCap1">Click the picture to see the project itself. Or click <a href="https://github.com/julieritz/Project-One">here</a> to see the GitHub repository.</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <figure className="figure">
                                    <a href="https://calm-wildwood-88089.herokuapp.com/"><img src={projectTwo} className="card-img border border-dark portImg" id="portImg1" alt="Second collaborative project, Sentiment Checlk." style={{width: "350px", height: "350px"}}></img></a>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure className="figure">
                                    <figcaption className="figure-caption figureCap" id="figureCap1"><strong>SENTIMENT CHECK</strong><br></br>A message board for small projects/companies who need a place to put out anything meant for anyone/everyone. This also integrates sentiment analysis so you can see the emotional content behind the message, not just base text. This was made in collaboration with <a href="https://github.com/sabahsyed">Sabah Syed</a>, <a href="https://github.com/bremnerdc">Dylan Bremner</a> and <a href="https://github.com/Andorask">Andrew Padgett</a>.</figcaption>
                                    <figcaption className="figure-caption figureCap" id="figureCap1">Click the picture to see the project itself. Or click <a href="https://github.com/sabahsyed/sentimentCheck">here</a> to see the GitHub repository.</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <figure className="figure">
                                    <a href="https://c1dechand.github.io/BC-Homerwork05/"><img src={homework05} className="card-img border border-dark portImg" id="portImg2" alt="Homework five, day planner." style={{width: "350px", height: "350px"}}></img></a>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure className="figure">
                                    <figcaption className="figure-caption figureCap" id="figureCap2"><strong>DAY SCHEDULER</strong><br></br>This is an hourly reminder tool. It only works for the current day but all reminders will carry over to the next if they are saved. The background color of the reminder slots will change to indicate what the current time is.</figcaption>
                                    <figcaption className="figure-caption figureCap" id="figureCap1">Click the picture to see the project itself. Or click <a href="https://github.com/C1DeChand/BC-Homerwork05">here</a> to see the GitHub repository.</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <figure className="figure">
                                    <a href="https://c1dechand.github.io/BC-Homework06/"><img src={homework06} className="card-img border border-dark portImg" id="portImg3" alt="Homework six, weather application." style={{width: "350px", height: "350px"}}></img></a>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure className="figure">
                                    <figcaption className="figure-caption figureCap" id="figureCap3"><strong>WEATHER API APPLICATION</strong><br></br>A simple application that uses the OpenWeatherMap API to collect data and display it. It allows you to search for any city, assuming it is monitered by the API, to find out the current weather. It also shows the upcoming 5 day forcast for that city.</figcaption>
                                    <figcaption className="figure-caption figureCap" id="figureCap1">Click the picture to see the project itself. Or click <a href="https://github.com/C1DeChand/BC-Homework06">here</a> to see the GitHub repository.</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <figure className="figure">
                                    <a href="https://c1dechand.github.io/BC-Homework03/"><img src={homework03} className="card-img border border-dark portImg" id="portImg4" alt="Homework three, random password generator." style={{width: "350px", height: "350px"}}></img></a>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure className="figure">
                                    <figcaption className="figure-caption figureCap" id="figureCap4"><strong>RANDOM PASSWORD GENERATOR</strong><br></br>A concise random password generator application. It asks you a series of questions to determine your needs, then generates a string of characters based on your answers.</figcaption>
                                    <figcaption className="figure-caption figureCap" id="figureCap1">Click the picture to see the project itself. Or click <a href="https://github.com/C1DeChand/BC-Homework03">here</a> to see the GitHub repository.</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <figure className="figure">
                                    <a href="https://shrouded-caverns-38372.herokuapp.com/"><img src={homework13} className="card-img border border-dark portImg" id="portImg4" alt="Homework thirteen, express handlebars demo." style={{width: "350px", height: "350px"}}></img></a>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure className="figure">
                                    <figcaption className="figure-caption figureCap" id="figureCap4"><strong>EXPRESS HANDLEBARS DEMO</strong><br></br>An annoyingly complex demo of Express Handlebars functionality.</figcaption>
                                    <figcaption className="figure-caption figureCap" id="figureCap1">Click the picture to see the project itself. Or click <a href="https://github.com/C1DeChand/BC-Homework13">here</a> to see the GitHub repository.</figcaption>
                                </figure>
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

  );
}

export default Portfolio;
