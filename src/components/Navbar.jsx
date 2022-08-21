import React, { useEffect, useState, useRef } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { HashLink as HLink } from "react-router-hash-link";

const Navbar = () => {
    const sidenavRef = useRef();
    const [sidenavInstance, setSidenavInstance] = useState(null);

    useEffect(() => {
        setSidenavInstance(
            M.Sidenav.init(sidenavRef.current, {
                outDuration: 400,
            }),
        );
    }, []);

    const links = [
        { id: 1, Name: "Home", to: "/#home" },
        { id: 2, Name: "Contact", to: "/#contact" },
        // { id: 4, Name: 'Case Study', to: '/case-study' },
        { id: 3, Name: "Team", to: "/team" },
        { id: 4, Name: "Catalyst", to: "/catalyst" },
    ];

    const handleSideNavClick = () => {
        sidenavInstance.close();
    };

    return (
        <div className="navbar">
            <div className="navbar-fixed  ">
                <nav className="nav-wrapper z-depth-0 accent-1 nav_img">
                    <div className="container" style={{ display: "flex" }}>
                        <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                            <i className="material-icons" style={{ color: "#BF2200" }}>
                                menu
                            </i>
                        </a>
                        <div
                            className="hide-on-large-only black-text "
                            style={{
                                position: "relative",
                                left: -25,
                                fontSize: 20,
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <span style={{ color: "#BF2200" }}>IEDC</span>MEC
                        </div>
                        <ul
                            className="hide-on-med-and-down"
                            style={{ display: "flex", flex: "1", justifyContent: "space-between" }}
                        >
                            {links.map((link) => (
                                <li key={link.id}>
                                    <HLink className="black-text " to={link.to}>
                                        {link.Name}
                                    </HLink>
                                </li>
                            ))}
                            <li key="projects">
                                <a
                                    href="https://github.com/IEDCMEC/projects/blob/main/README.md"
                                    className="black-text "
                                >
                                    Projects
                                </a>
                            </li>
                            <li key="blog">
                                <a
                                    href="https://blog.iedcmec.in/"
                                    className="black-text "
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <ul className="sidenav" id="mobile-nav" ref={sidenavRef} style={{ paddingTop: "25vh" }}>
                {links.map((link) => (
                    <li key={link.id} onClick={handleSideNavClick}>
                        <HLink className="black-text" style={{ textAlign: "center" }} to={link.to}>
                            {link.Name}
                        </HLink>
                    </li>
                ))}
                <li key="blog">
                    <a
                        href="https://blog.iedcmec.in/"
                        className="black-text "
                        style={{ textAlign: "center" }}
                        target="_blank" rel="noopener noreferrer"
                    >
                        Blog
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
