import TaskItem from '../../components/TaskItem/TaskItem';

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  const taskListStyles = `
    flex 
    flex-col 
    w-full 
  `;

  return (
    <div className={taskListStyles}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
