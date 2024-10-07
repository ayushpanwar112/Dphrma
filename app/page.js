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
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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

   
    <Parallax  pages={4} className="animation">  
      <ParallaxLayer offset={0} speed={0.3}>
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
      </ParallaxLayer>
    
    
        
           <main> 
          <ParallaxLayer
          offset={0.1} speed={0.5} >
                <Card/>
          </ParallaxLayer>
<ParallaxLayer offset={0.2} speed={4.4}>
          <Bg/>
</ParallaxLayer>
<ParallaxLayer offset={1} speed={0.8}>
          <Business/>
</ParallaxLayer>
<ParallaxLayer offset={1.9} speed={1.8}>
          <Partners/>
</ParallaxLayer> 
<ParallaxLayer offset={2} speed={2.5}>
        <Happy/>
</ParallaxLayer>
<ParallaxLayer offset={2.7} speed={2.8}>
       <Question/>
</ParallaxLayer>
    
          </main>
          <footer>  
         
     
          <ParallaxLayer offset={3} speed={0.1}>
               <Footer/>
</ParallaxLayer> </footer>
        </Parallax>

      
     
      
      
    
    </>
  );
}