type Nullable<T> = T | undefined | null;

interface Icon {
  path: string;
  alt: string;
}

interface ButtonProps {
  label?: Nullable<string>;
  icon?: Nullable<Icon>;
  handleClick: () => void;
}

const Button = ({ label = null, icon = null, handleClick }: ButtonProps) => {
  const buttonStyles = `
    p-1.5 
    rounded-full 
    bg-gradient-to-br 
    from-hopbush 
    via-chetwode 
    to-aquamarine  
    h-full 
  `;

  const iconStyles = `
    object-contain 
    h-full  
  `;

  return (
    <button className={buttonStyles} onClick={handleClick}>
      {label && label}
      {icon && <img className={iconStyles} src={icon.path} alt={icon.alt} />}
    </button>
  );
};

export default Button;
