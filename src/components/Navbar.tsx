import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const [themeDark, setThemeDark] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme === "dark") setThemeDark(true);
  }, []);

  useEffect(() => {
    if (themeDark) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("darkTheme");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("darkTheme");
    }
  }, [themeDark]);

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
          <input
            type="checkbox"
            id="checkbox"
            onChange={() => setThemeDark(!themeDark)}
            checked={themeDark}
          />
          <div className="slider round"></div>
        </label>
      </div>
    </nav>
  );
};
