import React from 'react'
import "../index.css";

const About = () => {
	return (
		<section className="about section">
			<div className="container">
				<h3 className='grey-text text-darken-3 center-align' id="top_margin">About Us</h3>
				<br />
				<div className="row">
					<div className="col s12 m5">
						<h5>What is IEDC?</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eius veritatis aut quidem corporis rem ut pariatur harum quas nulla, nihil officiis voluptates tempora, libero aliquid dolorum rerum exercitationem? Repellendus?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fugiat maxime.
			</p>
						<a className="btn waves-effect grey">
							<i className="material-icons right">arrow_forward</i>
							Read More
			</a>
					</div>
					<div className="col s12 m6 offset-m1">
						<br />
						<img src={require('../Assets/about.jpeg')} alt="about" className="responsive-img" id="about_img"/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
