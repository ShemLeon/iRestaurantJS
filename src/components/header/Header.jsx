import './Header.css'
import { useTranslation } from 'react-i18next'
import ContactButton from './contactButton/ContactButton'
import LanguageSwitcher from './languageSwitcher/LanguageSwitcher'

function Header() {
  const { t } = useTranslation()
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
            <li className="dropdown">
              <a href="#">{t('header.products')}</a>
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
