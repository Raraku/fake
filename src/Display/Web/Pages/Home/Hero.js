import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import { Button, ButtonGroup } from "semantic-ui-react";

const Hero = () => {
  return (
    <Jumbotron className="hero">
      <Row className="hero-row">
        <Col className="hero-col-a" xs={5}>
          Welcome to Elitemanga
        </Col>
        <Col className="hero-col-b" xs={7}>
          <p>
            A place to get the best, concise, spoiler-free reviews on Manga and
            Anime carefully done by a team of dedicated otakus like you. Become
            a part of our community united by our love for japanese media.{" "}
            <span className="hero-login">Login</span> or{" "}
            <span className="hero-login">Signup</span> to get started
          </p>
        </Col>
      </Row>
    </Jumbotron>
  );
};
export default Hero;
