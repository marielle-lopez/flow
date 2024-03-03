import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const inputStyles = `
  rounded-md 
  border-gray-200 
  text-gray-800
`;

const TaskForm = ({ taskFormSubmit = (_data: object) => {} }) => {
  const dateSchema = z.coerce.date();
  type DateSchema = z.infer<typeof dateSchema>;

  const schema = z.object({
    title: z.string().min(1, { message: 'Title required ' }),
    description: z.string(),
    dueDate: z.coerce
      .date()
      .min(new Date(Date.now() - 864e5), {
        message: 'Due date cannot be past',
      }),
    category: z.string().min(1, { message: 'Category required ' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

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
        {errors.title?.message && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="desc">Description</label>
        <input
          className={inputStyles}
          type="text"
          id="desc"
          {...register('description')}
        />
        {errors.description?.message && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input
          className={inputStyles}
          type="date"
          id="dueDate"
          {...register('dueDate')}
        />
        {errors.dueDate?.message && <p>{errors.dueDate.message}</p>}
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select className={inputStyles} id="category" {...register('category')}>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="university">University</option>
        </select>
        {errors.category?.message && <p>{errors.category.message}</p>}
      </div>

      <button>Add task</button>
    </form>
  );
};

export default TaskForm;
