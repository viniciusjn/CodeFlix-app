'use client';
import { use } from "react";
import { UserProfile } from "./UserProfile";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { useScroll } from "../hooks/useScroll";

export default function Header() {
    const isScrolled = useScroll();

    return (
        <header className={`${isScrolled && "bg-[#111111]"}
        fixed
        top-0
        z-50
        flex
        w-full
        items-center
        justify-between
        px-4
        py-4
        lg:px-16
        lg:py-6
        transition-all
        bg-gradient-to-b from-black "
        `}>	
        
            <div className="flex items-center space-x-2 md:space-x-8">
                <Logo />
                <NavLinks />
            </div>
            <UserProfile />
        </header>
    );
}