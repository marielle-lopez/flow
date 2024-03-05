import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sidebarWrapperStyles = `
  flex 
  flex-col 
  p-12 
  w-1/5 
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

  const iconStyles = `
    inline 
    w-7 
  `;

  return (
    <div className={sidebarWrapperStyles}>
      <h1 className={logoStyles}>
        flo<span className={logoWStyles}>w</span>
      </h1>

      <ul>
        <li>
          <Link to="/">
            <img
              className={iconStyles}
              src="../src/assets/icons/all.png"
              alt="All icon"
            />
            All
          </Link>
        </li>
        <li>
          <Link to="/today">
            <img
              className={iconStyles}
              src="../src/assets/icons/today.png"
              alt="Today icon"
            />
            Today
          </Link>
        </li>
        <li>
          <Link to="/inbox">
            <img
              className={iconStyles}
              src="../src/assets/icons/inbox.png"
              alt="Inbox icon"
            />
            Inbox
          </Link>
        </li>
        <li>
          <Link to="/personal">
            <img
              className={iconStyles}
              src="../src/assets/icons/personal.png"
              alt="Personal icon"
            />
            Personal
          </Link>
        </li>
        <li>
          <Link to="/work">
            <img
              className={iconStyles}
              src="../src/assets/icons/work.png"
              alt="Work icon"
            />
            Work
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
