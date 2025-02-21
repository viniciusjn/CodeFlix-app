import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from '@heroicons/react/24/solid';

export function Banner() {
    return (
        <div className="mb-10">
            <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
                    
                    {/* =====> CRIAÇÃO DE BANNER DE FUNDO <=====
                    forma de colocar um banner travado no topo da página com
                    texto por cima */}
                    <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-[black]">
                    <Image
                        src="/banner.png"
                        alt="The Witcher"
                        fill={true}
                        className="h-[65vh] object-cover object-top lg:h-[95vh]"
                    />
                    </div>
        
                    <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                        MAID
                    </h1>
        
                    <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
                    Maid is a Netflix drama about a young mother who escapes an abusive relationship and 
                    becomes a house cleaner to support her child. It is based on Stephanie Land’s memoir 
                    Maid: Hard Work, Low Pay, and a Mother's Will to Survive.
                    </p>
                </div>
        
                {/* =====> ESPAÇAMENTO ENTRE BOTÕES <=====
                forma de colocar botões um ao lado do outro com espaço */}
                <div className="flex space-x-2">
                    <button className="
                        md:text-xl;
                        flex
                        cursor-pointer 
                        items-center
                        gap-x-2
                        rounded
                    bg-white
                        px-4 
                        py-2
                        text-sm
                        font-semibold
                    text-black 
                        transition
                        hover:opacity-75
                        md:px-8
                        md:py-2.5
                    ">
                    <PlayIcon className="h-6"/>
                    Play</button>
        
                    <button className="
                        md:text-xl;
                        flex
                        cursor-pointer 
                        items-center
                        gap-x-2
                        rounded
                    bg-gray-600
                        px-4 
                        py-2
                        text-sm
                        font-semibold
                    text-black 
                        transition
                        hover:opacity-75
                        md:px-8
                        md:py-2.5
                    ">
                    <InformationCircleIcon className="h-6"/>
                    More info</button>
            </div>
        </div>
    )
}