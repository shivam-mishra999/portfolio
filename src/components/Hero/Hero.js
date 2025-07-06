import React from 'react';
import HeroImageDesktop from '../../assets/Image6.png';
import HeroImageMobile from '../../assets/Image7.png';
import styles from './Hero.module.css';
import FrontendAnimation from '../../assets/FrontendAnimation.json';
import Lottie from 'lottie-react';
// import BackgroundImage from '../../assets/BackgroundImage.jpg'

export default function Hero() {

  const handleEmailClick = () => {
    console.log('pppppp');
    const email = 'mishra.shiva999@gmail.com';
    const subject = 'Let us connect';
    const body = 'Hello Shivam,';
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <section
      className={styles.container}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shivam Mishra</h1>
        <p className={styles.description}>
          I'm a Frontend Developer specializing in <span className={styles.spanEle}>React JS and React Native</span>. I have a strong foundation in building both <span className={styles.spanEle}>web and mobile applications</span>.
        </p>
        <div className={styles.buttonContainer} onClick={handleEmailClick}>
          <div className={styles.contactBtn}>
            {"Let's\nTalk"}
          </div>
        </div>
        <div className={styles.heroAnimationContainer}>
          <Lottie animationData={FrontendAnimation} loop={true} />
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <img src={HeroImageDesktop} alt="Hero" className={styles.heroImgDesktop} />
        <img src={HeroImageMobile} alt="Hero" className={styles.heroImgMobile} />
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
