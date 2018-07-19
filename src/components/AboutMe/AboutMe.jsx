import React, {Component} from 'react';

import './AboutMe.css';

class AboutMe extends Component {
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
      return(
         <div className={this.state.open ? "main content open mx-auto clear-x-margins" : "main content clear-x-margins"}>
            <h1>About Me</h1>
            <div className="row px-2 pt-2 clear-x-margins">
               <div className="col-12">
                  <img className="float-left about-me-img" src={require(`../../resources/images/aboutme/computer-coding.jpg`)} alt="picture of definition of computer coding" />
                  <p>Andrew is an accomplished software developer. He wanted to get into programming, because he found the idea of a computer taking a bunch of 0's and 1's and turning it into what gets displayed on the screen to be fascinating.</p>
               </div>
            </div>
            <div className="row px-2 clear-x-margins">
               <div className="col-12">
                  <img className="float-right about-me-img" src={require(`../../resources/images/aboutme/eagle-scout-badge.png`)} alt="picture of definition of eagle scout badge" />
                  <p>He was very accomplished even when he was younger. He did well in school. Took part in the Math league throughout his high school years. Participated in several clubs and even help as a founding member of the gamers club. He also participated in Boy Scouts, going all the way to the rank of Eagle Scout. For his Eagle project, he designed a sign that the cook county use to display information about the area of the forest preserve. During this project, he lead a team of troop members and friends to build a prototype and install. Then he typed up the material list and instructions on how to build and install the sign. A year later, his friend had trouble finding the original due to many more have been installed. The project continues to keep on giving.</p> 
               </div>
            </div>
            <div className="row px-2 clear-x-margins">
               <div className="col-12">
                  <img className="float-right about-me-img"src={require(`../../resources/images/aboutme/graduation.jpg`)} alt="Northwestern Logo" />
                  <p>He first started to program his sophmore year of high school with Visual Basic and Java. He then expanded his knowledge of computers by taking A+ and Net+ certification courses near the end of his high school. He has built several computers and repairs them for his friends and family. His most recent build has water cooling inside.</p>
                  <p>When Andrew went off to college, he continue to focus on computers, but narrowed his attention to software development. He completed his associates at Harper College with an A gpa and moved on to DeVry where he earned his Bachelors in Computer Science. Later, while working at Northwestern, he would expand on on skills with completing the Northwestern Coding Bootcamp.</p>
               </div>
            </div>
            <div className="row px-2 clear-x-margins">
               <div className="col-12">
                  <p>In his free time, Andrew continues to research and teach himself new skills and programming languages. One day, he plans to start an online collaborate coding lesson twitch channel to help others learn how to create web applications and provide a way for other developers to join in sharing their knowledge.</p>
               </div>
            </div>
            <div className="row px-2 clear-x-margins">
               <div className="col-12">
                  <p>While Andrew is relaxing, he enjoys online video games and hanging out with his twin brother. He has volunteered with Habitat for Humanity and participated on a mission trip to New Orleans.</p>
               </div>
            </div>
            <div id="aboutme-slogan" className="row justify-content-center text-center pb-3 clear-x-margins">
               <div className="col-12">
                  <h4 className="w-100">Don't let the fire of your passion ever burn out!</h4>
                  <img id="aboutme-gif" src={require(`../../resources/images/aboutme/fire-it-crowd.webp`)} alt="Northwestern Logo" />
               </div>
            </div>
         </div>
      );
    }
}

export default AboutMe;