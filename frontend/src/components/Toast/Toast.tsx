import { useContext, useEffect } from 'react';
import { ToastContext } from '../../context/ToastContextProvider';

const Toast = () => {
  const {
    toastIsTriggered,
    setToastIsTriggered,
    toastIsHidden,
    setToastIsHidden,
    toastMessage,
    setToastMessage,
    toastIcon,
    setToastIcon,
  } = useContext(ToastContext);

  const toastStyles = `
    flex 
    items-center 
    justify-between 
    absolute 
    top-4 
    right-4 
    w-72 
    h-16 
    p-4 
    text-sm 
    bg-shark 
    border 
    border-charade 
    rounded-xl 
    drop-shadow-md 
  `;

  const toastIconStyles = `
    w-8 
  `;

  const crossIconStyles = `
    grayscale 
    brightness-200 
    opacity-25 
    h-4 
    w-4 
  `;

  return (
    <div className={toastStyles + `${toastIsHidden ? 'hidden' : ''}`}>
      <div className="flex items-center gap-4">
        <img
          className={toastIconStyles}
          src="./src/assets/icons/tick.png"
          alt="Tick icon"
        />
        <p>{toastMessage}</p>
      </div>
      <button>
        <img
          className={crossIconStyles}
          src="./src/assets/icons/cross.png"
          alt="Cross icon"
        />
      </button>
    </div>
  );
};

export default Toast;
