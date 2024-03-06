import { useContext, useEffect, useState } from 'react';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';
import TaskList from '../../containers/TaskList/TaskList';
import { getAllTasks } from '../../services/task-services';
import { RefreshContext } from '../../context/RefreshContextProvider';

const HomePage = () => {
  const [allTasks, setAllTasks] = useState(null);
  const { refresh } = useContext(RefreshContext);

  useEffect(() => {
    getAllTasks()
      .then((res) => setAllTasks(res))
      .catch((e) => console.warn(e.message));
  }, [refresh]);

  return <MainWrapper>{allTasks && <TaskList tasks={allTasks} />}</MainWrapper>;
};

export default HomePage;
