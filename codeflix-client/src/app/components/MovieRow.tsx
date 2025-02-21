import Image from "next/image";

type MovieRowProps = {
  sectionTitle: string;
}

type MovieCardProps = {
  index: number;
}

const MovieCard = ({ index }: MovieCardProps) => {
  return (
    <div key={index} className="
      group 
      relative 
      h-28 
      min-w-[200px] 
      cursor-pointer
      transform
      bg-gradient-to-t from-transparent to-black
      transition
      duration-200
      ease-in
      hover:scale-110
      md:h-25 md:min-w-[180px]
      lg:h-25 lg:min-w-[200px]
      ">
      <Image
        src={`/item_${index}.png`}
        fill={true}
        alt="The Witcher"
        className="rounded" 
      />
    </div>
  );
}


export function MovieRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className="flex-col space-y-4">
      <div className="flex">
        <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">
           {sectionTitle}
        </h2>
      </div>
      <div className="-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide">
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((index) => (
          <MovieCard key={index} index={index} />          
        ))}
      </div>
    </div>
  );
}

