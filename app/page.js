 "use client"
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

import Card from "./components/main/card/Card"
import Bg from "./components/main/BG/Bg"
import Business from "./components/main/business/Business";
import Partners from "./components/main/card/partner/Partners";
import Happy from "./components/main/happy/Happy";
import Question from "./components/main/question/Question";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

import Loading from "./components/loading/Loading";
import { useState, useEffect } from "react";
config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);
  return (
    <>
    {loading &&<Loading/>}
      <header className={styles.head_nav}>
        <nav className={styles.nav_container}>
          <a href="#">
            <Image className="main_logo"
              src="/assest/logo.png"
              alt="sorry "
              width={70}
              height={70}
              layout="intrinsic"
            />
          </a>

        <Nav/>
        </nav>
      </header>
      <main>
        <Card/>
         <Bg/>
         <Business/>
         <Partners/>
           <Happy/>
           <Question/>
       
      </main>
      
      <footer> 
      <Footer/>
      </footer>
    
    </>
  );
}
