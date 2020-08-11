import React, { useEffect } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "../index.css";

import { HashLink as HLink } from 'react-router-hash-link';

const Navbar = () => {
   useEffect(() => {
      const sidenav = document.querySelector("#mobile-nav");
      M.Sidenav.init(sidenav, {});
   }, [])

   const links = [
      { id: 1, Name: 'Home', to: '/#home' },
      { id: 2, Name: 'About', to: '/#about' },
      { id: 3, Name: 'Contact', to: '/#contact' },
      { id: 4, Name: 'Case Study', to: '/case-study' },
      { id: 4, Name: 'Team', to: '/team' },
   ]

   return (
      <div className="navbar">
         <div className="navbar-fixed">
            <nav className="nav-wrapper accent-1 nav_img">
               <div className="container">
                  <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                     <i className="material-icons" style={{ color: "#C33427" }}>menu</i>
                  </a>
                  <div className="hide-on-large-only black-text" style={{
                     position: 'relative',
                     left: -10,
                     fontSize: 20
                  }} ><span className="red-text">IEDC</span>MEC</div>
                  <ul className="right hide-on-med-and-down">
                     {links.map(link => (
                        <li key={link.id}>
                           <HLink className='black-text' to={link.to} >{link.Name}</HLink>
                        </li>
                     ))}
                  </ul>
               </div>
            </nav>
         </div>

         <ul className="sidenav" style={{paddingTop:"25vh"}} id='mobile-nav'>
            {links.map(link => (
               <li key={link.id} >
                  <HLink className='black-text' style={{textAlign: "center"}} to={link.to} >{link.Name}</HLink>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Navbar
