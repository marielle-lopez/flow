import { useEffect, useState } from 'react';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';
import TaskList from '../../containers/TaskList/TaskList';
import { getAllTasks } from '../../services/task-services';

const HomePage = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    getAllTasks()
      .then((res) => setAllTasks(res))
      .catch((e) => console.warn(e.message));
  }, [refresh]);

  return (
    <MainWrapper>
      <TaskList tasks={allTasks} refresh={refresh} setRefresh={setRefresh} />
    </MainWrapper>
  );
};

export default HomePage;
