import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';

const Footer = styled(Container)`
background-color:#0093FF;
border-top:1px solid white;
padding:5em 0em;
font-size:0.8em;
color:white;
p{
    opacity:0.8
}
a{
    color:white;
    text-decoration:underline;
  
}
`

const SwitchSection = styled.div`
text-align:right;
a{

}
`

export default () => {
    return (
        <Footer fluid>
            <Container>
                <Row>
                    <Col sm={8}>
                        <p>Made with React, Styled-Components and Framer Motion.<br /> Copyright &#x24B8; 2020 <a href="mailto:adam@ayeteejay.com">Adam Jones</a></p>
                    </Col>

                    <Col sm={4}>
                        <SwitchSection>
                            <p><a href="https://www.reactiongifs.com/r/n4M6ANG.gif" target="_blank">&#9200; "Roads? Where we’re going, we don’t need roads."</a></p>
                        </SwitchSection>
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}