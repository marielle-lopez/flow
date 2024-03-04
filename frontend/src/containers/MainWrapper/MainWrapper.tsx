import TaskForm from '../../components/TaskForm/TaskForm';

const MainWrapper = ({ children }) => {
  const wrapperStyles = `
    flex-col 
    flex-wrap 
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
