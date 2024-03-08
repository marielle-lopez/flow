import TaskForm from '../../components/TaskForm/TaskForm';
import { createTask } from '../../services/task-services';

const MainWrapper = ({ children }) => {
  const taskFormSubmit = (task: Task) => {
    createTask(task).then((res) => console.log(`Created task: ${res}`));
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
