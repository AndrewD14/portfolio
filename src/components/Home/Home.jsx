import React, {Component} from 'react';

//imports local components
import SkillLogo from '../SkillLogo';

class Home extends Component {
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
         <div className={this.state.open ? "main content open mx-auto" : "main content"}>
            <h1>Hello</h1>
            <div className="p-3">
               <h3 className="text-center">Ambitious software developer looking to solve everyday problems 1 line of code at a time.</h3>
               <p>Experienced Java Developer with a demonstrated history of working in the higher education industry. Skilled in Databases, Java, HTML, Linux, and Troubleshooting. Strong engineering professional with a Coding Boot Camp focused in Front-end/Full-stack Web Developer from Northwestern University.</p>
               <p>Developer that is always eager to learn new things and share his knowledge with others.</p>
            </div>
            <div className="row d-flex align-items-center px-3">
               <SkillLogo img="Oracle-db.png" label="Oracle DB"/>
               <SkillLogo img="mysql.png" label="MySQL"/>
               <SkillLogo img="256px-Postgresql_elephant.svg.png" label="PostgreSQL"/>
               <SkillLogo img="mongodb-logo.png" label="MongoDB"/>
               <SkillLogo img="java-logo.png" label="Java"/>
               <SkillLogo img="js-logo-sm.png" label="JavaScript" additionalClasses="black-background"/>
               <SkillLogo img="node_logo.svg" label="Node JS"/>
               <SkillLogo img="express.png" label="Express JS"/>
               <SkillLogo img="1280px-React-icon.svg.png" label="React"/>
               <SkillLogo img="bash-logo.png" label="Linux Bash"/>
               <SkillLogo img="new-php-logo.svg" label="PHP"/>
               <SkillLogo img="LaravelLogo.png" label="Laravel"/>
               <SkillLogo img="bootstrap-stack-490x412.png" label="Bootstrap 4"/>
               <SkillLogo img="600px-HTML5_Badge.svg.png" label="HTML 5"/>
               <SkillLogo img="logo-css3.png" label="CSS 3"/>
               <SkillLogo img="jquery.png" label="jQuery"/>
            </div>
         </div>
      );
    }
}

export default Home;