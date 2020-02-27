import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

import Header from './components/Header'
import Footer from './components/Footer'
import Task from './components/Task'

import { motion } from 'framer-motion'

const MainContainer = styled(Container)`
color:#696969;
h1{
    color:white;
    font-weight:bold;
    font-size:4em;
    line-height:1em;
}
h2{
    color:#0093FF;
    font-weight:bold;
    font-size:2em;
    line-height:1em;
}
`
const HeroContainer = styled.div`
padding:15em 0em  10em 0em;
color:white;
`
const InputContainer = styled.div`
padding:5em 1em;
border-top:1px solid #0093FF;
background-color:white;-webkit-box-shadow: 10px 10px 37px -16px rgba(0,0,0,0.65);
-moz-box-shadow: 10px 10px 37px -16px rgba(0,0,0,0.65);
box-shadow: 10px 10px 37px -16px rgba(0,0,0,0.65);
`
const CreateButton = styled(Button)`
background-color:#FF9329;
border:none;
padding:1em 2em;
:hover{
    background-color:#696969
}
`
const TimeCardcontainer = styled.div`
padding:10em 1em;
`


class Timetracker extends React.Component {

    constructor() {
        super();
        this.state = {
            taskName: "",
        }
        this.taskInput = this.taskInput.bind(this);
        this.createTask = this.createTask.bind(this);
    }
    taskInput(event) {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    createTask() {
        console.log("pressed")
    }
    render() {
        document.body.style.backgroundColor = "#0093FF"
        return (
            <React.Fragment>
                <motion.div transition={{ ease: "easeOut", duration: 1 }} animate={{ opacity: [0, 1] }}>
                    <Header />
                    <MainContainer>
                        <HeroContainer>
                            <Row>
                                <Col sm={6}>

                                    <h1>Simplify the way you track time.</h1>

                                </Col>
                                <Col sm={6}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore obcaecati vel perspiciatis ex id quis odio explicabo, consequuntur exercitationem perferendis totam! Labore obcaecati vel perspiciatis ex id quis odio explicabo, consequuntur exercitationem perferendis totam! Consequatur praesentium odit iure ducimus, alias veritatis tenetur eaque?</p>
                                </Col>
                            </Row>
                        </HeroContainer>
                        <motion.div transition={{ ease: "easeOut", duration: 2 }} animate={{ y: [400, 0], opacity: [0, 1] }}>
                            <InputContainer>

                                <Row>
                                    <Col sm={{ span: 10, offset: 1 }}>
                                        {/* {this.state.taskName} */}
                                        <h2>Get started tracking your time.</h2>
                                        <Form.Group >
                                            <Form.Label>Enter task name.</Form.Label>
                                            <Form.Control type="text" placeholder="" name="taskName" value={this.state.taskName} onChange={this.taskInput} />
                                            <CreateButton onClick={this.createTask}>Create task</CreateButton>
                                        </Form.Group>


                                    </Col>
                                </Row>

                            </InputContainer>
                        </motion.div>

                        <TimeCardcontainer>
                            <Row>
                                <Col sm={6}>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, dolorem repudiandae blanditiis dolor ut ratione quod laborum. Assumenda quidem velit, tempore numquam sint voluptatum fugiat reprehenderit suscipit veritatis quasi placeat!</p>
                                </Col>
                                <Col sm={6}>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, dolorem repudiandae blanditiis dolor ut ratione quod laborum. Assumenda quidem velit, tempore numquam sint voluptatum fugiat reprehenderit suscipit veritatis quasi placeat!</p>
                                </Col>
                            </Row>
                        </TimeCardcontainer>


                    </MainContainer>
                    <Footer></Footer>
                </motion.div>
            </React.Fragment >
        )
    }
};
export default Timetracker