import './App.css';
import { useState, useEffect } from 'react';
import {
  deleteTaskById,
  createTask,
  getAllTasks,
  getTaskById,
} from './services/task-services';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>();
  const [createdTask, setCreatedTask] = useState<Task>();

  useEffect(() => {
    getAllTasks().then((res) => setTasks(res));
  }, []);

  const getFirstTask = () => {
    getTaskById(1).then((res) => setTask(res));
  };

  const addTask = () => {
    createTask().then((res) => setCreatedTask(res));
  };

  const deleteTask = () => {
    deleteTaskById(3);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello universe!</h1>
      <h2>All Tasks</h2>
      {tasks && tasks.map((task) => <p>{task.title}</p>)}

      <button onClick={getFirstTask}>Get first task</button>
      {task && <p>{task.title}</p>}

      <button onClick={addTask}>Create test task</button>
      {createdTask && <p>{createdTask.title}</p>}

      <button onClick={deleteTask}>Delete second task</button>
    </>
  );
}

export default App;
