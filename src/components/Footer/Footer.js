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
        <footer class="footer_area bg-dark p-5 m-1">
          <div class="container  p-3">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="single-footer-widget section_padding_0_130">
                  <div class="footer-logo "></div>
                  <h5 className="p-2">2021 Safe Drive Driving School.</h5>
                  <img className="mx-5" src={logo} alt="" />
                  <p>
                    We provide a reputable and profes- sional service that aims
                    to give you the confidence to pass your test and drive
                    safely on the roads.
                  </p>

                  <div class="copywrite-text mb-5">
                    <p class="mb-0">
                      @ Copywright <HealthAndSafetySharp /> <span> </span>
                      <Link
                        class="ml-1"
                        href="https://wrapbootstrap.com/user/DesigningWorld"
                      >
                        Khan Anupam Shafi
                      </Link>
                    </p>
                  </div>

                  <div class="footer_social_area">
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
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Pinterest"
                    >
                      <Pinterest />
                    </Link>
                    <Link
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Skype"
                    >
                      <SevenK />
                    </Link>
                    <Link
                      href="#"
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

              <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                  <h5 class="widget-title">About</h5>

                  <div class="footer_menu text">
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/about">Corporate Sale</Link>
                      </li>
                      <li>
                        <Link href="/about">Terms &amp; Policy</Link>
                      </li>
                      <li>
                        <Link href="/about">Community</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                  <h5 class="widget-title">Support</h5>

                  <div class="footer_menu">
                    <ul>
                      <li>
                        <Link href="#">Help</Link>
                      </li>
                      <li>
                        <Link href="#">Support</Link>
                      </li>
                      <li>
                        <Link href="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="#">Term &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link href="#">Help &amp; Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                  <h5 class="widget-title">Contact</h5>

                  <div class="footer_menu ">
                    <ul>
                      <li>
                        <Link href="#">Call Centre</Link>
                      </li>
                      <li>
                        <Link href="#">Email Us</Link>
                      </li>
                      <li>
                        <Link href="#">Term &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link href="#">Help Center</Link>
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
