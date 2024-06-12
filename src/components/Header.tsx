import UserIcon from "./UserIcon";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="h-[4rem] flex items-center justify-between px-[2rem]">
        <div className="flex">
          <Image src="" alt="icon" className="mr-[1rem]"></Image>
          <ul className="flex gap-4">
            <li> Home </li>
            <li> Find Game </li>
            <li> Create Game </li>
          </ul>
        </div>
        <div>
            <button className="mr-[1rem]"> Find Game </button>
            <button> New Game </button>
            <UserIcon></UserIcon>
        </div>
      </header>
    </>
  );
}
