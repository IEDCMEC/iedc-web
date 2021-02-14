import React, { Component } from "react";
import './Projects.styles.css'
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

<div>
  <div class="row">
    <div class="col s12 cards-container">
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>

           <p>This card has some extra info, which will make it taller. This is OK because we're using CSS columns!!!</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
           <p>This card has some extra info, which will make it taller. This is OK because we're using CSS columns!!!</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
           <p>This card has some extra info, which will make it taller. This is OK because we're using CSS columns!!!</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
           <p>This card has some extra info, which will make it taller. This is OK because we're using CSS columns!!!</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
           <span class="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
         </div>
         <div class="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
        </div>
    </div>
  </div>
</div>
            {/* <div className="row" >
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
            </div> */}
         </div>
      )
   }
}

export default CaseStudy;
