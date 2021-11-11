import React, { FC, ReactNode } from "react";
interface NavbarProps {
    title?: string | ReactNode;
    icon?: ReactNode ; 

}

export const Navbar: FC<NavbarProps> = ({ title, icon }) => {


    return (
        <div className=" h-24 bg-blue-600 min-w-full m-0 p-0 fixed bg-opacity-100 ">
            <div className="flex-grow p-2 text-2xl flex items-center h-full text-white ">
                    <span className="mx-2 "> 
                        { icon}
                    </span>
                
                {title || null}
            </div>
        </div>
    )
}