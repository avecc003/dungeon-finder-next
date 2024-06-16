"use client"
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname()
  const nav = [
    { name: "Home", path: "/" },
    { name: "Find Game", path: "/find-game" },
    { name: "Create Game", path: "/create-game" },
  ];

  return (
    <>
      <header className="h-[4rem] flex items-center justify-between px-[2rem]">
        <nav>
          <ul className="flex flex-row gap-4">
            {nav.map((navItem) => {
              return (
                <li key={navItem.name} className={`h-full px-[1rem] ${  path == navItem.path? "border-b-4 border-purple-700" : "" }`}>
                  <Link href={navItem.path} >
                    {navItem.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex ">
          <button className="mr-[1rem]"> Find Game </button>
          <button className="mr-[1rem]"> New Game </button>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </header>
    </>
  );
}
