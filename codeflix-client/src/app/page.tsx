import Image from "next/image";

export default function Home() {
  return (
    <div className='relative h-full lg:h-[140vh]'>     
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black"></div>
          
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            The Witcher
          </h1>

          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, hic suscipit! Illum quae culpa recusandae libero dolorem, nulla amet quod at rem maxime earum voluptates quia aliquam error totam iure?
          </p>

        </div>

        <button className="bg-white text-black py-2 px-4 rounded-md">Assistir</button>
      </main>
    </div>
  );
}
