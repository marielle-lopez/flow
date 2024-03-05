import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { deleteTaskById } from '../../services/task-services';

const TaskItem = ({
  task,

  refresh,
  setRefresh,
}: {
  task: Task;
  refresh: number;
  setRefresh: (refresh: number) => void;
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);

    // TODO: update task's 'completed' property
  };

  const handleDelete = () => {
    console.log('Delete button clicked!');
    deleteTaskById(task.id).then(() => {
      console.log(`Task '${task.title}' with ID ${task.id} deleted.`);
      return setRefresh((refresh += 1));
    });
  };

  const taskItemStyles = `
    flex 
    justify-between 
    h-11 
    w-full 
  `;

  const taskCompletedStyles = `
    line-through 
  `;

  const deleteBtnStyles = `
    h-full 
  `;

  return (
    <div className={taskItemStyles}>
      <div className="flex items-center gap-4">
        <Checkbox handleChange={handleChange} />
        <p className={checked ? taskCompletedStyles : ''}>{task.title}</p>
      </div>
      <button className={deleteBtnStyles} onClick={handleDelete}>
        <img
          className="h-1/2"
          src="./src/assets/icons/cross.png"
          alt="Cross icon"
        />
      </button>
    </div>
  );
};

export default TaskItem;
