import React from 'react';
import styles from "./about.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFiverr, faDribbble, faBehance, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Nav from '@/app/components/nav/Nav';

export default function About() {
  return (
    <div className={styles.container}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <div className={styles.aboutUs}>
          <h2 className="heading">About Us:</h2>
          <p className="para">
            We are a team of UI/UX designers with over 2 years of experience
            creating intuitive and engaging digital products. We specialize in
            User Interface Design, User Experience Design, Wireframing, and
            Prototyping. We are passionate about understanding user
            problems, needs, and motivations, and designing solutions that
            enhance their experience and satisfaction.
          </p>
        </div>
        <div className={styles.freelance}>
          <h2 className="heading">Contact me for Freelance services:</h2>
          <ul className={styles.servicesList}>
            <li>
              <FontAwesomeIcon icon={faFiverr} className={styles.icon} color="green" />
              &nbsp; Fiverr: <a href="https://www.fiverr.com/uxchandan" className={styles.link}>https://www.fiverr.com/uxchandan</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faDribbble} className={styles.icon} color="#ea4c89" />
              &nbsp; Dribbble: <a href="https://dribbble.com/uxchandan" className={styles.link}>https://dribbble.com/uxchandan</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faBehance} className={styles.icon} color="black" />
              &nbsp; Behance: <a href="https://www.behance.net/uxchandan" className={styles.link}>https://www.behance.net/uxchandan</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPinterest} className={styles.icon} color="red" />
              &nbsp; Pinterest: <a href="http://pinterest.com/uxchandan" className={styles.link}>http://pinterest.com/uxchandan</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn}>
        <img src="/assest/logo.png" alt="UX Chandan & Team"  width={150} height={150}className={styles.logo} />
        <h2 className={styles.logo_name}>UX Chandan & Team</h2>
      </div>
    </div>
  );
}
