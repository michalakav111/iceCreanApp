import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        🍦
      </div>

      <div className={s.titleContainer}>
        <h1>Ice-Cream Kiosk</h1>
        <p>Happiness in every scoop!</p>
      </div>
    </header>
  );
}

export default Header;