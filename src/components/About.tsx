export const About: React.FC = () => {
  return (
    <section className="aboutContainer" id="about">
      <div className="header">
        <h1>About Me😀</h1>
      </div>
      <div className="contentContainer" data-aos="flip-down">
        <p>
          My name is <em>Jesper Pettersson</em> and I'm from{" "}
          <strong>Sweden, Uppsala</strong>. I'm currently working at{" "}
          <strong>Caspeco AB, Uppsala</strong> and have been working there for 1
          year. My interests include movies, reading, cooking and of course
          programming. I love to do all kinds of different projects but the ones
          that challenge me and makes me become a better webdeveloper are my
          favourites. I enjoy working in teams but working alone is also an
          option.
          <br /> <br />
          Feel free to contact me through my socials or send me an email. I'm
          confident we can make something awesome together!
        </p>
      </div>
    </section>
  );
};
