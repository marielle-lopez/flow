import './App.css';
import { useState, useEffect } from "react";
import { getAllTasks, getTaskById } from './services/task-services';

interface Task {
  id: number,
  title: string,
  description: string,
  createdAt: Date,
  dueAt: Date,
  category: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    getAllTasks().then((res) => setTasks(res))
  }, [])

  const handleClick = () => {
    getTaskById(1).then((res) => setTask(res))
  }

  return (
    <>
      <h1>Hello universe!</h1>
      <button onClick={handleClick}>Get first task</button>
      {tasks && tasks.map((task) => <p>{task.title}</p>)}
      {task && <p>{task.title}</p>}
    </>
  )
}

export default App
