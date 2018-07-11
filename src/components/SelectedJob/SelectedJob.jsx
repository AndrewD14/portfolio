import React, {Component} from 'react';

import Project from '../Project';
import works from '../../resources/data/workData.json';

class SelectedJob extends Component{
   constructor(props){
      super(props);

      this.state = {
          jobSelected: props.job,
          selectedProject: null,
      }
   }

   componentWillReceiveProps(nextProps){
      this.setState({
         jobSelected: nextProps.job,
         selectedProject: null
      });
   }

   selectProject = (e) => {
      this.setState({selectedProject: e.target.value})
   }

   render(){
      let work = works[this.state.jobSelected];

      return(
         this.state.jobSelected !== null ?
            <div className="collapse show">
               <div className="card-body">
                  <h2>{work.role}</h2>
                  <h3>{work.company}</h3>
                  <h4>{work.timeframe}</h4>
                  <h4>{work.location}</h4>
                  <h5>{work.mainDescription}</h5>
                  {work.additionalInfo !== '' ? <div dangerouslySetInnerHTML={{ __html:work.additionalInfo}} /> : null}
                  {work.projects.length > 0 ? <h4>Projects Worked On:</h4> : null}
                  {work.projects.map((e) => 
                     <button className={e.btn_color != null? `btn ${e.btn_color}` : "btn btn-default"} onClick={this.selectProject} value={e.app.toLowerCase()}>{e.app}</button>
                  )}
                  {this.state.selectedProject ? 
                     <div className="row d-flex justify-content-center">
                        <Project project={this.state.selectedProject} />
                     </div>
                  : null}
               </div>
            </div>
         :
            null
      );
   }
}

export default SelectedJob;