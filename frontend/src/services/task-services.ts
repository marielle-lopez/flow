export const createTask = async (task: Task) => {
  const response = await fetch('http://localhost:8080/tasks', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(task),
  });

  if (response.status !== 201) {
    throw new Error('Failed to create task');
  }

  const data = await response.json();
  return data;
};

export const getAllTasks = async () => {
  const response = await fetch('http://localhost:8080/tasks');

  if (!response.ok) {
    throw new Error('Failed to get tasks');
  }

  const tasks = await response.json();
  return tasks;
};

export const getTaskById = async (id: number) => {
  const response = await fetch(`http://localhost:8080/tasks/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to get task ${id}`);
  }

  const task = await response.json();
  return task;
};

export const updateTaskById = async (id: number, data: object) => {
  const response = await fetch(`http://localhost:8080/tasks/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to update task ${id}`);
  }

  const updatedTask = await response.json();
  return updatedTask;
};

export const deleteTaskById = async (id: number) => {
  // add error handling?
  await fetch(`http://localhost:8080/tasks/${id}`, {
    method: 'DELETE',
  });
};
