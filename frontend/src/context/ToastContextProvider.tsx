import { createContext, useEffect, useState } from 'react';

export const ToastContext = createContext(null);

const ToastContextProvider = ({ children }) => {
  const [toastIsTriggered, setToastIsTriggered] = useState(0);
  const [toastIsHidden, setToastIsHidden] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [toastIcon, setToastIcon] = useState(null);

  useEffect(() => {
    // ensures code is not executed on first mount
    if (toastIsTriggered === 0) {
      return;
    }

    setToastIsHidden(false);

    setTimeout(() => {
      setToastIsHidden(true);
    }, 3000);

    // TODO: reset toast values (i.e., toastMessage, toastIcon) after toast disappears
  }, [toastIsTriggered]);

  return (
    <ToastContext.Provider
      value={{
        toastIsTriggered,
        setToastIsTriggered,
        toastIsHidden,
        setToastIsHidden,
        toastMessage,
        setToastMessage,
        toastIcon,
        setToastIcon,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
