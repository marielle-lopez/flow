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

export const createTask = async () => {
    const task = {
        title: 'Frontend task',
        description: 'Hello from the frontend!',
        dueAt: '1999-12-22',
        category: 'Test'
    };

    const response = await fetch('http://localhost:8080/tasks', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
}