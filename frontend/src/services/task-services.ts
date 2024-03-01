export const getAllTasks = async () => {
    const response = await fetch('http://localhost:8080/tasks');
    const tasks = await response.json();
    return tasks;
}

export const getTaskById = async (id: number) => {
    const response = await fetch(`http://localhost:8080/tasks/${id}`);
    const task = await response.json();
    return task;
}