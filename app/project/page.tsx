"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Infinite Anime Scroll",
    link: "https://infinity-anime.vercel.app",
    thumbnail: "anime",
  },
  {
    title: "Ibtidaa Software",
    link: "https://ibtidaasoftware.com/portfolio",
    thumbnail: "ibtidaa",
  },
  {
    title: "Webex",
    link: "https://webex-react.vercel.app/",
    thumbnail: "webex",
  },
  {
    title: "Veggies Page",
    link: "https://aagatsharma.github.io/veggies-page/",
    thumbnail: "veggies",
  },
  {
    title: "Neptunes",
    link: "https://neptunes.app/",
    thumbnail: "neptunes",
  },
  {
    title: "Filmaxy",
    link: "https://filmaxy.vercel.app/",
    thumbnail: "filmaxy",
  },
];

const projectPage = () => {
  return <HeroParallax products={products} />;
};

export default projectPage;
