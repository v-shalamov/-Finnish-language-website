import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.css';

const Header: FC = () => {

  function showSquare() {
    styles.display = 'block';
    const [count, setCount] = useState(0);
  }
  
  function hideSquare() {
    document.getElementById('square').style.display = 'none';
  }

  return (
    

    <div className={cn(styles.navbar, styles.border, styles.FlexTotalHeader, styles.paddingForTheEntireHeader)}>
      
      

      <div className={cn(styles.navbar, styles.desktopMenu, styles.flectionPicturesOfFinlandWithOtherElements)}>
        <img src='https://cdn-icons-png.flaticon.com/128/10601/10601200.png' alt='картинка' className={styles.logophoto}></img>
        <></>

        <div>
          
          <div className={cn(styles.flectionOfTwoElements)}>
            <input type="text" placeholder='Поиск статей о финском языке' name='title' className={cn(styles.searchLine, styles.searchLine)}/>

            <div className={cn(styles.shiftElementsToTheRight)}>
              <img src='https://cdn-icons-png.flaticon.com/128/565/565635.png' alt='картинка' className={cn(styles.translatorsPhoto, styles.SideElementIndentation)}></img>
              <h4 className={cn(styles.LanguageNameIndentation)}>русский</h4>
              <img src='https://cdn-icons-png.flaticon.com/128/2609/2609201.png' alt='картинка' className={cn(styles.ArrowToChangeLanguage, styles.LanguageNameIndentation)}></img>
              <h4 className={cn(styles.SideElementIndentation)}>Log in</h4>
              <img src='https://cdn-icons-png.flaticon.com/128/4254/4254068.png' alt='картинка' className={cn(styles.translatorsPhoto, styles.SideElementIndentation)}></img>
            </div>

          </div>

          <div className={cn(styles.navbar)}>
            <NavLink to="/"></NavLink>
            <NavLink to="phonetics">Фонетика</NavLink>
            <NavLink to="" className={styles.removingMarginFromTheFirstElement}>Падежи</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Спряжения слов</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Наклонения глаголов</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Времена</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Глагольные инфинетивы</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Причастия</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Малые части речи</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Пассив и лица</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Словарь</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Синтаксис</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Словообразование</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Суффиксы обладания</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Сравнительные степени</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Puhekieli</NavLink>
            <NavLink to="Фонетика" className={styles.removingMarginFromTheFirstElement}>Вводная часть в лингвистику</NavLink>
          </div>
        </div>
      </div>
      
      <div className={cn(styles.navbar, styles.mobileMenu)}>
        <NavLink to="catCard">☰</NavLink>
      </div>
    </div>
    
  );
};

export default Header;

// <div id="square"></div>