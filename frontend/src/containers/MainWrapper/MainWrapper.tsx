import TaskForm from '../../components/TaskForm/TaskForm';
import { createTask } from '../../services/task-services';
import { RefreshContext } from '../../context/RefreshContextProvider';
import { useContext } from 'react';

const MainWrapper = ({ children }) => {
  const { refresh, setRefresh } = useContext(RefreshContext);

  const taskFormSubmit = (task: Task) => {
    createTask(task).then((res) => {
      console.log(`Created task: ${res}`);
      setRefresh((refresh) => refresh + 1);
    });
  };

  const wrapperStyles = `
    flex 
    flex-col 
    items-center 
    gap-8 
    mx-16 
    my-12 
    px-16 
    w-4/5
  `;

  return (
    <main className={wrapperStyles}>
      <TaskForm taskFormSubmit={taskFormSubmit} />
      {children}
    </main>
  );
};

export default MainWrapper;
