// src/app/[locale]/page.js

import Heder from "@/components/heder/Heder";
import AboutH from "@/components/about-home/AboutH";
import ServicH from "@/components/service/ServiceH";
import "bootstrap/dist/css/bootstrap.min.css";
import Skill from "@/components/skill/Skill";
import Project from "@/components/project/Project";
import Contact from "@/components/contact/Contact";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      {/* <Loading /> */}
      <SplashScreen />
      <Heder />
      <AboutH />
      <ServicH />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}
