const FlexWrapper = ({ children }) => {
  const wrapperStyles = `
    flex 
    flex-wrap 
    w-4/5 
  `;

  return <div className={wrapperStyles}>{children}</div>;
};

export default FlexWrapper;
