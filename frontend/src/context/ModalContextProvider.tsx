import { createContext, useState } from 'react';

export const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
  const [modalIsHidden, setModalIsHidden] = useState(true);
  const [modalTask, setModalTask] = useState(null);

  console.log(modalIsHidden);
  console.log(modalTask);

  return (
    <ModalContext.Provider
      value={{ modalIsHidden, setModalIsHidden, modalTask, setModalTask }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
