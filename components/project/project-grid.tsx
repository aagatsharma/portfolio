"use client";
import React from "react";
import Marquee from "../ui/marquee";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ReviewCard = ({
  title,
  link,
  thumbnail,
}: {
  title: string;
  link: string;
  thumbnail: string;
}) => {
  return (
    <Link href={link} className="flex flex-col items-center gap-2">
      <Image
        width="400"
        height="400"
        alt=""
        src={`/project/${thumbnail}.png`}
        className="w-auto h-60"
      />

      <p className="text-sm font-medium dark:text-white/40">{title}</p>
    </Link>
  );
};

const ProjectGrid = () => {
  const reviews = [
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
    {
      title: "See Car",
      link: "https://seecar.silkinv.com/",
      thumbnail: "second-car",
    },
    {
      title: "UNDP Stabilization",
      link: "http://stabilisation.gajurelsarad.com.np/",
      thumbnail: "undp",
    },
    {
      title: "Chat Application",
      link: "",
      thumbnail: "chat",
    },
    {
      title: "Bidesh Dashboard",
      link: "https://bidesh-jobs.vercel.app/dashboard",
      thumbnail: "bidesh",
    },
    {
      title: "Eatonline Dashboard",
      link: "https://apps.apple.com/be/app/eatonline-dashboard/id6444166770",
      thumbnail: "eatonline",
    },
  ];
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <div className="relative flex h-full w-full flex-col gap-10 items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="md:[--duration:50s] [--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="md:[--duration:50s] [--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default ProjectGrid;
