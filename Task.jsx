import styles from './Task.module.scss'

const Task = (props) => {
  const {task, deleteTask} = props;
  return (
    <div className={styles.Task}>
      <p>{task.name}</p>
      <button onClick={()=>deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
