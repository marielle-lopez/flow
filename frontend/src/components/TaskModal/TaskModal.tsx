import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContextProvider';

const TaskModal = () => {
  const { isHidden, setIsHidden } = useContext(ModalContext);

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

  console.log(isHidden);

  return (
    <>
      <div className={overlayStyles + `${isHidden && 'hidden'}`}></div>
      <div className={modalStyles + `${isHidden && 'hidden'}`}>
        <h3>Edit task</h3>
        <p>Task title here</p>
        <p>Date here</p>
        <button
          onClick={() => {
            setIsHidden(true);
          }}
        >
          Close modal
        </button>
      </div>
    </>
  );
};

export default TaskModal;
