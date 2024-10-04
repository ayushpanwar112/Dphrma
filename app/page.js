import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/nav/Nav.js";
import Card from "./components/main/card/Card"
import Bg from "./components/main/BG/Bg"
import Business from "./components/main/business/Business";

export default function Home() {
  return (
    <>
      <header className={styles.head_nav}>
        <nav className={styles.nav_container}>
          <a href="#">
            <Image
              src="/assest/logo.png"
              alt="sorry "
              width={70}
              height={70}
              layout="intrinsic"
            />
          </a>

          <Nav />
        </nav>
      </header>
      <main>
        <Card/>
         <Bg/>
         <Business/>
      </main>
      <footer>footer</footer>
    </>
  );
}
