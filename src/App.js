import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/BC-Homework20/" component={About} />
        <Route path="/BC-Homework20/about" component={About} />
        <Route path="/BC-Homework20/portfolio" component={Portfolio} />
        <Route path="/BC-Homework20/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
