function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          FastFood
        </a>
        <nav className="nav">
          <a href="#menu">Меню</a>
          <a href="#about">О нас</a>
          <a href="#contact">Контакты</a>
          <button id="cart-btn" className="cart-button">
            <span id="cart-total-price">0 ₽</span>
            <span id="cart-item-count">0</span>
            🛒
          </button>
        </nav>
      </div>
    </header>
  );
}
export default Header;
