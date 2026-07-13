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

      const heroData = await getHeroData();
      console.log("Hero Data =", heroData);

      setHero(heroData);


      const aboutData = await getAboutData();

console.log("About Data =", aboutData);

setAbout(aboutData);

const skillsData = await getSkillsData();

console.log("Skills Data =", skillsData);

setSkills(skillsData);


const projectsData = await getProjectsData();

console.log("Projects Data =", projectsData);

setProjects(projectsData);


const experienceData = await getExperienceData();

console.log("Experience Data =", experienceData);

setExperience(experienceData);

const certificatesData = await getCertificatesData();

console.log("Certificates Data =", certificatesData);

setCertificates(certificatesData);


const galleryData = await getGalleryData();

console.log("Gallery Data =", galleryData);

setGallery(galleryData);

const achievementsData = await getAchievementsData();

console.log(

    "Achievements Data =",

    achievementsData

);

setAchievements(

    achievementsData

);


const testimonialsData = await getTestimonialsData();

console.log(

    "Testimonials Data =",

    testimonialsData

);

setTestimonials(

    testimonialsData

);

const contactData = await getContactData();

console.log(

    "Contact Data =",

    contactData

);

setContact(

    contactData

);


const footerData = await getFooterData();

console.log(

    "Footer Data =",

    footerData

);

setFooter(

    footerData

);

      // Future
      // setAbout(await getAboutData());
      // setSkills(await getSkillsData());
      // setProjects(await getProjectsData());

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