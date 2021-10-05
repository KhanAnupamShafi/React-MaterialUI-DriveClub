import {
  Facebook,
  HealthAndSafetySharp,
  Pinterest,
  SevenK,
  Twitter,
} from "@mui/icons-material";
import logo from "../../Images/logo-1.jpg";
import { AppBar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <AppBar position="static" sx={{ marginTop: 20 }}>
        <footer className="footer_area bg-dark p-5 m-1">
          <div className="container  p-3">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-footer-widget section_padding_0_130">
                  <div className="footer-logo "></div>
                  <h5 className="p-2">2021 Safe Drive Driving School.</h5>
                  <img className="mx-5" src={logo} alt="" />
                  <p>
                    We provide a reputable and profes- sional service that aims
                    to give you the confidence to pass your test and drive
                    safely on the roads.
                  </p>

                  <div className="copywrite-text mb-5">
                    <p className="mb-0">
                      @ Copywright <HealthAndSafetySharp /> <span> </span>
                      <Link className="ml-1" to="/">
                        Khan Anupam Shafi
                      </Link>
                    </p>
                  </div>

                  <div className="footer_social_area">
                    <Link
                      to="/"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Facebook"
                    >
                      <Facebook />
                    </Link>
                    <Link
                      to="/"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Pinterest"
                    >
                      <Pinterest />
                    </Link>
                    <Link
                      to="/"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Skype"
                    >
                      <SevenK />
                    </Link>
                    <Link
                      to="/"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Twitter"
                    >
                      <Twitter />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg">
                <div className="single-footer-widget section_padding_0_130">
                  <h5 className="widget-title">About</h5>

                  <div className="footer_menu text">
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/about">Corporate Sale</Link>
                      </li>
                      <li>
                        <Link to="/about">Terms &amp; Policy</Link>
                      </li>
                      <li>
                        <Link to="/about">Community</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg">
                <div className="single-footer-widget section_padding_0_130">
                  <h5 className="widget-title">Support</h5>

                  <div className="footer_menu">
                    <ul>
                      <li>
                        <Link to="/">Help</Link>
                      </li>
                      <li>
                        <Link to="/">Support</Link>
                      </li>
                      <li>
                        <Link to="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/">Term &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="/">Help &amp; Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg">
                <div className="single-footer-widget section_padding_0_130">
                  <h5 className="widget-title">Contact</h5>

                  <div className="footer_menu ">
                    <ul>
                      <li>
                        <Link to="/">Call Centre</Link>
                      </li>
                      <li>
                        <Link to="/">Email Us</Link>
                      </li>
                      <li>
                        <Link to="/">Term &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="/">Help Center</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </AppBar>
    </div>
  );
};

export default Footer;
