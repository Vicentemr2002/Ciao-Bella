'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Mi Sitio</div>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/#servicio">Servicios</Link></li>
          <li><Link href="/#nosotros">Nosotros</Link></li>
          <li><Link href="/#contacto">Contacto</Link></li>
        </ul>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
