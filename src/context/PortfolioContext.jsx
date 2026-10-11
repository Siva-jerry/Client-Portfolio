import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getHeroData } from "../services/heroService";
import { getAboutData } from "../services/aboutService";
import { getSkillsData } from "../services/skillService";
import { getProjectsData } from "../services/projectService";
import { getExperienceData } from "../services/experienceService";
import { getCertificatesData } from "../services/certificateService";
import { getGalleryData } from "../services/galleryService";
import { getAchievementsData } from "../services/achievementService";
import { getTestimonialsData } from "../services/testimonialService";
import { getContactData } from "../services/contactService";
import { getFooterData } from "../services/footerService";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const [hero, setHero] = useState(null);

  // Future Sections
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [contact, setContact] = useState(null);
  const [footer, setFooter] = useState(null);
  const [settings, setSettings] = useState(null);

  async function loadPortfolio() {
    try {
      setLoading(true);

      const [
        heroResult,
        aboutResult,
        skillsResult,
        projectsResult,
        experienceResult,
        certificatesResult,
        galleryResult,
        achievementsResult,
        testimonialsResult,
        contactResult,
        footerResult,
      ] = await Promise.allSettled([
        getHeroData(),
        getAboutData(),
        getSkillsData(),
        getProjectsData(),
        getExperienceData(),
        getCertificatesData(),
        getGalleryData(),
        getAchievementsData(),
        getTestimonialsData(),
        getContactData(),
        getFooterData(),
      ]);

      if (heroResult.status === "fulfilled" && heroResult.value) {
        setHero(heroResult.value);
      }
      if (aboutResult.status === "fulfilled" && aboutResult.value) {
        setAbout(aboutResult.value);
      }
      if (skillsResult.status === "fulfilled" && skillsResult.value) {
        setSkills(skillsResult.value);
      }
      if (projectsResult.status === "fulfilled" && projectsResult.value) {
        setProjects(projectsResult.value);
      }
      if (experienceResult.status === "fulfilled" && experienceResult.value) {
        setExperience(experienceResult.value);
      }
      if (certificatesResult.status === "fulfilled" && certificatesResult.value) {
        setCertificates(certificatesResult.value);
      }
      if (galleryResult.status === "fulfilled" && galleryResult.value) {
        setGallery(galleryResult.value);
      }
      if (achievementsResult.status === "fulfilled" && achievementsResult.value) {
        setAchievements(achievementsResult.value);
      }
      if (testimonialsResult.status === "fulfilled" && testimonialsResult.value) {
        setTestimonials(testimonialsResult.value);
      }
      if (contactResult.status === "fulfilled" && contactResult.value) {
        setContact(contactResult.value);
      }
      if (footerResult.status === "fulfilled" && footerResult.value) {
        setFooter(footerResult.value);
      }
    } catch (error) {
      console.error("Portfolio Load Error :", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPortfolio();
  }, []);

  const value = {
    loading,

    hero,
    setHero,

    about,
    setAbout,

    skills,
    setSkills,

    projects,
    setProjects,

    experience,
    setExperience,

    certificates,
    setCertificates,

    gallery,
    setGallery,

    achievements,
    setAchievements,

    testimonials,
setTestimonials,



contact,
setContact,

footer,
setFooter,

settings,
setSettings,

    reloadPortfolio: loadPortfolio,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}