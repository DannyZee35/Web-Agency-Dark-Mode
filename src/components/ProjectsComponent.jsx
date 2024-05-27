"use client";
import React from "react";
import EmblaCarousel from "./carousel/EmblaCarousel";

const ProjectsComponent = () => {
  const OPTIONS = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <div className="p-5 sm:p-0">
        <h1 className="text-center font-bold text-lg mb-5 text-white">
          Check Our Projects
        </h1>
        <p className="text-sm text-primary text-center w-full sm:w-[500px] m-auto">
          Take a look at some of our recent projects to see how we&apos;ve helped
          businesses like yours succeed online.
        </p>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default ProjectsComponent;
