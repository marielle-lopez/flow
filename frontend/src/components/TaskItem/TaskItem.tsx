import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';

const TaskItem = ({ task }: { task: Task }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  console.log(`${task.title}: ${checked}`);

  const taskItemStyles = `
    flex 
  `;

  const taskCompletedStyles = `
    line-through 
  `;

  return (
    <div className={taskItemStyles}>
      <Checkbox handleChange={handleChange} />
      <p className={checked ? taskCompletedStyles : ''}>{task.title}</p>
    </div>
  );
};

export default TaskItem;
