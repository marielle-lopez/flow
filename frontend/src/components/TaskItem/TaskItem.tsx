import { useContext } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { deleteTaskById, updateTaskById } from '../../services/task-services';
import { RefreshContext } from '../../context/RefreshContextProvider';
import { ModalContext } from '../../context/ModalContextProvider';

const TaskItem = ({ task }: { task: Task }) => {
  const { refresh, setRefresh } = useContext(RefreshContext);
  const { modalIsHidden, setModalIsHidden, modalTask, setModalTask } =
    useContext(ModalContext);

  const handleChange = () => {
    updateTaskById(task.id, { isCompleted: !task.isCompleted }).then((res) => {
      console.log(`Task completion status changed: `, res);
      return setRefresh((refresh) => refresh + 1);
    });
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
    <div className={taskItemStyles + `${task.isCompleted && 'opacity-25'}`}>
      <div className="flex grow items-center justify-between">
        <div className="flex items-center gap-4">
          <Checkbox handleChange={handleChange} isChecked={task.isCompleted} />
          <p className={task.isCompleted ? taskCompletedStyles : ''}>
            {task.title}
          </p>
        </div>
        <p>{formatDate(task.dueAt)}</p>
      </div>
      <button
        onClick={() => {
          setModalIsHidden(false);
          setModalTask(task);
        }}
      >
        <img
          className="h-1/2"
          src="./src/assets/icons/pencil.png"
          alt="Pencil icon"
        />
      </button>
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
