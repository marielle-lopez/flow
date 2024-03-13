export const getAllCategories = async () => {
  const response = await fetch('http://localhost:8080/categories');
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to get all categories');
  }

  return data;
};

export const createCategory = async (category: Category) => {
  const response = await fetch('http://localhost:8080/categories', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(category),
  });

  if (response.status !== 201) {
    throw new Error('Failed to create category');
  }

  const data = await response.json();
  return data;
};
