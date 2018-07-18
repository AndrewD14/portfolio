import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';

// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Education.css';

import projects from '../../resources/data/workProjectData.json';

class Education extends Component{
   constructor(props){
      super(props);

      this.state = {
         open: props.open,
         toggelMenu: props.toggelMenu,
         showProject: false,
         selectedProject: "jambids"
      }
   }

   componentWillReceiveProps(nextProps){
      this.setState({open: nextProps.open});
   }

   toggleShow = (e) => {
      if(this.state.showProject){
         this.setState({showProject: false})
      }
      else{
         this.setState({showProject: true})
      }
   }

   render(){
      let project = projects[this.state.selectedProject];

      return(
         <div className={this.state.open ? "main content open mx-auto" : "main content"}>
            <h1>Education</h1>
            <div className="row text-center align-items-cetner">
               <div className="col-12 col-md-4 flex-2">
                  <h5>March 2018</h5>
               </div>
               <div className="col-12 col-md-4 flex-1">
                  <img src={require(`../../resources/images/logos/nwcb-logo-horizontal.svg`)} alt="Northwestern Coding Boot Camp logo" />
               </div>
               <div className="col-12 col-md-4 flex-3">
                  <h5>Evanston, IL</h5>
               </div>
            </div>
            <div>
               <h4>Trilogy Coding Bootcamp - Full-stack Web Developer</h4>
               <p>An intensive 28-week long boot camp designed to teach all levels of experience programmers on the skills needed to be able to create full-stack web applications. Skills learned consist of HTML5, CSS3, JavaScript, jQuery, Handlebars JS, Express server, MySQL, MongoDB, Firebase, and React JS.</p>
               <h5>Final Application Built</h5>
               <div id="accordion">
                  <div className="card-header">
                     <div className="row d-flex">
                        <div className="col-12 col-md-3">
                           <div className="card h-100" onClick={this.toggleShow}>
                              <img src={require(`../../resources/images/projects/jamBids/logo.png`)} alt="JAM Bids logo" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={this.state.showProject ? "collapse show" : "collapse"}>
                     <div className="card-body">
                        <div className="row d-flex justify-content-center">
                           <Carousel className="carousel-size" infiniteLoop={true} autoPlay={true} emulateTouch={true}>
                              {project.images.map((e) => 
                                 <div>
                                    <img src={require(`../../resources/images/projects/${e.path}`)} alt={e.alt}/>
                                    <p className="legend">{e.legend}</p>
                                 </div>
                              )}
                           </Carousel>
                        </div>
                        <div className="row">
                           <p>A modern designed real-time application where users can sign up and place bids or put items up for auction. The application uses web sockets through React JS and Express while being responsive for an enjoyable experience for both desktop and mobile.</p>
                           <p>Lead devloper of a team of 3.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <hr />
            <div className="row text-center align-items-center">
               <div className="col-12 col-md-4 flex-2">
                  <h5>October 2014</h5>
               </div>
               <div className="col-12 col-md-4 flex-1">
               <img src={require(`../../resources/images/logos/devry.png`)} alt="DeVry University logo" />
               </div>
               <div className="col-12 col-md-4 flex-3">
                  <h5>Addison, IL</h5>
               </div>
            </div>
            <div>
               <p>Bachelor of Science in Computer Information Systems - Database Management</p>
               <h5>GPA: 3.89/4.0</h5>
               <h5>Dean's List</h5>
               <ul>
                  <li>Fall 2014 semester</li>
                  <li>Spring 2014 semester</li>
                  <li>Winter 2013 semester</li>
                  <li>Summer 2013 semester</li>
                  <li>Spring 2013 semester</li>
                  <li>Fall 2012 semester</li>
               </ul>
            </div>
         </div>
      );
   }
}

export default Education;