import {
  AlarmTwoTone,
  Favorite,
  PhoneAndroidTwoTone,
  Room,
} from "@mui/icons-material";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../Images/logo.png";
import "./Header.css";

/* ---------------------------  header section -------------------------- */
const Header = () => {
  // Top Bar Select State

  const [value, setValue] = useState(0);

  return (
    <>
      <Box sx={{ width: "100vw" }}>
        <AppBar
          position="static"
          sx={{ alignItems: "center", background: "#373737" }}
        >
          <Toolbar>
            <BottomNavigation
              sx={{
                width: "100vw",
                marginBottom: "6px",
              }}
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                sx={{ flexDirection: "revert" }}
                label="Asian City, Dhaka, BD"
                icon={<Room />}
              />
              <BottomNavigationAction
                sx={{ flexDirection: "revert" }}
                label="088-0171-234"
                icon={<PhoneAndroidTwoTone />}
              />
              <BottomNavigationAction
                sx={{ flexDirection: "revert" }}
                label="anupamdip@nsu.edu"
                icon={<Favorite />}
              />
              <BottomNavigationAction
                sx={{ flexDirection: "revert" }}
                label="9AM-6PM / 6 Days"
                icon={<AlarmTwoTone />}
              />
            </BottomNavigation>
          </Toolbar>
        </AppBar>
      </Box>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#f1dfd1",
          backgroundImage: "linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)",
          fontSize: "1.5rem",
          padding: 20,
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ background: "transparent" }}
            />
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
                    color: "#fe421d",
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
                    color: "#fe421d",
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
                    color: "#fe421d",
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
                    color: "#fe421d",
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
