import './App.css';
import { useState } from 'react';
import {
  deleteTaskById,
  createTask,
  getTaskById,
} from './services/task-services';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import TodayPage from './pages/TodayPage/TodayPage.tsx';
import InboxPage from './pages/InboxPage/InboxPage.tsx';
import PersonalPage from './pages/PersonalPage/PersonalPage.tsx';
import WorkPage from './pages/WorkPage/WorkPage.tsx';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>();
  const [createdTask, setCreatedTask] = useState<Task>();

  const getFirstTask = () => {
    getTaskById(1).then((res) => setTask(res));
  };

  const addTask = () => {
    createTask().then((res) => setCreatedTask(res));
  };

  const deleteTask = () => {
    deleteTaskById(3);
  };

  const taskFormSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </BrowserRouter>

      {/* <h1 className="text-3xl font-bold underline">Hello universe!</h1> */}
      {/* <h2>All Tasks</h2>
      {tasks && tasks.map((task) => <p key={task.id}>{task.title}</p>)} */}

      {/* <button onClick={getFirstTask}>Get first task</button>
      {task && <p>{task.title}</p>}

      <button onClick={addTask}>Create test task</button>
      {createdTask && <p>{createdTask.title}</p>}

      <button onClick={deleteTask}>Delete second task</button>

      <TaskForm taskFormSubmit={taskFormSubmit} /> */}
    </>
  );
}

export default App;
