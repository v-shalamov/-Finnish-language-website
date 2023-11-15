import { FC, useState, useEffect} from 'react';
import cn from 'classnames';
import styles from './Phonetics.module.css';

const Phonetics: FC = () => {

  const [fileContent, setFileContent] = useState<string>('');

 /* useEffect(() => {
    fetch('C:\\Users\\invoy\\Desktop\\Front-end\\Code\\cohort27\\front_end\\lesson_24\\code\\RTK\\src\\components\\phonetics\\Phonetics.txt')
      .then(response => response.text())
      .then(data => setFileContent(data));
  }, []);
  */
  

  return (
   <div>
    <h6>{fileContent}</h6>
   </div>
  );
};

export default Phonetics;
