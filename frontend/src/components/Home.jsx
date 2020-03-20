import React from 'react'
import "../index.css";
import MainSvg from '../Assets/head.png';
import IEDC from '../Assets/logo.svg';

import { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from "react-scroll";

const Navbar = () => {

	useEffect(() => {
		let sidenav = document.querySelector('#slide-out');
		M.Sidenav.init(sidenav, {});
	}, [])

	return (
		<div className='nav'>
			<nav className="nav-wrapper transparent accent-1">
				<a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons" style={{'color':'#C33427'}}>menu</i></a>
				<div className="container">
					<ul className="right hide-on-small-and-down">
						<li><Link className='grey-text text-darken-3' activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={400}>Home</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={400}>About</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="achievements" spy={true} smooth={true} offset={-70} duration={400}>Achievements</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="gallery" spy={true} smooth={true} offset={-70} duration={400}>Gallery</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={400}>Our Team</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={400}>Contact</Link></li>
					</ul>
				</div>
			</nav>

			<ul id="slide-out" className="sidenav" style={{'background-color':'black','padding':'10vh', 'text-align':'center', 'width':'100%'}}>
				<li><Link className='grey-text' activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={400}>Home</Link></li>
				<li><Link className='grey-text' activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={400}>About</Link></li>
				<li><Link className='grey-text' activeClass="active" to="achievements" spy={true} smooth={true} offset={-70} duration={400}>Achievements</Link></li>
				<li><Link className='grey-text' activeClass="active" to="gallery" spy={true} smooth={true} offset={-70} duration={400}>Gallery</Link></li>
				<li><Link className='grey-text' activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={400}>Our Team</Link></li>
				<li><Link className='grey-text' activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={400}>Contact</Link></li>
			</ul>
		</div>
	)
}

const Home = () => {
	return (

		
		<div id=" bottom_margin">


		<section className='home section main_img' id="box_curve_bottom" style={{'background-color':'white', 'background-image': `url(${MainSvg})`}}>
		<Navbar/>

<div className="container" id="home" style={{'color':'rgb(223, 218, 218)' }}>
				<div className="row">
					<div className="col s12 m6">
						<div className="iedc_img" style={{'background-image': `url(${IEDC})`, 'height':'15vh'}}></div>
					</div>




					<div className="col s12 m5 offset-m1">
						<h4 id="center_align" className="announcement_header" style={{'color':'#C33427'}}>Announcements</h4>
						<div className="announcement-box">
						<div className="col s6 m3" id="announcements_card">
						<div className="card" id="curve_border">
							
							<div className="card-content" style={{'color':'black'}}>
								<p>> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><br/>> Eligendi eius veritatis aut quidem corporis rem ut pariatur harum quas nulla, nihil officiis voluptates tempora, libero aliquid dolorum rerum exercitationem? Repellendus? </p>
							</div>
							
						</div>z
					</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
	)
}

export default Home
