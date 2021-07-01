export const Skills: React.FC = () => {
  let iconsList: { icon: string; style: string; text: string }[] = [
    { icon: "fab fa-html5", style: "red", text: "HTML" },
    { icon: "fab fa-css3", style: "blue", text: "CSS3" },
    { icon: "fab fa-sass", style: "pink", text: "SASS" },
    { icon: "fab fa-js-square", style: "yellow", text: "JAVASCRIPT" },
    { icon: "fab fa-react", style: "blue", text: "REACT" },
    { icon: "fab fa-git-alt", style: "crimson", text: "GIT" },
    { icon: "fab fa-github-square", style: "black", text: "GITHUB" },
  ];

  return (
    <section className="skillsContainer" id="skills">
      <div className="header">
        <h1>Skills📚</h1>
      </div>
      <div className="skillsIconsWrapper" data-aos="flip-down">
        {iconsList.map((item, i) => {
          return (
            <div key={i} className="iconWrapper">
              <i className={item.icon} style={{ color: item.style }}></i>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
