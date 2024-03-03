const sidebarWrapperStyles = `
  flex 
  flex-col 
  basis-full 
  bg-charade
`;

const logoStyles = `
  font-accent
  text-5xl
  font-extralight
`;

const logoWStyles = `
  font-normal
  text-transparent
  bg-clip-text
  bg-gradient-to-r
  from-hopbush
  via-chetwode
  to-aquamarine
`;

const Sidebar = () => {
  return (
    <div className={sidebarWrapperStyles}>
      <h1 className={logoStyles}>
        flo<span className={logoWStyles}>w</span>
      </h1>
    </div>
  );
};

export default Sidebar;
