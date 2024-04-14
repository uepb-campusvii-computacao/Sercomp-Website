import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { linksData } from "../../data/LinksData";
import logotipo from "../../assets/images/logotipo_vvisercomp.png";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.windowScroll : ""}`}>
      <div className={`${styles.navContainer}`}>
        <a href="/">
          <img src={logotipo} alt="vi sercomp" />
        </a>
        <ul
          className={`${menuOpen ? styles.menuOpened : styles.menuClosed} ${
            styles.navMenu
          }`}
        >
          {linksData.map((link, index) => (
            <li style={{position: 'relative'}} key={index}>
              <a className={styles.link} href={link.href}>
                {link.text}
              </a>
              <div className={styles.menuSuspenso} style={{padding: link.sublinks ? '16px' : '0'}}>
                {link.sublinks && link.sublinks.map((sublink, index) => (   
                  <a key={index} href={sublink.href}>{sublink.text}</a>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? (
            <i className="uil uil-multiply"></i>
          ) : (
            <i className="uil uil-bars"></i>
          )}
        </button>
      </div>
    </nav>
  );
}
