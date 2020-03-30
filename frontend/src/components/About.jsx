import React from 'react'
import "../index.css";

const About = () => {
	return (
		<section className="about section" id="About">
			<div className="container">
				<h3 className='text-darken-3 center-align' id="top_margin">About Us</h3>
				<br />
				<div className="row">
					<div className="col s12 m5">
						<h5>What is IEDC?</h5>
						<p style={{'color':'black'}}>The concept of Innovation and Entrepreneurship Development Cell (IEDC) was formulated to promote innovation and entrepreneurial culture in educational institutions and to develop institutional mechanism to foster techno-entrepreneurship for generation of wealth and employment by persons. The IEDCs are established in academic institutions across Kerala having requisite expertise and infrastructure.
<br/><br/>
Kerala Startup Mission has taken this initiative of the Govt of Kerala to the academic institutions in order to create awareness, exposure and skills among the students and to enable and promote an environment to create entrepreneurial ventures by developing innovative products of social relevance.
			</p>
						<a className="btn waves-effect " style={{'background-color':'#C33427'}}>
							<i className="material-icons right">arrow_forward</i>
							Read More
			</a>
					</div>
					<div className="col s12 m6 offset-m1">
						<br />
						<img src={require('../Assets/about.png')} alt="about" className="responsive-img" id="about_img"/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
