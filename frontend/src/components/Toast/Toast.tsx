const Toast = () => {
  const toastStyles = `
    flex 
    items-center 
    justify-between 
    absolute 
    top-4 
    right-4 
    w-72 
    h-16 
    p-4 
    text-sm 
    bg-shark 
    border 
    border-charade 
    rounded-xl 
  `;

  const toastIconStyles = `
    w-8 
  `;

  const crossIconStyles = `
    grayscale 
    brightness-200 
    opacity-25 
    h-4 
    w-4 
  `;

  return (
    <div className={toastStyles}>
      <div className="flex items-center gap-4">
        <img
          className={toastIconStyles}
          src="./src/assets/icons/tick.png"
          alt="Tick icon"
        />
        <p>Toast message goes here</p>
      </div>
      <button>
        <img
          className={crossIconStyles}
          src="./src/assets/icons/cross.png"
          alt="Cross icon"
        />
      </button>
    </div>
  );
};

export default Toast;
