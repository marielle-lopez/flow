import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';

const TaskItem = ({ task }: { task: Task }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleDelete = () => {
    console.log('Delete button clicked!');
  };

  const taskItemStyles = `
    flex 
    items-center 
    h-11 
  `;

  const taskCompletedStyles = `
    line-through 
  `;

  const deleteBtnStyles = `
    h-full 
  `;

  return (
    <div className={taskItemStyles}>
      <Checkbox handleChange={handleChange} />
      <p className={checked ? taskCompletedStyles : ''}>{task.title}</p>
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
