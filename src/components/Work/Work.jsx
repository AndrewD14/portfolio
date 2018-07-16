import React, {Component} from 'react';

import SelectedJob from '../SelectedJob';
import './Work.css';

class Work extends Component{
   constructor(props){
      super(props);

      this.state = {
          selected: null,
          jobSelected: null
      }
   }

   selectProject = (e) => {
      this.setState({selected: e.target.value})
   }

   selectJob = (e) => {
      this.setState({jobSelected: e.target.attributes.value.value})
   }

   render(){
      return(
         <div id="accordion">
            <div className="card-header">
               <div className="row d-flex accordin-background">
                  <div className="col-3">
                     <div className="card h-100 accordin-header-transparent" onClick={this.selectJob}>
                        <div className="card-body d-flex align-items-center justify-content-center" value="northwestern">
                           <img className="accordin-logos" id="nwu-logo" value="northwestern" src={require(`../../resources/images/logos/northwestern_logo.png`)} alt="Northwestern Logo" />
                        </div>
                        <div className="card-body d-flex align-items-end justify-content-center timeframe hide-logos" value="northwestern">January 2016 - Present</div>
                     </div>
                  </div>
                  <div className="col-3">
                     <div className="card h-100 accordin-header-transparent" onClick={this.selectJob}>
                        <div className="card-body d-flex align-items-center justify-content-center" value="sears">
                           <img className="accordin-logos hide-logos" value="sears" src={require(`../../resources/images/logos/sears_holdings_logo.png`)} alt="Sears Holdings Logo" />
                           <img className="accordin-logos hide-icons" value="sears" src={require(`../../resources/images/logos/sears6.jpg`)} alt="Sears Holdings Logo" />
                        </div>
                        <div className="card-body d-flex align-items-end justify-content-center timeframe hide-logos" value="sears">Novermber 2014 - January 2016</div>
                     </div>
                  </div>
                  <div className="col-3">
                     <div className="card h-100 accordin-header-transparent" onClick={this.selectJob}>
                        <div className="card-body d-flex align-items-center justify-content-center" value="devryeducationalgroup">
                           <img className="accordin-logos hide-logos" id="devry-logo" value="devryeducationalgroup" src={require(`../../resources/images/logos/devry-education-group.png`)} alt="Sears Holdings Logo" />
                           <img className="accordin-logos hide-icons" id="devry-logo" value="devryeducationalgroup" src={require(`../../resources/images/logos/devry-icon.png`)} alt="Sears Holdings Logo" />
                        </div>
                        <div className="card-body d-flex align-items-end justify-content-center timeframe hide-logos" value="devryeducationalgroup">January 2014 - April 2014</div>
                     </div>
                  </div>
                  <div className="col-3">
                     <div className="card h-100 accordin-header-transparent" onClick={this.selectJob}>
                        <div className="card-body d-flex align-items-center justify-content-center" value="stpeter">
                           <img className="accordin-logos hide-logos" value="stpeter" src={require(`../../resources/images/logos/stpeter-logo.png`)} alt="St. Peter Church Logo" />
                           <img className="accordin-logos hide-icons" value="stpeter" src={require(`../../resources/images/logos/st-peter-icon.png`)} alt="St. Peter Church Logo" />
                        </div>
                        <div className="card-body d-flex align-items-end justify-content-center timeframe hide-logos" value="stpeter">August 2012 - January 2014</div>
                     </div>
                  </div>
               </div>
            </div>
            <SelectedJob job={this.state.jobSelected} />
         </div>
      );
   }
}

export default Work;