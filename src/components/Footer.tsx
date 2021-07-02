export const Footer = () => {
  const linksList: { href: string; text: string }[] = [
    { href: "https://github.com/Jesper-dev", text: "My Github!" },
    {
      href: "https://www.linkedin.com/in/jesper-pettersson-218245179/",
      text: "Connect with me on LinkedIN!",
    },
    { href: "mailto:jesper@jesperp.se", text: "Email me!" },
  ];

  return (
    <footer className="footer">
      <p>Jesper Pettersson</p>
      <div className="linksWrapper">
        {linksList.map((item, i) => {
          return (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.text}
            </a>
          );
        })}
      </div>
    </footer>
  );
};
