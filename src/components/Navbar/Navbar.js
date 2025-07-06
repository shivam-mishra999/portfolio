import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        Shivam Mishra
      </a>
      <div className={styles.menu}>
        <button className={styles.hamburger} onClick={handleMenu}>
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpens}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/Resume.pdf" download>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
