import { useContext, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { deleteTaskById } from '../../services/task-services';
import { RefreshContext } from '../../context/RefreshContextProvider';

const TaskItem = ({ task }: { task: Task }) => {
  const [checked, setChecked] = useState(false);
  const { refresh, setRefresh } = useContext(RefreshContext);

  const handleChange = () => {
    setChecked(!checked);

    // TODO: update task's 'completed' property
  };

  const handleDelete = () => {
    console.log('Delete button clicked!');
    deleteTaskById(task.id).then(() => {
      console.log(`Task '${task.title}' with ID ${task.id} deleted.`);
      return setRefresh((refresh) => refresh + 1);
    });
  };

  const taskItemStyles = `
    flex 
    gap-8 
    h-11 
    w-full 
  `;

  const taskCompletedStyles = `
    line-through 
  `;

  const deleteBtnStyles = `
    h-full 
  `;

  const formatDate = (date: Date): string => {
    const formattedDate = new Date(date);
    const options: object = {
      dateStyle: 'short',
    };

    return formattedDate.toLocaleString('en-GB', options);
  };

  return (
    <div className={taskItemStyles}>
      <div className="flex grow items-center justify-between">
        <div className="flex items-center gap-4">
          <Checkbox handleChange={handleChange} />
          <p className={checked ? taskCompletedStyles : ''}>{task.title}</p>
        </div>
        <p>{formatDate(task.dueAt)}</p>
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
