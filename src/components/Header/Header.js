import { CarRentalOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../Images/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#512da8", fontSize: "1.2vw", padding: 20 }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <CarRentalOutlined fontSize="large" />{" "}
            <Typography variant="h4">DriveClub</Typography>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ color: "#fe421d" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="vstack gap-5 justify-content-end ">
              <div>
                <NavLink
                  to="/home"
                  className="tags"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="tags"
                  to="/service"
                  activeStyle={{
                    color: "#fff",
                  }}
                >
                  Our Services
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="tags"
                  to="/about"
                  activeStyle={{
                    color: "#fff",
                  }}
                >
                  About Us
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="tags"
                  to="/testimonial"
                  activeStyle={{
                    color: "#fff",
                  }}
                >
                  Testimonials
                </NavLink>
              </div>

              <NavLink
                className="tags"
                to="/testimonial"
                activeStyle={{
                  color: "#fff",
                }}
              ></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
