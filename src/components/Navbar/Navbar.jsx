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

   openMenu = () => {
      this.setState({open: true});
   }

   closeMenu = (e) => {
      e.preventDefault();
      this.setState({open: false});
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
                  <Link className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                        to="/">
                        Home
                  </Link>
                  <Link className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        to="/about">
                        About Me
                  </Link>
                  <Link className={window.location.pathname === "/work" ? "nav-link active" : "nav-link"}
                        to="/work">
                        Work Experience
                  </Link>
                  <Link className={window.location.pathname === "/education" ? "nav-link active" : "nav-link"}
                        to="/education">
                        Education
                  </Link>
                  <Link className={window.location.pathname === "/how-built" ? "nav-link active" : "nav-link"}
                        to="/how-built">
                        How Site Is Built
                  </Link>
                  <div className="main-menu-close" onClick={this.closeMenu}>Close menu</div>
               </nav>
            </div>
         </div>
      );
    }
}

export default Nav;