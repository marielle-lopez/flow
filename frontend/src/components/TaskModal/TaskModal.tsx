import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModalContext } from '../../context/ModalContextProvider';
import { formatDate } from '../../global/helpers';
import { RefreshContext } from '../../context/RefreshContextProvider';
import { updateTaskById } from '../../services/task-services';

const TaskModal = () => {
  const { modalIsHidden, setModalIsHidden, modalTask, setModalTask } =
    useContext(ModalContext);
  const { refresh, setRefresh } = useContext(RefreshContext);

  const schema = z.object({
    title: z.string().min(1, { message: 'Title required' }),
    dueAt: z.coerce.date().min(new Date(Date.now() - 864e5), {
      message: 'Due date cannot be past',
    }),
    category: z.string().min(1, { message: 'Category required' }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: modalTask?.title,
      dueAt: modalTask?.dueAt.split('T', 1)[0],
      category: modalTask?.category,
    },
  });

  const overlayStyles = `
    w-full 
    h-full 
    fixed 
    z-1 
    backdrop-blur-sm 
  `;

  const modalWrapperStyles = `
    flex 
    w-full 
    h-full 
    fixed 
    z-2 
    justify-center 
    items-center
  `;

  const modalStyles = `
    flex 
    flex-col 
    gap-4 
    h-1/3 
    w-1/2 
    absolute 
    z-2 
    p-6 
    bg-shark 
    border 
    border-river-bed 
    rounded-2xl 
    shadow-2xl
  `;

  const headingStyles = `
    text-4xl 
    font-bold 
  `;

  const headerStyles = `
    flex 
    justify-between 
    h-10 
  `;

  const formStyles = `
    flex 
    flex-col 
    w-full 
    h-full
  `;

  const inputStyles = `
    h-10 
    bg-charade 
    border-0 
    border-river-bed 
    placeholder-river-bed 
  `;

  const footerStyles = `
    flex 
    justify-end 
  `;

  // FIXME: add parameter id to increase editTaskSubmit purity
  const editTaskSubmit = (data: object) => {
    updateTaskById(modalTask.id, data).then((res) =>
      console.log('Updated task: ', res)
    );
  };

  useEffect(() => {
    reset({
      title: modalTask?.title,
      dueAt: modalTask?.dueAt.split('T', 1)[0],
      category: modalTask?.category,
    });
  }, [modalTask]);

  useEffect(() => {
    reset();
    setModalIsHidden(true);
    setModalTask(null);
    setRefresh((refresh) => refresh + 1);
  }, [isSubmitSuccessful]);

  return (
    <>
      <div className={overlayStyles + `${modalIsHidden && 'hidden'}`}></div>
      <div className={modalWrapperStyles + `${modalIsHidden && 'hidden'}`}>
        <div className={modalStyles + `${modalIsHidden && 'hidden'}`}>
          <div className={headerStyles}>
            <h3 className={headingStyles}>Edit task</h3>
            <button
              onClick={() => {
                reset();
                setModalIsHidden(true);
                setModalTask(null);
              }}
            >
              <img
                className="h-1/2"
                src="./src/assets/icons/cross.png"
                alt="Cross icon"
              />
            </button>
          </div>
          <div className="flex grow-1 h-full">
            <form
              className={formStyles}
              onSubmit={handleSubmit(editTaskSubmit)}
            >
              <div className="flex grow-1 h-full">
                <input
                  className={
                    inputStyles +
                    `w-grow rounded-tl-full rounded-bl-full grow pl-6`
                  }
                  type="text"
                  id="title"
                  {...register('title')}
                />
                {errors.title?.message && <p>{errors.title.message}</p>}
                <input
                  className={inputStyles + ` border-l border-r`}
                  type="date"
                  id="dueAt"
                  {...register('dueAt')}
                />
                {errors.dueAt?.message && <p>{errors.dueAt.message}</p>}
                <select
                  className={inputStyles + ` rounded-tr-full rounded-br-full`}
                  id="category"
                  {...register('category')}
                >
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="university">University</option>
                </select>
                {errors.category?.message && <p>{errors.category.message}</p>}
              </div>
              <div className={footerStyles}>
                <button className="px-4 py-2 rounded-lg text-shark bg-chetwode">
                  Confirm changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskModal;
