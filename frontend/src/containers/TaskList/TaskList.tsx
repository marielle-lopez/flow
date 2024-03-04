const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </div>
  );
};

export default TaskList;
