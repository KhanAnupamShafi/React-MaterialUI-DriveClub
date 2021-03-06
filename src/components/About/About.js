import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import aboutimage from "../../Images/img-car.png";
import { Home, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const About = () => {
  return (
    <>
      {/* about us */}
      <div className="bg-light mt-5">
        <div className="container py-2">
          <div className="row h-100 align-items-center py-2">
            <div className="col-lg-6">
              <h1 className="display-4">About Us </h1>
              <p className="lead text-muted mb-3">
                Affordable, Effective and Convenient Driving Lessons Safe Drive
                Driving School has designed classes with the busy student in
                mind. We have a very flexible system of classes that allows
                students to take the classes in any order they wish and at their
                own pace. In some schools you have a very strict schedule for
                taking the classes and this does not work into a lot of the
                current schedules of kids busy lives.
              </p>
              <p className="lead text-bold">
                Our{" "}
                <a href="/" className="text-muted">
                  <u>Advantages</u>
                </a>
              </p>

              <ul className="pb-5">
                <li>We offer convenient scheduling six days a week.</li>
                <li> We help nervous drivers and the elderly.</li>
                <li> We offer quality service at reasonable rates.</li>
                <li>We offer the use of the training car for road tests.</li>
              </ul>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src={aboutimage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}

      <Container>
        <div className="col-lg-5 mt-5">
          <h2 className="display-4 font-weight-light">Our team</h2>
          <h4 className="font-italic text-muted">Meet Our Team</h4>
        </div>

        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <div className="bg-light py-2">
              <div className="container py-2">
                <div className="row mb-4"></div>

                <div className="row text-center">
                  <div className="col-xl-12 col-sm-6 mb-5">
                    <div className="bg-white rounded shadow-sm py-5 px-4">
                      <img
                        src="https://i.ibb.co/L6GZnwJ/image-22.jpg"
                        alt=""
                        width="100"
                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                      />
                      <h5 className="mb-0">Manuella Nevoresky</h5>
                      <span className="small text-uppercase text-muted">
                        CEO - Founder
                      </span>
                      <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item">
                          <Home />
                        </li>
                        <li className="list-inline-item">
                          <Twitter />
                        </li>
                        <li className="list-inline-item">
                          <Instagram />
                        </li>
                        <li className="list-inline-item">
                          <LinkedIn />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xs lg="6">
            <div className="bg-light py-2">
              <div className="container py-2">
                <div className="row mb-4"></div>

                <div className="row text-center">
                  <div className="col-xl-12 col-sm-6 mb-5">
                    <div className="bg-white rounded shadow-sm py-5 px-4">
                      <img
                        src="https://i.ibb.co/GF2g3FN/image-25.jpg"
                        alt=""
                        width="100"
                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                      />
                      <h5 className="mb-0">Pamella Morris</h5>
                      <span className="small text-uppercase text-muted">
                        Director
                      </span>
                      <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item">
                          <Home />
                        </li>
                        <li className="list-inline-item">
                          <Twitter />
                        </li>
                        <li className="list-inline-item">
                          <Instagram />
                        </li>
                        <li className="list-inline-item">
                          <LinkedIn />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs lg="6">
            <div className="bg-light py-2">
              <div className="container py-2">
                <div className="row mb-4"></div>

                <div className="row text-center">
                  <div className="col-xl-12 col-sm-6 mb-5">
                    <div className="bg-white rounded shadow-sm py-5 px-4">
                      <img
                        src="https://i.ibb.co/KFNQsWQ/image-24.jpg"
                        alt=""
                        width="100"
                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                      />
                      <h5 className="mb-0">Daniel Fernandez</h5>
                      <span className="small text-uppercase text-muted">
                        Managing - Department
                      </span>
                      <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item">
                          <Home />
                        </li>
                        <li className="list-inline-item">
                          <Twitter />
                        </li>
                        <li className="list-inline-item">
                          <Instagram />
                        </li>
                        <li className="list-inline-item">
                          <LinkedIn />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs lg="6">
            <div className="bg-light py-2">
              <div className="container py-2">
                <div className="row mb-4"></div>

                <div className="row text-center">
                  <div className="col-xl-12 col-sm-6 mb-5">
                    <div className="bg-white rounded shadow-sm py-5 px-4">
                      <img
                        src="https://i.ibb.co/tXqSF74/image-23.jpg"
                        alt=""
                        width="100"
                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                      />
                      <h5 className="mb-0">Marvin Bordan</h5>
                      <span className="small text-uppercase text-muted">
                        Head - Chairman
                      </span>
                      <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item">
                          <Home />
                        </li>
                        <li className="list-inline-item">
                          <Twitter />
                        </li>
                        <li className="list-inline-item">
                          <Instagram />
                        </li>
                        <li className="list-inline-item">
                          <LinkedIn />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="container-fluid">
        <div className="col-lg-5  m-auto">
          <h2 className="display-4 font-weight-light m-5 text-center">
            Have a <span className="text-danger">Question?</span>
          </h2>
          <h5 className="font-italic text-muted">Leave us a message</h5>
        </div>
      </div>

      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="pt-1 bg-primary">
              <div className="p-4 p-lg-5 bg-white shadow-sm">
                <Form action="#">
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        placeholder="First name"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        className="form-control"
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Leave your message"
                      ></textarea>
                    </div>
                    <div className="form-group col-lg-12 py-4">
                      <button className="btn btn-outline-primary" type="submit">
                        Submit now
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
