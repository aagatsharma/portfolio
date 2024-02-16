import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const contactPage = () => {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-600  text-center font-sans font-bold">
          Contact Me
        </h1>

        <p className="text-primary/60 text-lg md:text-xl max-w-lg mx-auto my-2 text-center relative z-10">
          {`If you want to know more about me or my work, or if you would just
          like to say hello, send me a message. I'd love to hear from you.`}
        </p>
        {/* <input
          type="text"
          placeholder="aagats72@gmail.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-5  bg-neutral-950 placeholder:text-neutral-700"
        /> */}
        <div className="grid w-full items-center gap-6">
          <div className="z-10">
            <Label className="z-10 text-lg text-primary/60">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your Name.."
              className="z-10 w-full rounded-lg"
            />
          </div>
          <div className="z-10">
            <Label className="z-10 text-lg text-primary/60">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email.."
              className="z-10 w-full rounded-lg"
            />
          </div>
          <div className="z-10">
            <Label className="z-10 text-lg text-primary/60">Message</Label>
            <Textarea
              placeholder="Type your message here."
              className="z-10 w-full"
            />
          </div>
          <div className="z-10">
            <button className="p-[3px] relative rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-full" />
              <div className="px-8 py-2  bg-primary-foreground rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
                Contact
              </div>
            </button>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default contactPage;
