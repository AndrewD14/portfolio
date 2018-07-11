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
               <div className="row d-flex">
                  <div className="col-12 col-md-3">
                     <div className="card h-100" onClick={this.selectJob}>
                        <div className="card-body d-flex align-items-center justify-content-center" value="northwestern">
                           <img className="accordin-logos" value="northwestern" src={require(`../../resources/images/logos/northwestern_logo.png`)} alt="Northwestern Logo" />
                        </div>
                        <div className="card-body d-flex align-items-end justify-content-center timeframe" value="northwestern">January 2016 - Present</div>
                     </div>
                  </div>
                  <div className="col-12 col-md-3">
                     <div className="card h-100" onClick={this.selectJob}>
                        <div className="card-body d-flex align-items-center justify-content-center" value="sears">
                           <img className="accordin-logos" value="sears" src={require(`../../resources/images/logos/sears_holdings_logo.png`)} alt="Sears Holdings Logo" />
                        </div>
                        <div className="card-body d-flex align-items-end justify-content-center timeframe" value="sears">Novermber 2014 - January 2016</div>
                     </div>
                  </div>
                  <div className="col-12 col-md-3">
                     <div className="card h-100" onClick={this.selectJob}>
                        <div className="card-body d-flex align-items-center justify-content-center" value="devryeducationalgroup">
                           <img className="accordin-logos" value="devryeducationalgroup" src={require(`../../resources/images/logos/devry-education-group.png`)} alt="Sears Holdings Logo" />
                        </div>
                        <div className="card-body d-flex align-items-end justify-content-center timeframe" value="devryeducationalgroup">January 2014 - April 2014</div>
                     </div>
                  </div>
                  <div className="col-12 col-md-3">
                     <div className="card h-100" onClick={this.selectJob}>
                        <div className="card-body d-flex align-items-center justify-content-center" value="stpeter">
                           <img className="accordin-logos" value="stpeter" src={require(`../../resources/images/logos/stpeter-logo.png`)} alt="Sears Holdings Logo" />
                        </div>
                        <div className="card-body d-flex align-items-end justify-content-center timeframe" value="stpeter">August 2012 - January 2014</div>
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