import { Link } from "react-scroll";

export const Navbar: React.FC = () => {
  let links: { text: string }[] = [
    { text: "home" },
    { text: "about" },
    { text: "skills" },
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
    </nav>
  );
};
