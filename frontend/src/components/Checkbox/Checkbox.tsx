const Checkbox = ({
  handleChange,
  isChecked,
}: {
  handleChange: () => void;
  isChecked: boolean;
}) => {
  const checkboxStyles = `
    rounded-full 
  `;

  return (
    <input
      className={checkboxStyles}
      type="checkbox"
      onChange={handleChange}
      defaultChecked={isChecked}
      aria-checked={isChecked}
    />
  );
};

export default Checkbox;
