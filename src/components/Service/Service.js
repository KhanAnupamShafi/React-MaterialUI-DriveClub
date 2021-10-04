import React from "react";

import "./Service.css";

import { Card, Col, Row, Stack } from "react-bootstrap";
import Button from "@mui/material/Button";
import { AppRegistrationOutlined } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useService from "../../Hooks/useService";

const Service = () => {
  const [services] = useService();

  return (
    <>
      <Row sm={1} md={2} className="g-5 m-4">
        {services?.map((service) => (
          <Col>
            <Box
              sx={{
                display: "flex",
                background: "#f7f7f7",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <Stack sx={{ justifyContent: "center" }}>
                <Avatar
                  sx={{
                    width: { xs: 100, sm: 150, md: 220 },
                    height: { xs: 100, sm: 150, md: 200 },
                    margin: "20px",
                  }}
                  alt="Remy Sharp"
                  src={service.picture}
                />
                <div className="container-fluid m-auto text-center">
                  <p>Pricing</p>
                  <h2 className="card-title pricing-card-title">
                    ${service.price} <small className="text-muted">/ mo</small>
                  </h2>
                </div>
              </Stack>

              <Card
                style={{
                  height: "20%",
                  width: "48rem",
                  padding: "20px",
                  margin: "5px auto",
                  background: "#edf0f2",
                }}
              >
                <Card.Header
                  style={{
                    fontSize: ".8vw",
                    color: "#003865",
                    background: "#faaf20",
                  }}
                >
                  {service.title.toUpperCase()}
                </Card.Header>

                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "2vw",
                    }}
                  >
                    {service.program}
                  </Card.Title>
                  <Card.Text>{service.about.slice(0, 195)}</Card.Text>
                  <hr class="my-4"></hr>

                  <Button
                    sx={{ display: "block", width: "100%" }}
                    variant="outlined"
                    size="large"
                  >
                    Apply Now
                  </Button>
                  <br />
                  <Typography variant="h5" sx={{ color: "#1b98fb" }}>
                    <AppRegistrationOutlined /> Registration Starts From{" "}
                    {service.registration}
                  </Typography>
                </Card.Body>
              </Card>
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Service;
