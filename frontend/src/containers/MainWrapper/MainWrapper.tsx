import TaskForm from '../../components/TaskForm/TaskForm';

const MainWrapper = ({ children }) => {
  const wrapperStyles = `
    flex 
    flex-col 
    items-center 
    gap-8 
    mx-16 
    my-12 
    px-16 
    w-4/5
  `;

  return (
    <main className={wrapperStyles}>
      <TaskForm />
      {children}
    </main>
  );
};

export default MainWrapper;
