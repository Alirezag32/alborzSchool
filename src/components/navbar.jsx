import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


function CustomNavbar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand" to="/">
        البرز
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            صفحه اصلی
          </Link>
          <Link className="nav-link" to="/notification">
            اعلانات
          </Link>
          <Link className="nav-link" to="/articles">
            مقالات
          </Link>
          <Link className="nav-link" to="/aboutUs">
            درباره ی ما
          </Link>
          <Link className="nav-link" to="/Rules">
            قوانین و مقررات
          </Link>
        </Nav>

        <div>
          <Nav className="ml-auto">
            <NavDropdown
              title={
                <div className="profile-dropdown">
                  <img
                    src="https://secure.gravatar.com/avatar/caf21e2f4cb66624dfd92fb3d3aac60a?s=96&amp;d=mm&amp;r=g"
                    alt="علیرضا"
                    className="profile-image-navbar"
                  />
                  <span>{localStorage.getItem("username")}</span>
                </div>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/profile">مشاهده پروفایل</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}



export default CustomNavbar;
