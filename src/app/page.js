import styles from "./page.module.scss";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Footer from "@/components/Footer";
import Landing from "@/sections/Landing";
import Navbar from "@/components/Navbar";
import Projects from "@/sections/Projects";
import Skill from "@/sections/Skill";
import WhatsAppButton from "@/components/WhatsAppButton";
import { dataProjects, dataSkills, itemsNav } from "../components/Data";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar itemsNav={itemsNav} />
      <Landing />
      <div className={styles.line}/>
      <About />
      <div className={styles.line}/>
      <Experience />
      <div className={styles.line}/>
      <Projects dataProjects={dataProjects} />
      <div className={styles.line}/>
      <Skill dataSkills={dataSkills} />
      <div className={styles.line}/>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
