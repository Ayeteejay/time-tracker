import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Footer = styled(Container)`
  background-color: #0093ff;
  border-top: 1px solid white;
  padding: 5em 0em;
  font-size: 0.8em;
  color: white;
  p {
  }
  a {
    color: white;
    text-decoration: underline;
  }
`;

const SwitchSection = styled.div`
  text-align: right;
  a {
  }

  @media only screen and (max-width: 600px) {
    text-align: left;
  }
`;

export default () => {
  return (
    <Footer fluid>
      <Container>
        <Row>
          <Col sm={6}>
            <p>
              Made with React, Styled-Components and Framer Motion.
              <br /> Copyright &#x24B8; 2020{" "}
              <a href="mailto:adam@ayeteejay.com">Adam Jones</a>
            </p>
          </Col>

          <Col sm={6}>
            <SwitchSection>
              <p>
                <a
                  href="https://www.reactiongifs.com/r/n4M6ANG.gif"
                  target="_blank"
                >
                  &#9200; "Roads? Where we’re going, we don’t need roads."
                </a>
              </p>
            </SwitchSection>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};
