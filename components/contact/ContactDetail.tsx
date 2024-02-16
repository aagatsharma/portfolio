"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
const ContactDetail = () => {
  const form = useRef<any>();
  const [disable, setDisable] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vtgndoh", "template_e136xd7", form.current, {
        publicKey: "g748fWlV2V3XKgPMc",
      })
      .then(
        () => {
          setDisable(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form
      className="grid w-full items-center gap-6"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="z-10">
        <Label className="z-10 text-lg text-primary/60">Name</Label>
        <Input
          type="text"
          name="user_name"
          placeholder="Enter your Name.."
          className="z-10 w-full rounded-lg"
        />
      </div>
      <div className="z-10">
        <Label className="z-10 text-lg text-primary/60">Email</Label>
        <Input
          type="email"
          name="user_email"
          placeholder="Enter your email.."
          className="z-10 w-full rounded-lg"
        />
      </div>
      <div className="z-10">
        <Label className="z-10 text-lg text-primary/60">Message</Label>
        <Textarea
          name="message"
          placeholder="Type your message here."
          className="z-10 w-full"
        />
      </div>
      <div className="z-10">
        <button
          className="p-[3px] relative rounded-full"
          type="submit"
          disabled={disable}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-full" />
          <div className="px-8 py-2  bg-primary-foreground rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
            Submit
          </div>
        </button>
      </div>
      <div className="z-10 mt-10">
        <Link href="mailto:aagats72@gmail.com" target="_blank" className="z-10">
          <Button variant={"shimmer"} type="button">
            Send Mail Directly
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default ContactDetail;
