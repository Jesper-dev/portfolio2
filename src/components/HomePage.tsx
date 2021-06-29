// import { useState } from "react";

export const HomePage: React.FC = () => {
  let linksList: { href: string; icon: string }[] = [
    { href: "https://github.com/Jesper-dev", icon: "fab fa-github" },
    {
      href: "https://www.linkedin.com/in/jesper-pettersson-218245179/",
      icon: "fab fa-linkedin-in",
    },
    { href: "mailto:jesper@jesperp.se", icon: "fas fa-envelope" },
  ];

  return (
    <section className="homePageContainer">
      <div className="textContainer">
        <h1>Hello!</h1>
        <p>
          My name is Jesper <span>Pettersson</span> and i'm currently studying
          to become a <span>Front-End Developer</span>!
        </p>
        <div className="linkContainer">
          {/* Renders all the icons/links on the home page */}
          {linksList.map((item, i) => {
            return (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className={item.icon}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
