"use client";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/project",
    title: "Project",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

const MobileNavItems = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center text-lg">
      {links.map((link) => (
        <SheetClose asChild key={link.title}>
          <Link
            href={link.link}
            className={`border-b-2 p-3 border-transparent  ${
              pathname === link.link
                ? "  bg-gradient-to-r from-red-600 to-purple-400 inline-block text-transparent bg-clip-text   "
                : " hover:border-white duration-300 transition-all ease-linear"
            }  `}
          >
            {link.title}
          </Link>
        </SheetClose>
      ))}

      <SheetClose asChild>
        <Link
          href={
            "https://drive.google.com/file/d/12tiBqu4e74Ux4skj0nGHdBPMUCS9jkvP/view?usp=sharing"
          }
          target="_blank"
        >
          <button className="p-[3px] relative rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-full" />
            <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
              Resume
            </div>
          </button>
        </Link>
      </SheetClose>
    </div>
  );
};

export default MobileNavItems;
