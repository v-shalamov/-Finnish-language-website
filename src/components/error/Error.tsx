import { FC } from 'react';
// import cn from 'classnames'
import styles from './Error.module.css'

const Error: FC = () => {
  console.log('Lets go!');
  return (
    <div>
      <p className={styles.Error404}>404</p>
    </div>
  );
};

export default Error;
