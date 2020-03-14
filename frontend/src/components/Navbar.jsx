import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from "react-scroll";
import "../css/fixed.css";
import Scroll from 'react-scroll'
const Navbar = () => {

	useEffect(() => {
		let sidenav = document.querySelector('#slide-out');
		M.Sidenav.init(sidenav, {});

	}, [])

	return (
		<div className='nav'>
			<nav className="nav-wrapper transparent accent-1">
				<a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons grey-text text-darken-3">menu</i></a>
				<div className="container">
					<ul className="right hide-on-small-and-down">
						<li><Link className='grey-text text-darken-3' activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={400}>About</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={400}>Home</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="achievements" spy={true} smooth={true} offset={-70} duration={400}>Achievements</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="gallery" spy={true} smooth={true} offset={-70} duration={400}>Gallery</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={400}>Our Team</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={400}>Contact</Link></li>
					</ul>
				</div>
			</nav>

			<ul id="slide-out" className="sidenav">
				<li><Link className='grey-text text-darken-3' activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={400}>About</Link></li>
				<li><Link className='grey-text text-darken-3' activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={400}>Home</Link></li>
				<li><Link className='grey-text text-darken-3' activeClass="active" to="achievements" spy={true} smooth={true} offset={-70} duration={400}>Achievements</Link></li>
				<li><Link className='grey-text text-darken-3' activeClass="active" to="gallery" spy={true} smooth={true} offset={-70} duration={400}>Gallery</Link></li>
				<li><Link className='grey-text text-darken-3' activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={400}>Our Team</Link></li>
				<li><Link className='grey-text text-darken-3' activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={400}>Contact</Link></li>
			</ul>
		</div>
	)
}

export default Navbar
