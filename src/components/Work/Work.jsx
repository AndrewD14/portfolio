import React, {Component} from 'react';

import SelectedJob from '../SelectedJob';
import './Work.css';

class Work extends Component{
   constructor(props){
      super(props);

      this.state = {
         menuOpen: props.menuOpen || true,
         selected: null,
         jobSelected: null
      }
   }

   componentWillReceiveProps(nextProps){
      this.setState({menuOpen: nextProps.open});
   }

   selectProject = (e) => {
      this.setState({selected: e.target.value})
   }

   selectJob = (e) => {
      this.setState({jobSelected: e.target.attributes.value.value})
   }

   render(){
      return(
         <div className={this.state.menuOpen ? "main content open mx-auto" : "main content"}>
            <h1>Work Experience</h1>
            <div className="accordion">
               <div className="card-header" onClick={this.selectJob}>
                  <div className="row" value="northwestern">
                     <div className="col-1" value="northwestern">
                        <label value="northwestern">Current - January 2015</label>
                     </div>
                     <div value="northwestern">
                        <img className="accordin-logos" id="nwu-logo" value="northwestern" src={require(`../../resources/images/logos/northwestern_logo.png`)} alt="Northwestern Logo" />
                     </div>
                  </div>
               </div>
               {this.state.jobSelected === "northwestern" ?
                  <div className="card-body">
                     <SelectedJob job={this.state.jobSelected} /> 
                  </div>
               : null}
               <div className="card-header" onClick={this.selectJob}>
                  <div className="row" value="sears">
                     <div className="col-1" value="sears">
                        <label value="sears">January 2016 - November 2014</label>
                     </div>
                     <div value="sears">
                        <img className="accordin-logos hide-logos" value="sears" src={require(`../../resources/images/logos/sears_holdings_logo.png`)} alt="Sears Holdings Logo" />
                     </div>
                  </div>
               </div>
               {this.state.jobSelected === "sears" ?
                  <div className="card-body">
                     <SelectedJob job={this.state.jobSelected} /> 
                  </div>
               : null}
               <div className="card-header" onClick={this.selectJob}>
                  <div className="row" value="devryeducationalgroup">
                     <div className="col-1" value="devryeducationalgroup">
                        <label value="devryeducationalgroup">April 2014 - January 2014</label>
                     </div>
                     <div value="devryeducationalgroup">
                        <img className="accordin-logos hide-logos" id="devry-logo" value="devryeducationalgroup" src={require(`../../resources/images/logos/devry-education-group.png`)} alt="DeVry Education Group Logo" />
                     </div>
                  </div>
               </div>
               {this.state.jobSelected === "devryeducationalgroup" ?
                  <div className="card-body">
                     <SelectedJob job={this.state.jobSelected} /> 
                  </div>
               : null}
               <div className="card-header" onClick={this.selectJob}>
                  <div className="row" value="stpeter">
                     <div className="col-1" value="stpeter">
                        <label value="stpeter">January 2014 - August 2012</label>
                     </div>
                     <div value="stpeter">
                        <img className="accordin-logos hide-logos" value="stpeter" src={require(`../../resources/images/logos/stpeter-logo.png`)} alt="St. Peter Church Logo" />
                     </div>
                  </div>
               </div>
               {this.state.jobSelected === "stpeter" ?
                  <div className="card-body">
                     <SelectedJob job={this.state.jobSelected} /> 
                  </div>
               : null}
            </div>
         </div>
      );
   }
}

export default Work;