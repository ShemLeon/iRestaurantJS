import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <span className="logo-text">iRestaurant</span>
          </a>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li className="dropdown">
              <a href="#">Продукты</a>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h4>Ваш бизнес</h4>
                  <a href="#">Eat - Управление рестораном</a>
                  <a href="#">Waiter - Мобильный приём заказов</a>
                  <a href="#">Cook - Kitchen display</a>
                  <a href="#">Cloud - Статистика и KPI</a>
                </div>
                <div className="dropdown-section">
                  <h4>Ваши клиенты</h4>
                  <a href="#">EatUp Online - Заказы и доставка</a>
                  <a href="#">EatUp In Store - QR меню</a>
                  <a href="#">Menu - Self Order</a>
                  <a href="#">Kiosk - Терминалы самообслуживания</a>
                </div>
              </div>
            </li>
            <li><a href="#">Оборудование</a></li>
            <li><a href="#">Интеграции</a></li>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Карьера</a></li>
          </ul>
        </nav>
        
        <a href="#contact" className="btn-contact">Связаться</a>
      </div>
    </header>
  )
}

export default Header