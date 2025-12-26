import './Header.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import ContactButton from './contactButton/ContactButton'
import LanguageSwitcher from './languageSwitcher/LanguageSwitcher'

function Header() {
  const { t } = useTranslation()
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <span className="logo-text">iRestaurant</span>
            <img src="/src/assets/logo-wineglass.svg" alt="logo" className="logo-icon" />
          </a>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li 
              className={`dropdown ${isProductsOpen ? 'open' : ''}`}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <a href="#" className="dropdown-link">
                <span>{t('header.products')}</span>
                <svg 
                  className="dropdown-icon" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 448 512" 
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.524c9.372-9.373 24.568-9.373 33.941 0z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h4>{t('products.yourBusiness')}</h4>
                  <a href="#">{t('products.eat')}</a>
                  <a href="#">{t('products.waiter')}</a>
                  <a href="#">{t('products.cook')}</a>
                  <a href="#">{t('products.cloud')}</a>
                </div>
                <div className="dropdown-section">
                  <h4>{t('products.yourClients')}</h4>
                  <a href="#">{t('products.eatupOnline')}</a>
                  <a href="#">{t('products.eatupInStore')}</a>
                  <a href="#">{t('products.menu')}</a>
                  <a href="#">{t('products.kiosk')}</a>
                </div>
              </div>
            </li>
            <li><a href="#">{t('header.equipment')}</a></li>
            <li><a href="#">{t('header.integrations')}</a></li>
            <li><a href="#">{t('header.about')}</a></li>
            <li><a href="#">{t('header.career')}</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <LanguageSwitcher />
          <ContactButton />
        </div>
      </div>
    </header>
  )
}

export default Header