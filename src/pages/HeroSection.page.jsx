import React from "react";

function HeroSection() {
  return (
    <header
      className="flex h-screen flex-col items-center justify-center"
      id="home"
    >
      <div className="relative">
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full mix-blend-normal blur-3xl filter bg-scarlet animate-blob animation-delay-500 dark:mix-blend-lighten"></div>

        <div className="absolute top-0 right-0 h-96 w-96 rounded-full mix-blend-normal blur-3xl filter bg-lava animate-blob animation-delay-6000 dark:mix-blend-lighten"></div>

        <div className="absolute right-0 bottom-0 m-auto h-96 w-96 rounded-full mix-blend-normal blur-3xl filter bg-crimson animate-blob animation-delay-3000 dark:mix-blend-lighten"></div>

        <div className="absolute top-0 left-0 m-auto h-96 w-96 rounded-full mix-blend-normal blur-3xl filter bg-imperial animate-blob animation-delay-9000 dark:mix-blend-lighten"></div>

        <div className="relative text-center font-nunito">
          <h1 className="mb-5 text-4xl tracking-wider text-white">
            Hello, I'm <span className="font-black">Juan Scagni</span>
          </h1>
          <p className="text-xl text-white font-ptSans">
            I'm a front-end developer
          </p>
          <p className="text-xl text-white font-ptSans">
            with knowledge in UX/UI Design.
          </p>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
