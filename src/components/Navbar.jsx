import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react"; // animated hamburger

export default function Navbar() {
  const [isOpen, setOpen] = useState(false); // hamburger toggle state

  return (
    <>
      {/* ================= Header Menu Area ================= */}
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container">
              {/* Brand */}
              <Link to="/" className="navbar-brand fw-bold hoverbg px-md-2">
                Sensative
              </Link>

              {/* Hamburger Button for Mobile */}
              <div className="d-lg-none">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>

              {/* Offcanvas Menu */}
              <div
                className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                // style={{ visibility: isOpen ? "visible" : "hidden" }}
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title fw-bold mt-1" id="offcanvasNavbarLabel">
                    Menu
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                  ></button>
                </div>

                <div className="offcanvas-body">
                  <ul className="navbar-nav ms-auto gap-md-4 ">
                    <li className="nav-item">
                      <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/blog" className="nav-link" onClick={() => setOpen(false)}>
                        Blogs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services" className="nav-link" onClick={() => setOpen(false)}>
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signup" className="nav-link" onClick={() => setOpen(false)}>
                        signup
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </nav>
        </div>
      </header>
      {/* ================= Header Menu Area ================= */}
    </>
  );
}

