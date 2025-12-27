import "./HeroText.css";
import { useTranslation } from "react-i18next";

function HeroText() {
  const { t } = useTranslation();

  return (
    <section className="hero-text">
      <div className="hero-text-container">
        <h3 className="hero-subtitle">{t("hero.subtitle")}</h3>
        <h1 className="hero-title">
          <span>{t("hero.titleLine1")}</span>
          <br />
          <span>{t("hero.titleLine2")}</span>
        </h1>
        <a href="#contact" className="hero-button">
          <span className="hero-button-text">{t("hero.button")}</span>
        </a>
      </div>
    </section>
  );
}

export default HeroText;