"use client"

import GridComponent from "@/components/GridComponent";
import ButtonComponent from "@/components/ButtonComponent";
import ProjectsComponent from "@/components/ProjectsComponent";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import { GlobeDemo } from "@/components/globe";
import Contact from "@/components/Contact";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";

export default function Home() {
 
  return (
    <>
      <div id="home" className="">
        <WavyBackground
          backgroundFill={'#000000'}
          className="max-w-[1000px] m-auto "
        >
      <motion.div initial={{ opacity:0}}
      animate={{opacity:1 }}
      transition={{ duration: 1,delay:1 }}
  className="flex flex-col p-5 pt-20 sm:pt-0 mt-20 sm:mt-20 justify-center items-center"
>
  <h1 className="text-center text-white font-bold text-lg sm:text-vl">
  Elevate Your Online Presence with Our Stunning Designs
  </h1>
  <div className="max-w-[300px] w-full mt-10">
    <ButtonComponent
      textColor={"text-white"}
      bgColor={"bg-blue"}
      text={"Get in Touch"}
    />
  </div>
</motion.div>

        </WavyBackground>

        <div id="about" className="mt-[100px] sm:mt-[200px]">
          <GridComponent />
        </div>
        <div id="projects" className="mt-[100px] sm:mt-[200px]">
          <ProjectsComponent />
        </div>
        <div id="service" className="mt-[100px] sm:mt-[200px]">
          <Pricing />
        </div>
        <div className="mt-[100px] sm:mt-[200px]">
          <Faq />
        </div>

        <div id="contact" className="mt-[100px] sm:mt-[200px]">
          <h1 className="font-bold text-center text-lg mb-10 text-white">
            Let`s get in touch
          </h1>
          <Contact />
        </div>
      </div>
    </>
  );
}
