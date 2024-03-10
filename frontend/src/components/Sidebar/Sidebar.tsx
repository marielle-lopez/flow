import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sidebarWrapperStyles = `
    flex 
    flex-col 
    gap-8 
    p-12 
    w-1/5 
    bg-charade 
  `;

  const sidebarListStyles = `
    flex 
    flex-col 
    gap-2 
  `;

  const sidebarListItemStyles = `
    flex 
    gap-2 
    items-center 
  `;

  const logoStyles = `
    flex 
    gap-0.5 
    items-end 
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
      {/* FIXME: accent 'w' should not use an img */}
      <h1 className={logoStyles}>
        {/* flo<span className={logoWStyles}>w</span> */}
        flo
        <img
          className="w-11 mb-1.5"
          src="./src/assets/icons/logo-thumbnail.png"
          alt="Flow thumbnail logo"
        />
      </h1>

      <ul className={sidebarListStyles}>
        <li>
          <Link className={sidebarListItemStyles} to="/">
            <img
              className={iconStyles}
              src="../src/assets/icons/all.png"
              alt="All icon"
            />
            All
          </Link>
        </li>
        <li>
          <Link className={sidebarListItemStyles} to="/today">
            <img
              className={iconStyles}
              src="../src/assets/icons/today.png"
              alt="Today icon"
            />
            Today
          </Link>
        </li>
        <li>
          <Link className={sidebarListItemStyles} to="/inbox">
            <img
              className={iconStyles}
              src="../src/assets/icons/inbox.png"
              alt="Inbox icon"
            />
            Inbox
          </Link>
        </li>
        <li>
          <Link className={sidebarListItemStyles} to="/personal">
            <img
              className={iconStyles}
              src="../src/assets/icons/personal.png"
              alt="Personal icon"
            />
            Personal
          </Link>
        </li>
        <li>
          <Link className={sidebarListItemStyles} to="/work">
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
