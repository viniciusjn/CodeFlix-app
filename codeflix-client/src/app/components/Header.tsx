import React, { use } from "react";

export default function Header() {

    const [isScrolled, setIsScrolled] = React.useState(false);

    use(() => {
        const handleScroll = () => {};
        
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll); 

    }, []);
    return (
        <header className="
            fixed
            top-0
            z-50
            flex
            w-full
            items-center
            justify-between
            px-4
            py-4
            lg:px-10
            lg:py-6
            transition-all">

            <div className="flex items-center space-x-2 md:space-x-8">
                <img src="/netflix_logo.png" alt="" width={120} height={120} />
                <ul className="hidden md:flex md:space-x-4">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                </ul>
            </div>

            <div className="flex items-center space-x-4">
               <p className="hidden cursor-not-allowed lg:inline">Kids</p> 
               <img src="/avatar_netflix.jpg" alt="" className="cursor-pointer rounded" width={40} height={40}/>
            </div>

        </header>
    )
}