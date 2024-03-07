import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContextProvider';

const TaskModal = () => {
  const { modalIsHidden, setModalIsHidden, modalTask, setModalTask } =
    useContext(ModalContext);

  const overlayStyles = `
    w-full 
    h-full 
    fixed 
    z-1 
    backdrop-blur-sm 
  `;

  const modalStyles = `
    flex 
    flex-col 
    absolute 
    z-2 
    bg-shark 
  `;

  return (
    <>
      <div className={overlayStyles + `${modalIsHidden && 'hidden'}`}></div>
      <div className={modalStyles + `${modalIsHidden && 'hidden'}`}>
        <h3>Edit task</h3>
        <p>{modalTask ? modalTask.title : 'Task title is unknown'}</p>
        <p>{modalTask ? modalTask.dueAt : 'Task due date is unknown'}</p>
        <button
          onClick={() => {
            setModalIsHidden(true);
            setModalTask(null);
          }}
        >
          Close modal
        </button>
      </div>
    </>
  );
};

export default TaskModal;
