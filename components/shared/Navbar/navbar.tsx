import Link from "next/link";
import React from "react";

import { Menu } from "lucide-react";
import NavbarItems from "./navbaritems";
import MobileNav from "./mobilenav";

const Navbar = () => {
  return (
    <div className="p-6 border-b sticky top-0 z-50 bg-primary-foreground">
      <div className="flex justify-between items-center ">
        <Link href={"/"}>
          <h1 className="bg-gradient-to-r from-red-600 to-purple-400 inline-block text-transparent bg-clip-text text-3xl">
            {`<ꪖꪖgꪖt కꫝꪖꪹꪑꪖ />`}
          </h1>
        </Link>

        <div className="lg:flex hidden ">
          <NavbarItems />
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
