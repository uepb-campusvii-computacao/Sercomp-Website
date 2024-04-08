import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 0) {
          navRef.current.classList.add(styles.windowScroll);
        } else {
          navRef.current.classList.remove(styles.windowScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <a href="/">
          <h4>V SERCOMP</h4>
        </a>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}>
          <li><a className={styles.link} href="/">Inicio</a></li>
          <li><a className={styles.link} href="inscricao">Inscrição</a></li>
          <li><a className={styles.link} href="atividades">Atividades</a></li>
          <li><a className={styles.link} href="timeline">Programação</a></li>
          <li><a className={styles.link} href="hackday">HackDay</a></li>
          <li><a className={styles.link} href="articles">Artigos</a></li>
          <li><a className={styles.link} href="about">Sobre</a></li>
          <li><a className={styles.link} href="parceiros">Parceiros</a></li>
          <li><a className={styles.link} href="contact">Contato</a></li>
        </ul>
        {!menuOpen ? 
            <button onClick={toggleMenu}><i className="uil uil-bars"></i></button>
          :
            <button onClick={toggleMenu}><i className="uil uil-multiply"></i></button>
        }
      </div>
    </nav>
  );
}