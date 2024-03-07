import { createContext, useState } from 'react';

export const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <ModalContext.Provider value={{ isHidden, setIsHidden }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
