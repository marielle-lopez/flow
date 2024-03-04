import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formStyles = `
  flex 
`;

const inputStyles = `
  bg-charade 
  border-0 
  border-river-bed 
  placeholder-river-bed 
`;

const TaskForm = ({ taskFormSubmit = (_data: object) => {} }) => {
  const schema = z.object({
    title: z.string().min(1, { message: 'Title required ' }),
    // description: z.string(),
    dueDate: z.coerce.date().min(new Date(Date.now() - 864e5), {
      message: 'Due date cannot be past',
    }),
    category: z.string().min(1, { message: 'Category required ' }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <form className={formStyles} onSubmit={handleSubmit(taskFormSubmit)}>
      <div>
        <input
          className={inputStyles + ' rounded-tl-full rounded-bl-full'}
          type="text"
          id="title"
          placeholder="What's the next task?"
          {...register('title')}
        />
        {errors.title?.message && <p>{errors.title.message}</p>}
      </div>

      {/* <div>
        <label htmlFor="desc">Description</label>
        <input
          className={inputStyles}
          type="text"
          id="desc"
          {...register('description')}
        />
        {errors.description?.message && <p>{errors.description.message}</p>}
      </div> */}

      <div>
        <input
          className={inputStyles + ' border-l border-r'}
          type="date"
          id="dueDate"
          placeholder="dd/mm/yyyy"
          {...register('dueDate')}
        />
        {errors.dueDate?.message && <p>{errors.dueDate.message}</p>}
      </div>

      <div>
        <select
          className={inputStyles + ' rounded-tr-full rounded-br-full'}
          id="category"
          {...register('category')}
        >
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
