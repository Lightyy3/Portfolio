"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { BackgroundLines } from "@/components/ui/Lines";
import { WavyBackground } from "@/components/ui/Wavy";
import { BackgroundBeams } from "@/components/ui/Beams";
import { GoogleGeminiEffect } from "@/components/ui/Gemini";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import { Globe } from "@/components/ui/Globe";
import GridGlobe from "@/components/ui/GridGlobe";
import { GlobeDemo } from "@/components/ui/GlobeDemo";
import { BackgroundBeamsWithCollision } from "@/components/ui/BeamsColission";
import { FocusCards } from "@/components/ui/FocusCards";
import { CardStack } from "@/components/ui/CardStack";
import { CardDemo, CardSkeletonContainer } from "@/components/ui/AnimatedCard";

const Home = () => {
  const CARDS = [
    {
      title: "NextJS",
      src: "/next.svg",
    },
    {
      title: "Typescript",
      src: "/ts.svg",
    },
    {
      title: "Tailwind CSS",
      src: "/tail.svg",
    },
    {
      title: "ThreeJS",
      src: "/three.svg",
    },
    {
      title: "React",
      src: "/re.svg",
    },
    {
      title: "GSAP",
      src: "/gsap.svg",
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {/* <BackgroundGradientAnimation /> */}
        {/* <BackgroundBeams /> */}

        <GlobeDemo />

        <Hero />
        <FocusCards cards={CARDS} />
        <CardDemo />
        {/* <CardStack items={CARDS} /> */}
        {/* <Grid /> */}
        <RecentProjects />
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
