export const About: React.FC = () => {
  return (
    <section className="aboutContainer">
      <div className="header">
        <h1>About Me</h1>
      </div>
      <div className="contentContainer">
        <p>
          My name is <em>Jesper Pettersson</em> and I'm from{" "}
          <strong>Sweden, Uppsala</strong>. I'm currently studying to become a
          front-end developer at <strong>KYH, Stockholm</strong>. My interests
          include, space, our earth like nature and animals, and of course
          programming. I love to do all kinds of different projects but the ones
          that challenge me and makes me become a better programmer are my
          favourites. I enjoy working in teams but working alone is also an
          option.
          <br /> <br />
          Feel free to contact me through my socials or send me an email. I'm
          confident we can make something awesome togheter!
        </p>
      </div>
    </section>
  );
};
