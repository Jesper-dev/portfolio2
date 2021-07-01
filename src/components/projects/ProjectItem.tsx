interface Project {
  title: string;
  desc: string;
  techs: Array<string>;
  url: string;
  pic: string;
}

export const ProjectItem = ({ title, desc, techs, url, pic }: Project) => {
  return (
    <div className="projectWrapper" data-aos="flip-down">
      <h1>{title}</h1>
      <div className="innerWrapper">
        <div className="contentLeft">
          <img src={pic} />
        </div>
        <div className="contentRight">
          <p>{desc}</p>
          {techs.map((item, i: number) => {
            return (
              <ul className="techsList" key={i}>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <a href={url}>Visit</a>
    </div>
  );
};
