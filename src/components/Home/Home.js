import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, ListSubheader } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

import slide01 from "../../Images/slide-01.jpg";
import slide02 from "../../Images/slide-02.jpg";
import slide03 from "../../Images/slide-03.jpg";
import HeroBanner from "../../Images/hero-banner.jpg";
import HeroLogo from "../../Images/hero-logo.png";
import ServiceBg from "../../Images/service-bg.jpg";

import {
  Accessibility,
  BadgeRounded,
  CarRentalTwoTone,
  InfoTwoTone,
  RoomService,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Home.css";

const useStyles = makeStyles({
  gridContainer: {
    margin: "auto",
    border: "none",
    boxShadow: "none",
  },

  boxLine: {
    color: "#233785",
    margin: "50px auto",
    display: "inline-block",
    paddingBottom: "10px",
    position: "relative",
    borderBottom: "1rem solid",
  },
});

const styleCarousel = {
  position: "relative",
  maxHeight: "600px",
  width: "100",
};

const carouselCaption = {
  padding: "20px",
  margin: "20px",
  position: "absolute",
  bottom: "20%",
  color: "#fdc400",
  fontSize: "1.5vw",
};
const carouselCaption2 = {
  position: "absolute",

  width: "65vw",
  left: "10%",
  marginLeft: "-50px",
  top: "10%",
  marginTop: "-50px",
  fontSize: "1.5vw",

  color: "#2d3333",
};

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fakeData.Json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 4)));
  }, []);

  console.log(services);

  const classes = useStyles();

  return (
    <div>
      <CarouselHome />
      <hr></hr>
      <Grid sx={{ textAlign: "center", mx: 2, background: "#efe7e5" }}>
        <Box className={classes.boxLine}>
          <Typography sx={{ fontSize: "1.9rem" }}>
            OUR PROGRAMS <CarRentalTwoTone fontSize="large" />
          </Typography>
        </Box>
      </Grid>
      <br />
      {/* Service Section */}
      <section
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url(${ServiceBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="dark-overlay py-5">
          <div className="overlay-content text-white text-center">
            <p className="h6 mb-1 text-uppercase text-primary mb-3">
              We make a difference
            </p>
            <h2 className="h1 mb-5">
              The Best Solution For Your Driving Lessons
            </h2>

            <Box
              className={classes.gridContainer}
              container
              sx={{
                flexGrow: 1,

                margin: "10px 5px",
              }}
            >
              <Grid
                className={classes.gridContainer}
                container
                rowSpacing={{ xs: 3, md: 4 }}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                justifyContent="center"
              >
                {services.map((service) => (
                  <Card
                    key={service.index}
                    sx={{
                      maxWidth: 345,
                      m: -1,
                      marginBottom: 5,
                      boxShadow: "none",
                      borderRadius: "5px",
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          textAlign: "center",

                          background: "#fdc400",
                          borderRadius: "10px",
                        }}
                      >
                        {service.program}
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image={service.picture}
                      alt="green iguana"
                    ></CardMedia>
                    <ListSubheader>
                      <BadgeRounded /> {service.index}
                    </ListSubheader>
                    <CardContent>
                      <Typography variant="body1" color="text.secondary">
                        {service.about.slice(0, 150)}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <Link to="/service">
                        <Button variant="contained" startIcon={<InfoTwoTone />}>
                          More Info
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                ))}
              </Grid>
            </Box>
            <Link className="btn text-bold" to="/service">
              <Button
                variant="outlined"
                size="large"
                startIcon={<RoomService />}
                sx={{ fontWeight: "800" }}
              >
                View more services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      ;{/* <!-- Divider Section --> */}
      <section
        className="bg-cover bg-center my-5"
        style={{
          backgroundImage: `url(${HeroBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="primary-overlay py-5">
          <div className="overlay-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 text-center text-lg-left mb-4 mb-lg-0 ">
                  <h2 className="text-white mb-2">
                    Schedule Your Driving Lessons with Us!
                  </h2>
                  <p className="text-white fs-5 mb-0">
                    Book our taster lesson and meet your personal driving
                    instructor
                  </p>
                  <br />

                  <h2 className="text-white mb-2"> 088-123-4567</h2>
                </div>

                <div className="col-lg-3 ml-auto text-center text-lg-right">
                  <Accessibility color="error" fontSize="large" />
                  <Link className="btn btn-outline-light fs-4" to="/">
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

/* --------------------------- //Carousel Section --------------------------- */

const CarouselHome = () => {
  return (
    <Carousel variant="dark" fade interval={2700} style={styleCarousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide01}
          style={{ filter: "brightness(90%)" }}
          alt="First slide"
        />
        <Carousel.Caption
          className="d-none d-sm-block"
          style={{ color: "#ffff" }}
        >
          <div
            className="d-sm-none d-md-block m-auto fs-1"
            style={{ color: "#ffff" }}
          >
            <p>
              Smart Driver Learns Here
              <br />
            </p>
            <p>
              <span style={{ color: "#fdc400" }}>Friendly</span> &
              <span style={{ color: "#fdc400" }}> Patient</span> Instruction
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide02}
          alt="Second slide"
          style={{ filter: "brightness(50%)" }}
        />
        <Carousel.Caption
          className="d-none d-sm-block fs1"
          style={carouselCaption}
        >
          <div className="d-sm-none d-md-block ">
            <p>
              <span style={{ color: "#fbf6e8", fontSize: "2.1em" }}>
                We ARE <br /> DEDICATED TO
              </span>
              <br /> REAFFIRMING YOUR KNOWLEDGE!
            </p>
            <p
              style={{
                fontSize: ".8em",
                color: "#fbf6e8",
                padding: 5,
                background: "rgba(204, 204, 204, 0.2)",
              }}
            >
              "As a traffic school, we are responsible for keeping your driving
              rule knowledge fresh and practically-used! <br /> All traffic
              schools or defensive driving courses, including ours, are approved
              and licensed"
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="justify-content-center">
        <img className="d-block w-100" src={slide03} alt="Third slide" />
        <Carousel.Caption
          className="d-none d-sm-block"
          style={carouselCaption2}
        >
          <div className="d-sm-none d-md-block ">
            <h1>
              WELCOME TO
              <br />
              <span style={{ color: "#fe7000", fontSize: "1.5em " }}>
                {" "}
                THE BEST
              </span>{" "}
              <br />
              DEFENSIVE DRIVING SCHOOL!
            </h1>
            <p className="d-sm-none d-md-block" style={{ color: "#4d493e" }}>
              " We are absolutely confident, that following the driving laws is
              important both for you and other people’s safety… That’s why,
              regardless of which exact driving rules infraction you’ve
              commited, we’re dedicated to eliminate those points from your
              record!"
            </p>
            <div className="d-none d-xxl-block">
              <img src={HeroLogo} alt="" />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
