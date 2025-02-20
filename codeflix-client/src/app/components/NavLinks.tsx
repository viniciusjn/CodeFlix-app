import React from "react";

export const NavLinks = () => {
    return (
        <nav>
            <ul className="hidden cursor-pointer md:flex md:space-x-4">
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
            </ul>
        </nav>
    );
};
