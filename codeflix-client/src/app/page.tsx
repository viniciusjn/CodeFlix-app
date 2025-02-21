import Image from "next/image";
import Header from "./components/Header";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from '@heroicons/react/24/solid';
import { MovieRow } from "./components/MovieRow";
import { Banner } from "./components/Banner";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-t from-[#383838] via-[#383838] lg:h-[140vh]"> 
      
      <Header />  
      
      <main className="relative pb-24 pl-4 lg:pl-16">

        <Banner />

        <MovieRow sectionTitle="Popular Movies"/>
        <MovieRow sectionTitle="Top Rated"/>
        <MovieRow sectionTitle="See again"/>
      </main>
    </div>
  );
}


