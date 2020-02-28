import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";

import { motion } from "framer-motion";

const MainContainer = styled(Container)`
  color: #696969;
  hr {
    border-top: 1px solid white;
  }
  h1 {
    color: white;
    font-weight: bold;
    font-size: 4em;
    line-height: 1em;
  }
  h2 {
    color: white;
    font-weight: bold;
    font-size: 2em;
    line-height: 1em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.3em;
    font-weight: 200;
  }
`;
const HeroContainer = styled.div`
  padding: 15em 0em 10em 0em;
  color: white;
`;
const TimeContainer = styled.div`
  border-radius: 1em;
  padding: 3em 4em;
  background-color: white;
  -webkit-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.65);
  box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.65);
  p {
    font-size: 0.8em;
    line-height: 1.5em;
    font-weight: 400;
  }
`;
const CreateButton = styled(Button)`
  background-color: #ff9329;
  border: none;
  margin: 2em 0em;
  padding: 1em 2em;
  :hover {
    background-color: #696969;
  }
`;
const AdditionalInfoContainer = styled.div`
  padding: 10em 1em;
  color: white;
`;

const FormLabel = styled(Form.Label)`
  font-size: 0.7em;
`;

const TimeInputGroup = styled(Form.Group)`
  margin: 4em 0em 1em 0em;
`;

class Timetracker extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      taskDescription: "",
      timerStatus: false,
      taskTime: 0,
      taskCreated: false
    };
    this.taskInput = this.taskInput.bind(this);
    this.startTaskTimer = this.startTaskTimer.bind(this);
    this.createTask = this.createTask.bind(this);
  }
  taskInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  startTaskTimer() {
    this.setState(state => {
      if (state.timerStatus) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.taskTime;
        this.timer = setInterval(() => {
          this.setState({ taskTime: Date.now() - startTime });
        });
      }
      return { timerStatus: !state.timerStatus };
    });
  }
  createTask() {
    this.setState({
      taskCreated: true
    });
  }
  //   startTaskTimer() {
  //     console.log("pressed");
  //     if (this.state.timerStatus) {
  //       this.setState({
  //         timerStatus: false
  //       });
  //     } else {
  //       this.setState({
  //         timerStatus: true
  //       });
  //     }
  //   }

  render() {
    document.body.style.backgroundColor = "#0093FF";
    const { taskTime } = this.state;
    let centiseconds = ("0" + (Math.floor(taskTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(taskTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(taskTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(taskTime / 3600000)).slice(-2);

    return (
      <React.Fragment>
        <motion.div
          transition={{ ease: "easeInOut", duration: 1.8 }}
          animate={{ opacity: [0, 1] }}
        >
          <Header />
          <MainContainer>
            <HeroContainer>
              <Row>
                <Col sm={6}>
                  <h1>Simplify the way you track time.</h1>
                </Col>
                <Col sm={6}>
                  <p>
                    Time tracking can unlock key information about your
                    business, but remembering to do it can be a challenge.{" "}
                    <strong>Time Tracker&trade;</strong> makes it easy to track
                    time and expenses, so you get access to critical data
                    without driving yourself (or your team) crazy.
                  </p>

                  <TimeInputGroup
                    style={{
                      display: this.state.taskCreated ? "none" : "block"
                    }}
                  >
                    <h2>
                      Get started <br />
                      tracking your time.
                    </h2>
                    <FormLabel>Enter task name.</FormLabel>
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="taskName"
                      value={this.state.taskName}
                      onChange={this.taskInput}
                    />
                    <FormLabel>Enter description.</FormLabel>
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="taskDescription"
                      value={this.state.taskDescription}
                      onChange={this.taskInput}
                    />
                    <CreateButton onClick={this.createTask}>
                      Create task
                    </CreateButton>
                  </TimeInputGroup>
                </Col>
              </Row>
            </HeroContainer>

            <motion.div
              transition={{ ease: "easeOut", duration: 2.2 }}
              animate={{ y: [400, 0], opacity: [0, 1] }}
            >
              <TimeContainer
                style={{
                  backgroundColor: this.state.timerStatus ? "#9DFF92" : "white"
                }}
              >
                <Task
                  taskInfo={this.state.taskName}
                  taskHours={hours}
                  taskMinutes={minutes}
                  taskSeconds={seconds}
                  taskCentiseconds={centiseconds}
                  taskDescrip={this.state.taskDescription}
                  taskStatus={this.state.timerStatus}
                  startTimerFunc={this.startTaskTimer}
                  taskTime={this.state.taskTime}
                ></Task>
              </TimeContainer>
            </motion.div>

            <AdditionalInfoContainer>
              <Row>
                <Col sm={12}>
                  <p>
                    Start and stop timers as you work through your to-do list,
                    or enter all your hours into a timesheet in one go.{" "}
                    <strong>Time Tracker&trade;</strong> lets you track time in
                    whatever way is easiest for you. Seamlessly integrates with
                    the apps you already use, so you don’t have to leave your
                    favorite tools to start a timer.
                  </p>
                </Col>
              </Row>
            </AdditionalInfoContainer>
          </MainContainer>
          <Footer></Footer>
        </motion.div>
      </React.Fragment>
    );
  }
}
export default Timetracker;
