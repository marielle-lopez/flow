import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '../Button/Button';
import { RefreshContext } from '../../context/RefreshContextProvider';
import { CategoriesContext } from '../../context/CategoriesContextProvider';

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
  const { refresh, setRefresh } = useContext(RefreshContext);
  const { categories } = useContext(CategoriesContext);

  const currentDate = (): string => {
    const today: Date = new Date();

    return today.toISOString().split('T', 1)[0];
  };

  const schema = z.object({
    title: z.string().min(1, { message: 'Title required ' }),
    // description: z.string(),
    dueAt: z.coerce.date().min(new Date(Date.now() - 864e5), {
      message: 'Due date cannot be past',
    }),
    categoryId: z.coerce.number().int().gte(1),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      dueAt: currentDate(),
    },
  });

  useEffect(() => {
    reset();
    setRefresh((refresh) => refresh + 1);
  }, [isSubmitSuccessful]);

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
            {...register('dueAt')}
          />
          {errors.dueAt?.message && <p>{errors.dueAt.message}</p>}
        </div>

        <div>
          <select
            className={inputStyles + ' rounded-tr-full rounded-br-full'}
            id="categoryId"
            {...register('categoryId')}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId?.message && <p>{errors.categoryId.message}</p>}
        </div>
      </div>

      <Button
        icon={{ path: './src/assets/icons/plus.png', alt: 'Plus icon' }}
      />
    </form>
  );
};

export default TaskForm;
