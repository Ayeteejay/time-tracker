import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/timeCard.js";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState(0);
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <React.Fragment>
      <p>App</p>

      <input
        type="text"
        name="taskName"
        id="taskNameInput"
        placeholder="Enter your task name here."
        onChange={event => setTaskName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter estimated time to complete."
        id="taskTimeInput"
        name="taskTime"
        onChange={event => setTaskTime(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description of task."
        id="taskDescriptionInput"
        name="taskDescription"
        onChange={function something(event) {
          return setTaskDescription(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const taskNameField = document.getElementById("taskNameInput");
          const taskTimeField = document.getElementById("taskTimeInput");
          const taskDescriptionField = document.getElementById(
            "taskDescriptionInput"
          );
          taskTimeField.value = "";
          taskDescriptionField.value = "";
          taskNameField.value = "";
          setTaskList(old => [...old, { taskName, taskTime, taskDescription }]);
        }}
      >
        Add To List
      </button>

      <hr />
      <p>Output Area</p>
      <div>
        {taskList.map((value, index) => {
          return (
            <Card
              key={index}
              cardName={value.taskName}
              cardInfo={value.taskDescription}
              cardTime={value.taskTime}
            ></Card>
          );
        })}
      </div>
      <hr />
      <p style={{ padding: "4em 0em 0em 0em" }}>Debugging area</p>
      <p>{taskName}</p>
    </React.Fragment>
  );
};
export default App;
