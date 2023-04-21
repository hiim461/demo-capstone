import React, { useRef, useState } from "react";
import styles from "../assets/styles.module.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  //   const dropdown = document.querySelector(".ngu1");
  //   const dropdownMenu = document.querySelector(".ngu2");
  //   if (dropdown) {
  //     dropdown.addEventListener("mouseenter", function () {
  //       dropdownMenu.style.display = "block";
  //     });
  //     dropdown.addEventListener("mouseleave", function () {
  //       dropdownMenu.style.display = "none";
  //     });
  //   }
  return (
    <nav className={styles.stickyNav}>
      <div className={` ${styles.header} mx-auto`}>
        <div className={styles.logo}>
          <a href="#" className="hover:opacity-80">
            <img src="/img/Logo-1-cs.png" alt="logo" />
          </a>
        </div>
        <div className="">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item dropdown" id="dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown link
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id="basic-nav-dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavDropdown.Item className="ngu2" href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item className="ngu2" href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item className="ngu2" href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="ngu2" href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <div
                    aria-labelledby="basic-nav-dropdown"
                    data-bs-popper="static"
                    className={`dropdown-menu ${showDropdown ? "show" : ""}`}
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavDropdown.Item className="ngu2" href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item className="ngu2" href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item className="ngu2" href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="ngu2" href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
