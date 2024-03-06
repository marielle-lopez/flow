import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '../Button/Button';

const formStyles = `
  flex 
  gap-4 
  h-10 
  w-full 
`;

const inputWrapperStyles = `
  flex 
  grow 
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
    dueAt: z.coerce.date().min(new Date(Date.now() - 864e5), {
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

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <form className={formStyles} onSubmit={handleSubmit(taskFormSubmit)}>
      <div className={inputWrapperStyles}>
        <div className="flex grow">
          <input
            className={
              inputStyles + ' rounded-tl-full rounded-bl-full grow pl-6'
            }
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
            id="dueAt"
            placeholder="dd/mm/yyyy"
            {...register('dueAt')}
          />
          {errors.dueAt?.message && <p>{errors.dueAt.message}</p>}
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
      </div>

      <Button
        icon={{ path: './src/assets/icons/plus.png', alt: 'Plus icon' }}
        handleClick={handleClick}
      />
    </form>
  );
};

export default TaskForm;
