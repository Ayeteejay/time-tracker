import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import Start from "../images/start.svg";
import Stop from "../images/stop.svg";

const StartButton = styled(Button)`
  background-color: #ff9329;
  border: none;
  padding: 1em 2em;
  :hover {
    background-color: #696969;
  }
`;

const TimeCardWrapper = styled.div`
  color: black;
  button {
    color: white;
    background-color: #ff9329;
    border: none;
    padding: 0.4em 2em;
    border-radius: 0.5em;
  }
  h4 {
    font-weight: bold;
    font-size: 1.5em;
    line-height: 1em;
  }
  p {
  }
`;

const ButtonWrapper = styled.div`
  text-align: right;
  @media only screen and (max-width: 600px) {
    text-align: left;
  }
`;

export default props => {
  return (
    <TimeCardWrapper>
      <Row>
        <Col sm={6}>
          <p>
            <h4>{props.taskInfo}</h4>
            {props.taskDescrip}
          </p>
        </Col>
        <Col sm={2}>
          <h2 style={{ color: props.taskStatus ? "#128C04" : "black" }}>
            {props.taskHours}:{props.taskMinutes}:{props.taskSeconds}
          </h2>
        </Col>
        <Col sm={4}>
          <ButtonWrapper>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={props.startTimerFunc}
              style={{
                backgroundColor: props.taskStatus ? "#FA6363" : "#1DB911"
              }}
            >
              {props.taskStatus ? "Stop" : "Start"}
            </motion.button>
          </ButtonWrapper>
        </Col>
      </Row>
    </TimeCardWrapper>
  );
};
