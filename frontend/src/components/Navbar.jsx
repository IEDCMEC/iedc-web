import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
const Navbar = () => {

	useEffect(() => {
		let sidenav = document.querySelector('#slide-out');
		M.Sidenav.init(sidenav, {});

	}, [])

	return (
		<div className='Navbar '>
			<nav className="nav-wrapper blue accent-1 ">

				<a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
				<div className="container">
					<ul className="right hide-on-small-and-down">
						<li><a className='black-text' href='/'>About</a></li>
						<li><a className='black-text' href="/">Home</a></li>
						<li><a className='black-text' href="/">Achievements</a></li>
						<li><a className='black-text' href="/">Gallery</a></li>
						<li><a className='black-text' href="/">Our Team</a></li>
						<li><a className='black-text' href="/">Contact</a></li>
					</ul>
				</div>
			</nav>

			<ul id="slide-out" class="sidenav">
				<li><a className='black-text' href='/'>About</a></li>
				<li><a className='black-text' href="/">Home</a></li>
				<li><a className='black-text' href="/">Achievements</a></li>
				<li><a className='black-text' href="/">Gallery</a></li>
				<li><a className='black-text' href="/">Our Team</a></li>
				<li><a className='black-text' href="/">Contact</a></li>
			</ul>
		</div>
	)
}

export default Navbar
