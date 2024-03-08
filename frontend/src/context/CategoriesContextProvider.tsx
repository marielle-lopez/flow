import { createContext, useState, useEffect } from 'react';
import { getAllCategories } from '../services/category-services';

export const CategoriesContext = createContext(null);

const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories(categories))
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;
