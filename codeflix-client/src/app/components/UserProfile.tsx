import Image from "next/image";
import React from "react";

export const UserProfile = () => {
    return (
        <div className="flex items-center space-x-4">
            <p className="hidden cursor-not-allowed lg:inline">Kids</p>
            <Image src="/avatar_netflix.jpg" alt="" className="cursor-pointer rounded" width={40} height={40} />
        </div>
    );
};
