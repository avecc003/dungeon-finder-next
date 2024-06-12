import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <footer className="h-[15rem] bg-black stroke-white flex justify-center">
        <ul className="flex gap-3">
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
      </footer>
    </>
  );
}
