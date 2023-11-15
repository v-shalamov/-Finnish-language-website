import { FC } from 'react';
// import cn from 'classnames'
import styles from './Footer.module.css';
import cn from 'classnames';

const Footer: FC = () => (
  <div className={cn(styles.footer, styles.centeringAllElements)}>

    <div className={styles.IndentationForElements}>
      <a href='' className={styles.logo}>
        <div className={cn(styles.flexing)}>
          <img src='https://cdn-icons-png.flaticon.com/128/10601/10601200.png' alt='картинка' className={cn(styles.fullscreenimage, styles.kazmerPicture)}></img>
          <h1 >Vaikeat kielet</h1>
        </div>
      </a>
      <h4 className={cn(styles.marginForTheLastTextOfTheFirstElement)}>Сделано с ♥ автором</h4>
    </div>

    <div className={styles.IndentationForElements}>
      <h3 className={cn(styles.marginForTheTextOfTheSecondAndThirdElement)}>я в соцсетях</h3>
      <div className={styles.marginForThePhotoOfTheSecondElement}>

        <a target="blank" href='https://www.instagram.com/reetvvy/'>
          <img src='https://cdn-icons-png.flaticon.com/128/6433/6433685.png' alt='картинка' className={cn(styles.fullscreenimage, styles.stylesForInstagramAndMail)}></img>
        </a>

        <a href=''>
          <img src='https://cdn-icons-png.flaticon.com/128/4238/4238277.png' alt='картинка' className={cn(styles.fullscreenimage, styles.stylesForInstagramAndMail, styles.indentation)}></img>
        </a>

      </div>
    </div>

    <div className={cn(styles.IndentationForElements, styles.marginForThirdElement)}>
      <h3 className={cn(styles.decreasingTheMarginFortheTextOfTheThirdElement, styles.marginForTheTextOfTheSecondAndThirdElement)}>В качестве доната я принемаю</h3>
      <img src='https://cdn-icons-png.flaticon.com/128/179/179457.png' alt='картинка' className={cn(styles.kazmerPicture)}></img>
      <img src='https://cdn-icons-png.flaticon.com/128/8765/8765388.png' alt='картинка' className={cn(styles.secondPhotoOfTheThirdElement)}></img>
      <img src='https://cdn-icons-png.flaticon.com/128/196/196565.png' alt='картинка' className={cn(styles.ThirdPhotoOfTheThirdElement)}></img>
    </div>
  </div>
);

export default Footer;
