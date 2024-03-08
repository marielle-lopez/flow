export const getAllCategories = async () => {
  const response = await fetch('http://localhost:8080/categories');
  const data = await response.json();

  return data;
};
