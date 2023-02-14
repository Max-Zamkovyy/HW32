import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const { addTask } = props;
  const formSubmit = (event) => {
    event.preventDefault();
    const task = {
        name: taskName,
        id: uuidv4()
    }
    addTask(task);
  };
  const [taskName, setTaskName] = useState("");
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Input text"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          required
          autoFocus
        />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default Form;
