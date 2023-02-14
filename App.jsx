import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import "./components/Task.module.scss";

function App() {
  const [tasks, setTask] = useState([]);
  const addTask = (task) => {
    setTask((prevState) => [...prevState, task]);
  };
  const deleteTask = (id)=>{
    setTask ((prevState) => prevState.filter(task => task.id !==id));
  }
  return (
    <div className="App">
      <Form addTask={addTask} />
      <TaskList tasks={tasks} deleteTask = {deleteTask}/>
    </div>
  );
}

export default App;
