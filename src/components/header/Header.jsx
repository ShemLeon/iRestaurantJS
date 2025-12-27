import "./Header.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ContactButton from "./contactButton/ContactButton";
import LanguageSwitcher from "./languageSwitcher/LanguageSwitcher";
import DropdownMenu from "./dropDownMenu/DropDownMenu";
import { productsDropdownData } from "./dropDownMenu/models/DropDownData";
import ChevronIcon from "./dropDownMenu/components/ChevronIcon";

function Header() {
  const { t } = useTranslation();
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <a href="/">
              <span className="logo-text">iRestaurant</span>
              <img
                src="/src/assets/logo-wineglass.svg"
                alt="logo"
                className="logo-icon"
              />
            </a>
          </div>

          <nav className="nav-menu">
            <ul>
              <li
                className={`dropdown ${isProductsOpen ? "open" : ""}`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <a href="#" className="dropdown-link">
                  <span>{t("header.products")}</span>
                  <ChevronIcon className="dropdown-icon" />
                </a>
                <DropdownMenu
                  isOpen={isProductsOpen}
                  content={productsDropdownData}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  t={t}
                />
              </li>
              <li>
                <a href="#">{t("header.equipment")}</a>
              </li>
              <li>
                <a href="#">{t("header.integrations")}</a>
              </li>
              <li>
                <a href="#">{t("header.about")}</a>
              </li>
              <li>
                <a href="#">{t("header.career")}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <LanguageSwitcher />
          <ContactButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
