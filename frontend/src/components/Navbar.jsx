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
			<nav className="nav-wrapper transparent accent-1">
				<a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons grey-text text-darken-3">menu</i></a>
				<div className="container">
					<ul className="right hide-on-small-and-down">
						<li><a className='grey-text text-darken-3' href='/'>About</a></li>
						<li><a className='grey-text text-darken-3' href="/">Home</a></li>
						<li><a className='grey-text text-darken-3' href="/">Achievements</a></li>
						<li><a className='grey-text text-darken-3' href="/">Gallery</a></li>
						<li><a className='grey-text text-darken-3' href="/">Our Team</a></li>
						<li><a className='grey-text text-darken-3' href="/">Contact</a></li>
					</ul>
				</div>
			</nav>

			<ul id="slide-out" class="sidenav">
				<li><a className='grey-text text-darken-3' href='/'>About</a></li>
				<li><a className='grey-text text-darken-3' href="/">Home</a></li>
				<li><a className='grey-text text-darken-3' href="/">Achievements</a></li>
				<li><a className='grey-text text-darken-3' href="/">Gallery</a></li>
				<li><a className='grey-text text-darken-3' href="/">Our Team</a></li>
				<li><a className='grey-text text-darken-3' href="/">Contact</a></li>
			</ul>
		</div>
	)
}

export default Navbar
