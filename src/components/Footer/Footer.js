import {
  Facebook,
  LinkedIn,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  SevenK,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import logo from "../../Images/logo-1.png";

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer_area p-5 navbar-fixed-bottom">
        <div className="container  p-3">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="text-white">
                <div className="footer-logo "></div>
                <h5 className="p-2">2021 Safe Drive Driving School.</h5>

                <p className="my-5">
                  We provide a reputable and profes- sional service that aims to
                  give you the confidence to pass your test and drive safely on
                  the roads.
                </p>

                <div className="footer_social_area mb-4">
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
                  <Link
                    to="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="LinkedIn"
                  >
                    <LinkedIn />
                  </Link>
                  <Link
                    to="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Youtube"
                  >
                    <YouTube />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-2 col-md-6">
              <div className="single-footer-widget ">
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

            <div className="col-12 col-lg-2 col-md-6">
              <div className="single-footer-widget ">
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

            <div className="col-12 col-lg-2 col-md-6">
              <div className="single-footer-widget ">
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

            <div className="col-lg-2 col-md-6  col-lg">
              <img className="mb-5" width="200" src={logo} alt="" />
              <p className="mb-1">
                <MailOutline sx={{ color: "red" }} />
                <span className="text-small ms-1 text-muted">
                  driveclub@drive.com
                </span>
              </p>
              <p className="mb-1">
                <Phone sx={{ color: "red" }} />
                <span className="text-small ms-1 text-muted">
                  +535 421 895 6523
                </span>
              </p>
              <p className="mb-1">
                <Room sx={{ color: "red" }} />
                <span className="text-small ms-1 text-muted">
                  12 Kawlar,Bangladesh
                </span>
              </p>
            </div>

            {/* end info  */}
          </div>
        </div>
      </footer>
      <div className="bg-black py-1">
        <div className="container-fluid text-center">
          <p className="mb-0 text-muted text-small">
            &copy; All rights reserved. <Link to="/">Khan Anupam Shafi</Link>.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
