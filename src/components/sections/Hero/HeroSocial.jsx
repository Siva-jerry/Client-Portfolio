import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiGlobe,
  FiTwitter,
  FiYoutube,
  FiFileText,
  FiLink,
} from "react-icons/fi";
import { usePortfolio } from "../../../context/PortfolioContext";

function renderSocialIcon(iconStr, labelStr) {
  const key = `${iconStr || ""} ${labelStr || ""}`.toLowerCase();
  if (key.includes("git")) return <FiGithub />;
  if (key.includes("linkedin")) return <FiLinkedin />;
  if (key.includes("insta")) return <FiInstagram />;
  if (key.includes("mail") || key.includes("email")) return <FiMail />;
  if (key.includes("twitter") || key.includes("x")) return <FiTwitter />;
  if (key.includes("youtube")) return <FiYoutube />;
  if (key.includes("resume") || key.includes("cv")) return <FiFileText />;
  if (key.includes("globe") || key.includes("web") || key.includes("site")) return <FiGlobe />;
  return <FiLink />;
}

export default function HeroSocial() {
  const { hero, contact, footer } = usePortfolio();

  let activeSocials = [];

  // 1. Try hero.socials if configured in Admin Hero form
  if (hero?.socials && Array.isArray(hero.socials) && hero.socials.length > 0) {
    activeSocials = hero.socials
      .filter((item) => item && item.url && item.url.trim() !== "" && item.url !== "#")
      .map((item, idx) => ({
        id: `hero-${idx}`,
        icon: renderSocialIcon(item.icon, item.label),
        label: item.label || "Social",
        url: item.url,
      }));
  }

  // 2. If no valid hero.socials, fall back to contact & footer CMS data
  if (activeSocials.length === 0) {
    const gh = contact?.github || footer?.github;
    const li = contact?.linkedin || footer?.linkedin;
    const ig = contact?.instagram || footer?.instagram;
    const em = contact?.email ? `mailto:${contact.email}` : "";
    const site = contact?.website;
    const resume = hero?.resumeUrl || contact?.resume || footer?.resume;

    if (gh) activeSocials.push({ id: "gh", icon: <FiGithub />, label: "GitHub", url: gh });
    if (li) activeSocials.push({ id: "li", icon: <FiLinkedin />, label: "LinkedIn", url: li });
    if (ig) activeSocials.push({ id: "ig", icon: <FiInstagram />, label: "Instagram", url: ig });
    if (em) activeSocials.push({ id: "em", icon: <FiMail />, label: "Email", url: em });
    if (site) activeSocials.push({ id: "web", icon: <FiGlobe />, label: "Website", url: site });
    if (resume) activeSocials.push({ id: "cv", icon: <FiFileText />, label: "Resume", url: resume });
  }

  // 3. Fallback to default developer profile links if DB is empty
  if (activeSocials.length === 0) {
    activeSocials = [
      { id: "d1", icon: <FiGithub />, label: "GitHub", url: "https://github.com/nimalp511" },
      { id: "d2", icon: <FiLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/nimaldap-it" },
      { id: "d3", icon: <FiInstagram />, label: "Instagram", url: "https://instagram.com" },
      { id: "d4", icon: <FiMail />, label: "Email", url: "mailto:nimalp512005@gmail.com" },
    ];
  }

  return (
    <aside id="hero-social-dock" className="hero-social-dock">
      {activeSocials.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="hero-social-item"
        >
          <span className="hero-social-glow"></span>
          <span className="hero-social-icon">{item.icon}</span>
          <span className="hero-social-label">{item.label}</span>
        </a>
      ))}
    </aside>
  );
}