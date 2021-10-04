import React from "react";
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

import { useState } from "react";
import { useEffect } from "react";

import "./Home.css";
import { BadgeRounded, InfoTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";

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

const imgCar = {
  maxHeight: "600px",
  minWidth: "100vw",
};

const carouselCaption = {
  padding: "20px",
  margin: "20px",
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  left: 0,
  right: 0,
  textAlign: "center",
  color: "#fdc400",
  fontSize: "1vw",
};
const carouselCaption2 = {
  padding: "20px",
  margin: "20px",
  position: "absolute",
  top: 20,
  left: 20,
  color: "#2d3333",
  textAlign: "left",
  fontSize: "7vw",
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
      <br />
      <Grid sx={{ textAlign: "center" }}>
        <Box className={classes.boxLine}>
          <Typography sx={{ fontSize: "1.5vw" }}>
            EDUCATIONAL PROGRAMS FOR DRIVERS
          </Typography>
        </Box>
      </Grid>
      <br />
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
          alignItems="center"
        >
          {services.map((service) => (
            <Card key={service.index} sx={{ maxWidth: 345, boxShadow: "none" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    textAlign: "center",
                    fontSize: "1.5vw",
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
                <Typography variant="body2" color="text.secondary">
                  {service.about.slice(0, 150)}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
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
    </div>
  );
};

export default Home;

//Carousel Section

const CarouselHome = () => {
  return (
    <Carousel variant="dark" fade interval={2500} style={styleCarousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide01}
          alt="First slide"
          style={imgCar}
        />
        <Carousel.Caption style={{ color: "#ffff" }}>
          <h1 style={{ fontSize: "5vw" }}>
            Smart Driver Learns Here
            <br />
            <p style={{ fontSize: "3vw" }}>
              <span style={{ color: "#fdc400" }}>Friendly</span> &
              <span style={{ color: "#fdc400" }}> Patient</span> Instruction
            </p>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide02}
          alt="Second slide"
          style={imgCar}
        />
        <Carousel.Caption style={carouselCaption}>
          <h4>
            <span style={{ fontSize: "5vw", color: "#fbf6e8" }}>
              We ARE <br /> DEDICATED TO
            </span>
            <br /> REAFFIRMING YOUR KNOWLEDGE!
          </h4>
          <p
            style={{
              fontSize: "1.5vw",
              color: "#2a281d",
              background: "rgba(204, 204, 204, 0.5)",
            }}
          >
            "As a traffic school, we are responsible for keeping your driving
            rule knowledge fresh and practically-used! <br /> All traffic
            schools or defensive driving courses, including ours, are approved
            and licensed"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide03}
          alt="Third slide"
          style={imgCar}
        />
        <Carousel.Caption style={carouselCaption2}>
          <h1 style={{ fontSize: "3vw" }}>
            WELCOME TO
            <br />
            <span style={{ color: "#fe7000", fontSize: "5vw" }}>
              {" "}
              THE BEST
            </span>{" "}
            <br />
            DEFENSIVE DRIVING SCHOOL!
          </h1>
          <p style={{ fontSize: "1.2vw", width: "70vw", color: "#4d493e" }}>
            We are absolutely confident, that following the driving laws is
            important both for you and other people’s safety… That’s why,
            regardless of which exact driving rules infraction you’ve commited,
            we’re dedicated to eliminate those points from your record!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
