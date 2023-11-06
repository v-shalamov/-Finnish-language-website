import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.css';

const Header: FC = () => {

  return (
    <div>
      {/*
    <div>
    <input type="text" className={styles.inputStyle} placeholder='title' name='title' > </input>
    </div>
  */}
    <div className={styles.navbar}>
      {/*
      <input type="text" placeholder='title' name='title' > </input>
    */}
      <div className={cn(styles.navbar, styles.desktopMenu)}>
        <NavLink to="/"></NavLink>
        <NavLink to="">Фонетика</NavLink>
        <NavLink to="">Спряжения слов</NavLink>
        <NavLink to="Фонетика">Падежи</NavLink>
        <NavLink to="Фонетика">Наклонения глаголов</NavLink>
        <NavLink to="Фонетика">Времена</NavLink>
        <NavLink to="Фонетика">Глагольные инфинетивы</NavLink>
        <NavLink to="Фонетика">Причастия</NavLink>
        <NavLink to="Фонетика">Малые части речи</NavLink>
        <NavLink to="Фонетика">Пассив и лица</NavLink>
        <NavLink to="Фонетика">Словарь</NavLink>
        <NavLink to="Фонетика">Синтаксис</NavLink>
        <NavLink to="Фонетика">Словообразование</NavLink>
        <NavLink to="Фонетика">Суффиксы обладания</NavLink>
        <NavLink to="Фонетика">Сравнительные степени</NavLink>
        <NavLink to="Фонетика">Puhekieli</NavLink>

      </div>
      
      <div className={cn(styles.navbar, styles.mobileMenu)}>
        <NavLink to="catCard">☰</NavLink>
      </div>
    </div>
    </div>
  );
};

export default Header;
