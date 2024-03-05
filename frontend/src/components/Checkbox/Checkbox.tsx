const Checkbox = ({ handleChange }: { handleChange: () => void }) => {
  const checkboxStyles = `
    rounded-full 
  `;

  return (
    <input className={checkboxStyles} type="checkbox" onChange={handleChange} />
  );
};

export default Checkbox;
