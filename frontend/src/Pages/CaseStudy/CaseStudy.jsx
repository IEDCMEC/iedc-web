import React, { Component } from "react";
import './CaseStudy.styles.css'
import Card from './Card'

class CaseStudy extends Component {
   constructor() {
      super();
      this.state = {
         case_studies: []
      }
   }

   componentDidMount() {
      fetch('https://raw.githubusercontent.com/IEDCMEC/data/master/case_study.json')
         .then(response => response.json())
         .then(data => this.setState({ case_studies: data }));
   }

   render() {
      return (
         <div>
            <div className="row" >
               {
                  this.state.case_studies.map(case_study => {
                     return(
                        <Card image={"https://raw.githubusercontent.com/IEDCMEC/data/master/" + case_study.url}
                           title={case_study.name}
                           link={case_study.link}
                           />
                     )
                  })
               }
            </div>
         </div>
      )
   }
}

export default CaseStudy;
