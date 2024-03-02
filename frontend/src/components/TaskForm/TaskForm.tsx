const inputStyles = `
  rounded-md 
  border-gray-200 
  text-gray-800
`;

const TaskForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input className={inputStyles} type="text" id="title" />
      </div>

      <div>
        <label htmlFor="desc">Description</label>
        <input className={inputStyles} type="text" id="desc" />
      </div>

      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input className={inputStyles} type="date" id="dueDate" />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select className={inputStyles} id="category">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="university">University</option>
        </select>
      </div>

      <button type="submit">Add task</button>
    </form>
  );
};

export default TaskForm;
