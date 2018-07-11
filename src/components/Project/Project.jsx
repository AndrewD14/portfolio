import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import {Carousel} from 'react-responsive-carousel';

// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Project.css';
import projects from '../../resources/data/workProjectData.json';

class Project extends Component{
   constructor(props){
      super(props);

      this.state = {
          project: props.project
      }
   }

   componentWillReceiveProps(nextProps){
      this.setState({project: nextProps.project});
   }

   render(){
      let project = projects[this.state.project];

      return(
         [<div className="row text-center">
            <h3>{project.title}</h3>
         </div>,
         <div className="row justify-content-center">
            <Carousel className="carousel-size" infiniteLoop={true} autoPlay={true} emulateTouch={true}>
               {project.images.map((e) => 
                  <div>
                     <img src={require(`../../resources/images/projects/${e.path}`)} alt={e.alt}/>
                     <p className="legend">{e.legend}</p>
                  </div>
               )}
            </Carousel>
         </div>,
         <div dangerouslySetInnerHTML={{ __html:project.description}} />]
      );
   }
}

export default Project;