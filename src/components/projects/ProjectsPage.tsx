import { ProjectItem } from "./ProjectItem";
import LetsVest from "./img/LetsVest.jpg";
import culcitra from "./img/culcitra.jpg";
import photoportfolio from "./img/photoportfolio.jpg";

export const ProjectsPage: React.FC = () => {
  const projects: {
    title: string;
    url: string;
    desc: string;
    techs: Array<string>;
    pic: string;
  }[] = [
    {
      title: "Culcitra",
      url: "http://culcitra.surge.sh/",
      desc: "Culcitra is a card game made in ReactJS. I made this project togheter with Jon Sundelöf and this project was very challenging for me at that moment. But i learned alot from it.",
      techs: ["React", "Redux"],
      pic: culcitra,
    },
    {
      title: "Lets Vest",
      url: "http://lets-vest.surge.sh/",
      desc: "Lets Vest is a website where you can learn to invest and at the same time interact with other users. This was a project i made in school and I'm very proud of it.",
      techs: ["React", "Redux", "Axios", "Styled Components"],
      pic: LetsVest,
    },
    {
      title: "Photo Portfolio",
      url: "http://photoportfolio.surge.sh/",
      desc: "This is a simple project where i made a photo portfolio. This was challenging for me at that time because i was new to Vue and Nuxt. But if you know Vue and Nuxt the project itself is not very challenging, it's a good beginner project.",
      techs: ["Nuxt"],
      pic: photoportfolio,
    },
  ];

  return (
    <section className="projectsContainer" id="projects">
      <div className="header">
        <h1>Projects🛠️</h1>
      </div>
      {projects.map((item, i) => {
        return (
          <ProjectItem
            key={i}
            title={item.title}
            url={item.url}
            desc={item.desc}
            techs={item.techs}
            pic={item.pic}
          />
        );
      })}
    </section>
  );
};
