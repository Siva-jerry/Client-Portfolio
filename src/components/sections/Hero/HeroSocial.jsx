import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    label: "GitHub",
    url: "https://github.com/nimalp511",
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/nimaldap-it",
  },
  {
    id: 3,
    icon: <FiInstagram />,
    label: "Instagram",
    url: "#",
  },
  {
    id: 4,
    icon: <FiMail />,
    label: "Email",
    url: "mailto:nimalp512005@gmail.com",
  },
];

export default function HeroSocial() {

  return (

    <aside
      id="hero-social-dock"
      className="hero-social-dock"
    >

      {socialLinks.map((item) => (

        <a

          key={item.id}

          href={item.url}

          target="_blank"

          rel="noreferrer"

          className="hero-social-item"

        >

          <span className="hero-social-glow"></span>

          <span className="hero-social-icon">

            {item.icon}

          </span>

          <span className="hero-social-label">

            {item.label}

          </span>

        </a>

      ))}

    </aside>

  );

}