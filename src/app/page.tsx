"use client"
import AboutContent from "./Main/About/Content";
import SkillsContent from "./Main/Skills/Content";
import HomeContent from "./Main/Home/Content";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./Nav/Navbar";
import { useEffect, useState, useRef } from "react";
import ContactContent from "./Main/Contact/Content";
import Footer from "./Footer/Footer";
import ThemeProvider from "./utils/_ThemeProvider";

export default function Home() {
  const [anchor, setAnchor] = useState("")
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // const sections = [
  //   { ref: homeRef, anchor: "home" },
  //   { ref: aboutRef, anchor: "about" },
  //   { ref: skillsRef, anchor: "skills" },
  //   { ref: contactRef, anchor: "contact" },
  // ];

  useEffect(() => {
    setAnchor(window.location.hash.substring(1))

    // const handleScroll = () => {
    //   const thresholdTop = window.innerHeight * 0.50;
    //   const thresholdBottom = window.innerHeight * -0.15;
    //   for (let i = 0; i < sections.length; i++) {
    //     const section = sections[i].ref.current?.getBoundingClientRect().top
    //     if (section && section <= thresholdTop && section >= thresholdBottom) {
    //       setAnchor(sections[i].anchor)
    //       window.location.hash = sections[i].anchor
    //     }
    //   }
    // }

    // window.addEventListener("scroll", handleScroll)

    // return () => {
    //   window.removeEventListener("scroll", handleScroll)
    // }

  }, []);

  return (
    <>
      <Navbar variant="experimental" anchor={anchor} setAnchor={setAnchor} />
      <main className="relative" id="top">
        <section className="flex justify-center px-3 bg-zinc-800" id="home">
          <HomeContent homeRef={homeRef} setAnchor={setAnchor} />
        </section>
        <section className="flex justify-center relative px-3 pt-4 bg-zinc-800" id="about">
          <AboutContent aboutRef={aboutRef} setAnchor={setAnchor} />
        </section>
        <section className="flex justify-center relative px-3 pt-4 bg-zinc-800" id="skills">
          <SkillsContent skillsRef={skillsRef} />
        </section>
        <section className="flex justify-center relative px-3 pt-4 bg-zinc-800" id="contact">
          <ContactContent contactRef={contactRef} />
        </section>
        <ScrollToTop onClick={() => setAnchor("home")} href="#home" className="fixed left-3 bottom-3 w-16 h-16 -rotate-90" />
        <Footer />
      </main>
    </>
  );
}
