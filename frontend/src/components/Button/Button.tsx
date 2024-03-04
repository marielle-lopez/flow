type Nullable<T> = T | undefined | null;

interface Icon {
  path: string;
  alt: string;
}

interface ButtonProps {
  label?: Nullable<string>;
  icon?: Nullable<Icon>;
}

const Button = ({ label = null, icon = null }: ButtonProps) => {
  const buttonStyles = `
    p-1.5 
    rounded-full 
    bg-gradient-to-br 
    from-hopbush 
    via-chetwode 
    to-aquamarine 
  `;

  const iconStyles = `
    h-full 
  `;

  return (
    <button className={buttonStyles}>
      {label && label}
      {icon && <img className={iconStyles} src={icon.path} alt={icon.alt} />}
    </button>
  );
};

export default Button;