export const About: React.FC = () => {
  return (
    <section className="aboutContainer" id="about">
      <div className="header">
        <h1>About Me😀</h1>
      </div>
      <div className="contentContainer" data-aos="flip-down">
        <p>
          My name is <em>Jesper Pettersson</em> and I'm from{" "}
          <strong>Sweden, Uppsala</strong>. I'm currently studying to become a
          front-end developer at <strong>KYH, Stockholm</strong>. My journey to
          become a web developer started around one year ago. My interests
          include space, our earth, such as nature and animals, and of course
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
