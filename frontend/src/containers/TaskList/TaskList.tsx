import TaskItem from '../../components/TaskItem/TaskItem';

const TaskList = ({
  tasks,
  refresh,
  setRefresh,
}: {
  tasks: Task[];
  refresh: number;
  setRefresh: (refresh: number) => void;
}) => {
  const taskListStyles = `
    flex 
    flex-col 
    w-full 
  `;

  return (
    <div className={taskListStyles}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      ))}
    </div>
  );
};

export default TaskList;
