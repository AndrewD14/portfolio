import React, {Component} from 'react';

import './SkillLogo.css';

class SkillLogo extends Component {
   constructor(props){
      super(props);

      this.state = {
          img: props.img,
          label: props.label,
          extraImageClasses: props.additionalClasses
      }
   }

    render(){
        return(
         <div className="col-6 col-md-3 col-lg-1">
            <div className="rowjustify-content-center ">
               <div className="col-12 d-flex justify-content-center">
                  <img className={`logo-skills ${this.state.extraImageClasses}`} src={require(`../../resources/images/logos/${this.state.img}`)} alt={`${this.state.label} logo`} />
               </div>
               <div className="col-12 d-flex justify-content-center">{this.state.label}</div>
            </div>
         </div>
        );
    }
}

export default SkillLogo;