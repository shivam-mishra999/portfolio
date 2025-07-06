import React from "react";
import Email from '../../assets/email.png';
import Linkedin from '../../assets/linkedin.png';
import Git from '../../assets/git.png';
import animation2 from '../../assets/animation2.json';
import Lottie from 'lottie-react';
import styles from "./Contact.module.css";
import BackgroundImage2 from '../../assets/BackgroundImage2.jpg';

export const Contact = () => {

  const handleEmailClick = () => {
    const email = 'mishra.shiva999@gmail.com';
    const subject = 'Let us connect';
    const body = 'Hello Shivam,';
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <footer
      id="contact"
      className={styles.container}
      style={{
        backgroundImage: `url(${BackgroundImage2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <div className={styles.aboutImage}>
          <Lottie animationData={animation2} loop={true} />
        </div>
      </div>
      <ul className={styles.links}>
        <li className={styles.link} onClick={handleEmailClick}>
          <div className={styles.iconContainer}>
            <img src={Email} alt="Email icon" />
          </div>
          <a href="mailto:mishra.shiva999@gmail.com">mishra.shiva999@gmail.com</a>
        </li>
        <li className={styles.link}>
          <div className={styles.iconContainer}>
            <img
              src={Linkedin}
              alt="LinkedIn icon"
            />
          </div>
          <a href="https://www.linkedin.com/in/shivam-mishra-945456129/" target="_blank"  rel="noreferrer">https://www.linkedin.com/shivam</a>
        </li>
        <li className={styles.link}>
          <div className={styles.iconContainer}>
            <img src={Git} alt="Github icon" />
            </div>
            <a href="https://github.com/shivam-mishra999" target="_blank"  rel="noreferrer">github.com/shivam-mishra999</a>
        </li>
      </ul>
    </footer>
  );
};