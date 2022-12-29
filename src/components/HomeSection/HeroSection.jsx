import React from "react";
import Heor3 from "./Heor3";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";

const HeroSection = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="relative container grid gap-7 min-h-[85vh] h-auto">
        <Hero1 />
        <Hero2 />
        <Heor3 />
      </div>
    </div>
  );
};

export default HeroSection;
