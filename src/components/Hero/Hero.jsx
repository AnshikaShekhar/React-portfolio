import React from 'react';
import styles from"./Hero.module.css";
import heroImage from '../../assets/hero/heroImage.png';


 export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className= {styles.title} >Hi! I'm Anshika Shekhar</h1>
    <p className={styles.description}> A full-stack developer skilled in HTML, CSS, JavaScript, React, and Node.js. My website showcases my expertise in building responsive, high-quality web solutions. Explore my projects, and feel free to contact me.
        </p>
        <a href="mailto:anshikashekhar13@gmail.com" className={styles.contactBtn}>Contact Me </a>
    </div>
    <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  );
};

export default Hero
