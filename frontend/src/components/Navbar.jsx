import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from "react-scroll";
export default class App extends Component {
	state = { hidden: false };
  
	constructor(props) {
	  super(props);
  
	  // Bind the function to this component, so it has access to this.state
	  this.handleScroll = this.handleScroll.bind(this);
	}
  
	componentWillMount() {
	  // When this component mounts, begin listening for scroll changes
	  window.addEventListener('scroll', this.handleScroll);
	}
  
	componentWillUnmount() {
	  // If this component is unmounted, stop listening
	  window.removeEventListener('scroll', this.handleScroll);
	}
  
	handleScroll(e) {
	  let lastScrollTop = 0;
	  const currentScrollTop = navbar.scrollTop;
  
	  // Set the state of hidden depending on scroll position
	  // We only change the state if it needs to be changed
	  if (!this.state.hidden && currentScrollTop > lastScrollTop) {
		this.setState({ hidden: true });
	  } else if(this.state.hidden) {
		this.setState({ hidden: false });
	  }
	  lastScrollTop = currentScrollTop;
	}
  
	render() {
	  // We pass a hidden prop to Navbar which can render className="hidden" if the prop is true
	  return (
		<Navbar hidden={this.state.hidden} />
	  );
	}
  }

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
						<li><Link className='grey-text text-darken-3' activeClass="active" to="About" spy={true} smooth={true}offset={-70}duration= {400}>About</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="home" spy={true} smooth={true}offset={-70}duration= {400}>Home</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="achievements" spy={true} smooth={true}offset={-70}duration= {400}>Achievements</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="gallery" spy={true} smooth={true}offset={-70}duration= {400}>Gallery</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="team" spy={true} smooth={true}offset={-70}duration= {400}>Our Team</Link></li>
						<li><Link className='grey-text text-darken-3' activeClass="active" to="contact" spy={true} smooth={true}offset={-70}duration= {400}>Contact</Link></li>
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
