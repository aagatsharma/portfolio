import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram, Linkedin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homestarter = () => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 justify-items-center md:p-28 ">
      <div className="flex gap-10 flex-col place-self-center pt-10 ">
        <h1 className="bg-gradient-to-r from-red-600 to-purple-400 text-transparent bg-clip-text md:text-7xl text-6xl font-bold leading-tight xl:h-20 ">
          Aagat Sharma
        </h1>
        <p className="md:text-4xl text-3xl text-primary/60">
          A passionate individual who always thrives to work on end to end
          products to develop sustainable, scalable, social and technical
          systems which create impact.
        </p>
        <div className="flex gap-6 items-center">
          <Link href={"https://github.com/aagatsharma"} target="_blank">
            <Button size={"icon"} className="rounded-full ">
              <Github />
            </Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/aagat-sharma-994ab71a1/"}
            target="_blank"
          >
            <Button size={"icon"} className="rounded-full ">
              <Linkedin className="text-blue-400" />
            </Button>
          </Link>
          <Link href={"https://www.facebook.com/aagatsharma18"} target="_blank">
            <Button size={"icon"} className="rounded-full">
              <Facebook className="text-blue-800" />
            </Button>
          </Link>
          <Link href={"https://www.instagram.com/aagat.sh/"} target="_blank">
            <Button size={"icon"} className="rounded-full">
              <Instagram className="text-red-500" />
            </Button>
          </Link>
        </div>
        <div>
          <Link href={"https://github.com/aagatsharma"} target="_blank">
            <Button
              variant={"shimmer"}
              size={"lg"}
              className="rounded-full h-14"
            >
              <div className=" gap-3 flex items-center">
                <Star className="text-red-600" />
                Star Me on Github
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className=" bg-gradient-to-tr from-red-600 to-purple-400 border-b-2 rounded-full p-2">
        <Image
          src={"/images/aagat.jpg"}
          alt="Aagat Image"
          className="rounded-full max-md:h-96 max-md:w-96 max-sm:h-80 max-sm:w-80"
          height={600}
          width={600}
        />
      </div>
    </div>
  );
};

export default Homestarter;
