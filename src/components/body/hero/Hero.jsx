import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-text-container">
        <h3 className="hero-subtitle">{t("hero.subtitle")}</h3>
        <h1 className="hero-title">{t("hero.title")}</h1>
        <a href="#contact" className="hero-button">
          <span className="hero-button-text">{t("hero.button")}</span>
        </a>
      </div>
      <div className="hero-video-container">
        <video className="hero-video" autoPlay muted playsInline poster="">
          <source
            src="https://www.ipratico.com/wp-content/uploads/2025/09/ipratico_eatup_selforder.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay"></div>
      </div>

      
    </section>
  );
}

export default Hero;
