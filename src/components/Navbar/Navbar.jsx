import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Navbar.css';
import './hamburgers.css';

class Nav extends Component {
   constructor(props){
      super(props);

      this.state = {
          open: false
      }
   }

   toggelMenu = () => {
      if(this.state.open){
         this.setState({open: false});
      }
      else{
         this.setState({open: true});
      }
   }

   render(){
      return (
         <div className={this.state.open ? "main-menu open" : "main-menu"} ref="mainMenu">
            <div className="main-menu-form d-flex justify-content-end">
               <div className="main-menu-btn" onClick={this.toggelMenu}><i className="fa fa-bars"></i></div>
               <div className={this.state.open ? "hamburger hamburger--spin is-active" : "hamburger hamburger--spin"} onClick={this.toggelMenu}>
                  <i className="fa fa-bars"></i>
                  <div className="hamburger-box">
                     <div className="hamburger-inner"></div>
                  </div>
               </div>
            </div>
            <div className={this.state.open ? "main-menu-content open" : "main-menu-content"}>
               <nav className="nav flex-column main-menu-nav">
                  <Link className={window.location.pathname === "/portfolio/" ? "nav-link active" : "nav-link"}
                        to="/portfolio"
                        onClick={this.toggelMenu}>
                        Home
                  </Link>
                  <Link className={window.location.pathname === "/portfolio/about" ? "nav-link active" : "nav-link"}
                        to="/portfolio/about"
                        onClick={this.toggelMenu}>
                        About Me
                  </Link>
                  <Link className={window.location.pathname === "/portfolio/work" ? "nav-link active" : "nav-link"}
                        to="/portfolio/work"
                        onClick={this.toggelMenu}>
                        Work Experience
                  </Link>
                  <Link className={window.location.pathname === "/portfolio/education" ? "nav-link active" : "nav-link"}
                        to="/portfolio/education"
                        onClick={this.toggelMenu}>
                        Education
                  </Link>
                  <Link className={window.location.pathname === "/portfolio/how-built" ? "nav-link active" : "nav-link"}
                        to="/portfolio/how-built"
                        onClick={this.toggelMenu}>
                        How Site Is Built
                  </Link>
                  <div className="main-menu-close" onClick={this.toggelMenu}>Close menu</div>
               </nav>
            </div>
         </div>
      );
    }
}

export default Nav;