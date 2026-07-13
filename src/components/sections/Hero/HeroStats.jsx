import {
  FiBookOpen,
  FiFolder,
  FiAward,
  FiCode,
} from "react-icons/fi";

import { usePortfolio } from "../../../context/PortfolioContext";

export default function HeroStats() {

  const { hero } = usePortfolio();

  if (!hero?.stats) return null;

  function getIcon(iconName) {

    switch (iconName) {

      case "book":
        return <FiBookOpen />;

      case "folder":
        return <FiFolder />;

      case "award":
        return <FiAward />;

      case "code":
        return <FiCode />;

      default:
        return <FiCode />;
    }

  }

  return (

    <div className="hero-stats-wrapper">

      {hero.stats.map((item, index) => (

        <div
          className="hero-stat-card"
          key={index}
        >

          <div className="hero-stat-icon">

            {getIcon(item.icon)}

          </div>

          <div className="hero-stat-details">

            <h3>{item.value}</h3>

            <p>{item.title}</p>

            <span>{item.hover}</span>

          </div>

        </div>

      ))}

    </div>

  );

}