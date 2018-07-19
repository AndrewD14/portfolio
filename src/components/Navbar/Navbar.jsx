import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Name from '../Name';

import './Navbar.css';
import './hamburgers.css';

class Nav extends Component {
   constructor(props){
      super(props);

      this.state = {
          open: props.open,
          toggelMenu: props.toggelMenu
      }
   }

   componentWillReceiveProps(nextProps){
      this.setState({open: nextProps.open});
   }

   render(){
      return (
         <aside className={this.state.open ? "open sticky" : "sticky"}>
            <div className="h-100">
               <div className={this.state.open ? "main-menu open float-left" : "main-menu float-left"}>
                  <div className="row pt-3 pt-md-5 justify-content-center">
                     <img id="main-img" src={require('../../resources/images/profile/0.jpg')} alt="headshot of Andrew Damico" />
                  </div>
                  <Name />
                  <div className="row">
                     <div className={this.state.open ? "hamburger hamburger--spin is-active" : "hamburger hamburger--spin"} onClick={this.state.toggelMenu}>
                        <i className="fa fa-bars"></i>
                        <div className="hamburger-box">
                           <div className="hamburger-inner"></div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <nav className="nav flex-column main-menu-nav">
                           <Link className={window.location.pathname === "/portfolio/" ? "nav-link active" : "nav-link"}
                                 to="/portfolio">
                                 Home
                           </Link>
                           <Link className={window.location.pathname === "/portfolio/about" ? "nav-link active" : "nav-link"}
                                 to="/portfolio/about">
                                 About Me
                           </Link>
                           <Link className={window.location.pathname === "/portfolio/work" ? "nav-link active" : "nav-link"}
                                 to="/portfolio/work">
                                 Work Experience
                           </Link>
                           <Link className={window.location.pathname === "/portfolio/education" ? "nav-link active" : "nav-link"}
                                 to="/portfolio/education">
                                 Education
                           </Link>
                           <Link className={window.location.pathname === "/portfolio/how-built" ? "nav-link active" : "nav-link"}
                                 to="/portfolio/how-built">
                                 How Site Is Built
                           </Link>
                        </nav>
                     </div>
                  </div>
               </div>
               <div id="menu-action" className={this.state.open ? "row d-flex justify-content-center align-items-center h-100 hide-desktop-menu open" : "row d-flex justify-content-center align-items-center h-100 hide-desktop-menu"}
                  onClick={this.state.toggelMenu}>
                  <div>{this.state.open ? <i class="arrow left"/> : <i class="arrow right"/>}</div>
               </div>
            </div>
         </aside>
      );
    }
}

export default Nav;