import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className={`w-full h-[45rem] relative`}>
        <Image
          src="/hero-img.jpeg"
          fill={true}
          style={{objectFit: "cover"}}
          quality={100}
          className="absolute -z-10"
          alt="Hero"
        ></Image>
        <div className="w-full h-full px-[10rem] flex flex-col justify-center items-start">
          <h2 className="text-3xl mb-[1rem]"> Find your next big adventure!</h2>
          <h1 className=" font-bold text-5xl mb-[1rem]"> Dungeon Finder </h1>
          <button className=" bg-purple-700 rounded-xl h-[3rem] w-[10rem] text-white"> SignUp </button>
        </div>
      </section>
    </>
  );
}
