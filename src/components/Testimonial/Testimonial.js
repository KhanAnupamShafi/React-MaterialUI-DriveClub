import { TextsmsTwoTone } from "@mui/icons-material";
import { Rating, Typography } from "@mui/material";
import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

//testimonial section

const Testimonial = () => {
  return (
    <div className="container-fluid mt-5 ">
      <Typography
        sx={{
          color: "#1b98fb",

          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        <TextsmsTwoTone fontSize="larger" /> What’s Our Clients Say... <br />
      </Typography>
      <Typography
        variant="h5"
        sx={{
          padding: "5px",
          color: "#fE219b",
          textAlign: "center",
        }}
      >
        Read some comments from our valued clients that have passed their
        driving lessons with us
      </Typography>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light"> - Marcus P.</h2>
              <p className="font-italic text-muted mb-4">
                "I was able to pass my practice driving test today on my first
                attempt,all thanks to John.He really is an amazing instructor
                and I would definitely recommend him to anyone looking for an
                instructor who is willing to go the extra mile when it comes to
                easing your experience throughout the whole process,such as
                booking your test on your behalf. Although I might have made
                many mistakes while learning,John was always able to encourage
                progression whilst making the lesson enjoyable."{" "}
              </p>
              <Link
                to="/testimonial"
                className="btn btn-light px-5 rounded-pill shadow-sm"
              >
                <Rating name="read-only" value={5} readOnly />
              </Link>
            </div>
            <hr className="my-4"></hr>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <Image
                className="img-fluid mb-4 mb-lg-0"
                width="370"
                src="https://i.ibb.co/kmcTdFs/image-19.jpg"
                roundedCircle
              />
            </div>
          </div>
          <hr className="my-4"></hr>

          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <Image
                className="img-fluid mb-4 mb-lg-0"
                width="370"
                src="https://i.ibb.co/myJSw3j/image-28.jpg"
                roundedCircle
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">- Michelle K.</h2>
              <p className="font-italic text-muted mb-4">
                "John is a fantastic instructor and made him feel really
                comfortable. They focused on everything important and when it
                came test time my nephew wasn’t nervous at all because he had
                been trained so well. And by the way… he passed the driving test
                and got his license on the first try! The staff is awesome too!
                They were able to maneuver through any schedule conflicts with
                such ease.”
              </p>
              <Link
                to="/testimonial"
                className="btn btn-light px-5 rounded-pill shadow-sm"
              >
                <Rating name="read-only" value={4.2} readOnly />
              </Link>
            </div>

            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light"> - Marcus P.</h2>
              <p className="font-italic text-muted mb-4">
                I was able to pass my practice driving test today on my first
                attempt,all thanks to John.He really is an amazing instructor
                and I would definitely recommend him to anyone looking for an
                instructor who is willing to go the extra mile when it comes to
                easing your experience throughout the whole process,such as
                booking your test on your behalf. Although I might have made
                many mistakes while learning,John was always able to encourage
                progression whilst making the lesson enjoyable.
              </p>
              <Link
                to="/testimonial"
                className="btn btn-light px-5 rounded-pill shadow-sm"
              >
                <Rating name="read-only" readOnly value={4.2} />
              </Link>
            </div>
            <hr className="my-4"></hr>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <Image
                className="img-fluid mb-4 mb-lg-0"
                width="370"
                src="https://i.ibb.co/9T9Wgm5/image-3.jpg"
                roundedCircle
              />
            </div>
          </div>
          <hr className="my-4"></hr>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <Image
                className="img-fluid mb-4 mb-lg-0"
                width="370"
                src="https://i.ibb.co/dWZDKBs/image-6.jpg"
                roundedCircle
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light"> - Clarice N</h2>
              <p className="font-italic text-muted mb-4">
                "Throughout my time with pass driving school I had the pleasure
                to learn with both Alex and John who are both brilliant
                instructors. I enjoyed my driving lessons and needed to be
                pushed from time to time which they both did I also enjoyed the
                coffee breaks too. John took the time to book my theory and
                practical test at no extra cost to save me the stress of sorting
                it out. After around 25 lessons I took my test on the 12th
                December and passed first time. Thank you so much for the
                support I needed throughout the lessons and the test process."
              </p>
              <Link
                to="/testimonial"
                className="btn btn-light px-5 rounded-pill shadow-sm"
              >
                <Rating name="read-only" readOnly value={5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
