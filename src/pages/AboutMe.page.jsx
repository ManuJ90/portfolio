import React from "react";
import SectionTitle from "../components/SectionTitle.component";

function AboutMe() {
  return (
    <div className="static w-full" id="aboutMe">
      <SectionTitle>About Me</SectionTitle>

      <div className="relative p-9">
        <div className="absolute top-0 left-0 m-auto h-56 w-96 rounded-full mix-blend-darken blur-2xl filter bg-persimmon dark:bg-orangeRed animate-blob animation-delay-500 dark:mix-blend-lighten"></div>
        <div className="absolute right-0 bottom-0 h-56 w-96 rounded-full mix-blend-darken blur-2xl filter bg-bittersweet dark:bg-international animate-blob animation-delay-6000 dark:mix-blend-lighten"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0 m-auto h-56 w-96 rounded-full mix-blend-darken blur-2xl filter bg-tangelo dark:bg-orangeFruit animate-blob animation-delay-1000 dark:mix-blend-lighten"></div>

        <div className="relative flex flex-col gap-6">
          <p className="dark:text-white">
            At the end of 2019 I decided to make a 180 degree on my professional
            career, I started with some internet courses and tutorials, and on
            February I sign up on a UX/UI design course, then I did an
            introduction course in front-end programming and finished with a
            Coding Bootcamp.
          </p>
          <p className="dark:text-white">
            In 2021 I had the opportunity to join Globant to learn Test
            Automation, and be part of two teams, Disney ESPN and Banamex. At
            the beginning of 2022 and in search of being able to work in the
            front-end area and face new challenges, I started working at Outside
            The Cube, a growing Argentine startup.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
