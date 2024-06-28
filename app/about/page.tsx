import { AboutIconCard } from "@/components/about/AboutIconCard";
import IconCloud from "@/components/ui/icon-cloud";
import React from "react";

const tech = [
  {
    title: "Bootstrap",
    icon: "bootstrap",
  },

  {
    title: "CSS",
    icon: "css",
  },
  {
    title: "Express",
    icon: "express",
  },
  {
    title: "Firebase",
    icon: "firebase",
  },
  {
    title: "Git",
    icon: "git",
  },
  {
    title: "Heroku",
    icon: "heroku",
  },
  {
    title: "Html",
    icon: "html",
  },
  {
    title: "Javascript",
    icon: "javascript",
  },
  {
    title: "MongoDB",
    icon: "mongodb",
  },
  {
    title: "Node.js",
    icon: "nodejs",
  },
  {
    title: "Postman",
    icon: "postman",
  },
  {
    title: "React Native",
    icon: "react",
  },
  {
    title: "React",
    icon: "react",
  },
  {
    title: "Redux",
    icon: "redux",
  },
  {
    title: "Saas",
    icon: "saas",
  },
  {
    title: "Tailwind",
    icon: "tailwind",
  },
  {
    title: "Typescript",
    icon: "typescript",
  },
];

const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "bootstrap",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

const AboutPage = () => {
  return (
    <div className="py-10 max-w-7xl m-auto p-5">
      <div className="flex w-full justify-center">
        <h1 className="bg-gradient-to-r from-red-600 to-purple-400 text-transparent bg-clip-text md:text-7xl text-6xl font-bold leading-tight xl:h-20 ">
          About Me
        </h1>
      </div>
      <div className="py-10 flex flex-col gap-5">
        <h1 className="md:text-5xl text-4xl">A bit about me</h1>
        <h2 className="md:text-2xl text-xl text-primary/60">
          {`I'm a self-taught web developer and Mobile App Developer with
          experience in implementation of wire frames and design flows into high performance
          software applications. I take into consideration the user experience
          while writing reusable and efficient code. I passionately combine good
          design, technology, and innovation in all my projects, which I like to
          accompany from the first idea to release.`}
        </h2>
      </div>
      <div className="pt-10 flex flex-col gap-5">
        <h1 className="md:text-5xl text-4xl">Technologies and Tools</h1>
        <h2 className="md:text-2xl text-xl text-primary/60">
          {`Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.`}
        </h2>
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 ">
        {tech.map((tech) => (
          <AboutIconCard key={tech.title} title={tech.title} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
