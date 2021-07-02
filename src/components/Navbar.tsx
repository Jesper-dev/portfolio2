import { Link } from "react-scroll";

export const Navbar: React.FC = () => {
  let links: { text: string }[] = [
    { text: "home" },
    { text: "about" },
    { text: "skills" },
    { text: "projects" },
  ];
  return (
    <nav className="navbar">
      {links.map((item, i) => {
        return (
          <Link key={i} to={item.text} spy={true} smooth={true}>
            {item.text}
          </Link>
        );
      })}
      <div className="themeSwitchWrapper">
        <label className="themeSwitch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
      </div>
    </nav>
  );
};
