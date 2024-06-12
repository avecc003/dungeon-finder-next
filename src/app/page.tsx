import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <section className="w-full px-[10rem] pt-[6rem] flex items-center">
          <Image
            src="/map.png"
            width={500}
            height={500}
            alt="map"
            className="mr-auto"
          ></Image>
          <h2 className="mx-auto text-3xl font-bold">Find games near you!</h2>
        </section>

        <div className="w-full pt-[6rem] px-[10rem] flex  justify-center items-center">
          <div className=" w-full border border-black h-[1px]"></div>
          <h3 className="mx-[2rem] text-2xl"> or </h3>
          <div className=" w-full border border-black h-[1px]"></div>
        </div>

        <section className="w-full px-[10rem] pt-[6rem] pb-[3rem] flex items-center">
        <h2 className="mx-auto text-3xl font-bold">Start your own games!</h2>
          <Image
            src="/board-game.jpg"
            width={500}
            height={500}
            alt="boardgames"
            className=""
          ></Image>
          
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
