import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

//imports local components
import Nav from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Work from './components/Work';

//local css for the components
import './App.css';

class App extends Component {
   constructor(props){
      super(props);

      this.state = {
         menuOpen: true
      }
   }

   toggelMenu = () => {
      if(this.state.menuOpen){
         this.setState({menuOpen: false});
      }
      else{
         this.setState({menuOpen: true});
      }
   }

   render() {
    return (
      <Router>
         <div className="container-fluid">
            <div className="row">
               <Nav open={this.state.menuOpen} toggelMenu={this.toggelMenu}/>
               <Route exact path="/portfolio" render={() => <Home open={this.state.menuOpen}/>}/>
               <Route exact path="/portfolio/about" render={() => <AboutMe open={this.state.menuOpen}/>}/>
               <Route exact path="/portfolio/education" render={() => <Education open={this.state.menuOpen}/>}/>
               <Route exact path="/portfolio/work" render={() => <Work open={this.state.menuOpen}/>}/>
            </div>
         </div>
      </Router>
    );
  }
}

export default App;
