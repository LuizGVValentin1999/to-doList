import styles from './Header.module.css';
import blueLogo from '../assets/rocket.svg';
export function Header(){
    return (
        <header className={styles.header}>
        <strong >
          <img src={blueLogo} alt="Logotipo da todo" />
          <span className={styles.titleBlue} >to</span>
          <span className={styles.titlePurpleDark} >do</span>
        </strong>
      </header> 
    )
}