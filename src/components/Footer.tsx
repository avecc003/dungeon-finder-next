import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <footer className="h-[15rem] py-[3rem] bg-black stroke-white flex flex-col items-center ">
        <ul className="flex gap-10 pb-[2rem]">
          <li>
            {" "}
            <YouTubeIcon></YouTubeIcon>
          </li>
          <li>
            {" "}
            <TwitterIcon></TwitterIcon>
          </li>
          <li>
            {" "}
            <FacebookIcon></FacebookIcon>
          </li>
          <li>
            {" "}
            <InstagramIcon></InstagramIcon>
          </li>
        </ul>
        <p className=" text-white"> DungeonFinder Media Direct, LLC. All rights reserved. </p>
      </footer>
    </>
  );
}
