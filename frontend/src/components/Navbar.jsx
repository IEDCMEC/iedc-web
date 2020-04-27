import React, { useEffect } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-scroll";
import M from "materialize-css/dist/js/materialize.min.js";

const Navbar = () => {
   useEffect(() => {
      const sidenav = document.querySelector("#slide-out");
      M.Sidenav.init(sidenav, {});
   }, [])

   return (
      <div className="navbar-fixed">
         <div className="nav">
            <nav className="nav-wrapper accent-1" style={{ "background-color": "white" }}>
               <a href="#" data-target="slide-out" className="sidenav-trigger">
                  <i className="material-icons" style={{ color: "#C33427" }}>
                     menu
              </i>
               </a>
               <div className="container">
                  <ul className="right hide-on-small-and-down">
                     <li>
                        <Link
                           className="grey-text text-darken-3"
                           activeClass="active"
                           to="home"
                           spy
                           smooth
                           offset={-70}
                           duration={400}
                        >
                           Home
                  </Link>
                     </li>
                     <li>
                        <Link
                           className="grey-text text-darken-3"
                           activeClass="active"
                           to="About"
                           spy
                           smooth
                           offset={-70}
                           duration={400}
                        >
                           About
                  </Link>
                     </li>
                     <li>
                        <Link
                           className="grey-text text-darken-3"
                           activeClass="active"
                           to="achievements"
                           spy
                           smooth
                           offset={-70}
                           duration={400}
                        >
                           Achievements
                  </Link>
                     </li>
                     <li>
                        <Link
                           className="grey-text text-darken-3"
                           activeClass="active"
                           to="gallery"
                           spy
                           smooth
                           offset={-70}
                           duration={400}
                        >
                           Gallery
                  </Link>
                     </li>
                     <li>
                        <Link
                           className="grey-text text-darken-3"
                           activeClass="active"
                           to="team"
                           spy
                           smooth
                           offset={-70}
                           duration={400}
                        >
                           Our Team
                  </Link>
                     </li>
                     <li>
                        <Link
                           className="grey-text text-darken-3"
                           activeClass="active"
                           to="contact"
                           spy
                           smooth
                           offset={-70}
                           duration={400}
                        >
                           Contact
                  </Link>
                     </li>
                  </ul>
               </div>
            </nav>

            <ul
               id="slide-out"
               className="sidenav"
               style={{
                  "background-color": "black",
                  padding: "10vh",
                  "text-align": "center",
                  width: "100%",
               }}
            >
               <li>
                  <Link
                     className="grey-text"
                     activeClass="active"
                     to="home"
                     spy
                     smooth
                     offset={-70}
                     duration={400}
                  >
                     Home
              </Link>
               </li>
               <li>
                  <Link
                     className="grey-text"
                     activeClass="active"
                     to="About"
                     spy
                     smooth
                     offset={-70}
                     duration={400}
                  >
                     About
              </Link>
               </li>
               <li>
                  <Link
                     className="grey-text"
                     activeClass="active"
                     to="achievements"
                     spy
                     smooth
                     offset={-70}
                     duration={400}
                  >
                     Achievements
              </Link>
               </li>
               <li>
                  <Link
                     className="grey-text"
                     activeClass="active"
                     to="gallery"
                     spy
                     smooth
                     offset={-70}
                     duration={400}
                  >
                     Gallery
              </Link>
               </li>
               <li>
                  <Link
                     className="grey-text"
                     activeClass="active"
                     to="team"
                     spy
                     smooth
                     offset={-70}
                     duration={400}
                  >
                     Our Team
              </Link>
               </li>
               <li>
                  <Link
                     className="grey-text"
                     activeClass="active"
                     to="contact"
                     spy
                     smooth
                     offset={-70}
                     duration={400}
                  >
                     Contact
              </Link>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Navbar
