
import Image from "next/image";
export default function Main() {
    return (
        <>
            <section className="w-full px-[10rem] py-[6rem] flex items-center" >
                <Image
                    src="/map.png"
                    width={500}
                    height={500}
                    alt="map"
                    className="mr-auto"
                ></Image>
                <h2 className="mx-auto text-3xl font-bold">Find games near you!</h2>
            </section >

            <div className="w-full py-[3rem] px-[10rem] flex  justify-center items-center">
                <div className=" w-full border border-black h-[1px]"></div>
                <h3 className="mx-[2rem] text-2xl"> or </h3>
                <div className=" w-full border border-black h-[1px]"></div>
            </div>

            <section className="w-full px-[10rem] py-[6rem] flex items-center">
                <h2 className="mx-auto text-3xl font-bold">Start your own games!</h2>
                <Image
                    src="/board-game.jpg"
                    width={500}
                    height={500}
                    alt="boardgames"
                    className=""
                ></Image>
            </section>
        </>
    )
}