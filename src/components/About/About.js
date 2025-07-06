import React from 'react';
import animationData from '../../assets/animation.json';
import Lottie from 'lottie-react';
import WebIcon from '../../assets/WebIcon.png';
import AppIcon2 from '../../assets/AppIcon2.png';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.aboutImage}>
          <Lottie animationData={animationData} loop={true} />
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.imageContainer}>
              <img src={WebIcon} alt="Web developer" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I specialize in building dynamic and responsive web applications using React.js.
                I focus on creating clean, scalable UI components and reusable architecture. I follow best practices in component-based design, code splitting, and version control with Git.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.imageContainer}>
              <img src={AppIcon2} alt="App developer" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>App Developer</h3>
              <p>
                I develop cross-platform mobile applications using React Native that run smoothly on both Android and iOS.
                I’m also skilled at integrating native modules, handling offline data, and deploying apps to app stores.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
