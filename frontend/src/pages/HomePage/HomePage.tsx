import { useEffect, useState } from 'react';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';
import TaskList from '../../containers/TaskList/TaskList';
import { getAllTasks } from '../../services/task-services';

const HomePage = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    getAllTasks()
      .then((res) => setAllTasks(res))
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <MainWrapper>
      <TaskList tasks={allTasks} />
    </MainWrapper>
  );
};

export default HomePage;
