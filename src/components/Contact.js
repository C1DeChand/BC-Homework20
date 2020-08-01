import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
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
                                <Link className="nav-link active" to="/BC-Homework20/contact" style={{color: "White", fontWeight: 600}}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/BC-Homework20/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/BC-Homework20/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card" id="back-card-contact">
                    <div className="card-body">
                        <h1 className="card-title" id="header1">Contact Me</h1>
                        <hr/>
                        <h4>Email: <p>C1DeChand@gmail.com</p></h4>
                        <h4>Phone: <p>(206)-799-1256</p></h4>
                        <hr/>
                        <p><strong>Please Note: </strong>Do not be offended if I don't pick up the phone for a number I do not recongnize.
                            Feel free to leave a detailed message and I will get back to you.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row fixed-bottom">
            <div className="col-12">
                <hr id="hr-bar"/>
                <nav className="navbar navbar-dark bg-dark" id="copyrightBar">
                    <span className="navbar-text mx-auto" id="copyrightText">© Copyright 2020 Cameron DeChand</span>
                </nav>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
