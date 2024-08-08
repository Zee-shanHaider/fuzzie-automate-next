import React from "react";
import { ModeToggle } from "../theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
// import { UserButton, currentUser } from "@clerk/nextjs";

type User = {
  id: string;
  email: string;
};
type Props = {
  user?: User;
};

const Navbar = (props: Props) => {
  const user: unknown = props.user;

  return (
    <header className="right-0 left-0 top-0 p-4 border-neutral-900 border-b-[1px] z-[100] fixed bg-black/40 flex items-center justify-between backdrop-blur-lg">
      <aside className="flex items-center gap-6">
        <ModeToggle />
        <div className="flex gap-1">
          <p className="text-3xl font-bold">Fuz</p>
          <Image
            className="shadow-lg"
            src="/fuzzieLogo.png"
            alt="Fuzzie Logo"
            width={15}
            height={15}
          />
          <p className="text-3xl font-bold">ie</p>
        </div>
      </aside>
      <nav className="absolute top-[50%] left-[50%] border-white p-4 transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4">
          <li>
            <Link href={"#"}>Product</Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            <Link href={"#"}>Clients</Link>
          </li>
          <li>
            <Link href={"#"}>Resources</Link>
          </li>
          <li>
            <Link href={"#"}>Documentation</Link>
          </li>
          <li>
            <Link href={"#"}>Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
