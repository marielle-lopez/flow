import { useForm } from 'react-hook-form';

const inputStyles = `
  rounded-md 
  border-gray-200 
  text-gray-800
`;

const TaskForm = ({ taskFormSubmit = (data: object) => {} }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(taskFormSubmit)}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          className={inputStyles}
          type="text"
          id="title"
          {...register('title')}
        />
      </div>

      <div>
        <label htmlFor="desc">Description</label>
        <input
          className={inputStyles}
          type="text"
          id="desc"
          {...register('description')}
        />
      </div>

      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input
          className={inputStyles}
          type="date"
          id="dueDate"
          {...register('dueDate')}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select className={inputStyles} id="category" {...register('category')}>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="university">University</option>
        </select>
      </div>

      <button>Add task</button>
    </form>
  );
};

export default TaskForm;
