import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(true);

    function handleNav() {
        setNav(!nav);
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1100px] mx-auto px-4 text-white">
            <h1 className="cursor-pointer w-full text-3xl font-bold text-[#00df9a]">
                REACT.
            </h1>

            <ul className="hidden md:flex">
                <li className="p-4 font-bold hover:cursor-pointer">Home</li>
                <li className="p-4 font-bold hover:cursor-pointer">Company</li>
                <li className="p-4 font-bold hover:cursor-pointer">
                    Resources
                </li>
                <li className="p-4 font-bold hover:cursor-pointer">About</li>
                <li className="p-4 font-bold hover:cursor-pointer">Contact</li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {!nav ? (
                    <AiOutlineClose size={30} />
                ) : (
                    <AiOutlineMenu size={30} />
                )}
            </div>
            <div
                className={
                    !nav
                        ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-800 h-full bg-[#000300] ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-8">
                    REACT.
                </h1>

                <ul className="p-4 uppercase">
                    <li className="p-4 font-bold border-b border-gray-700 hover:cursor-pointer">
                        Home
                    </li>
                    <li className="p-4 font-bold border-b border-gray-700 hover:cursor-pointer">
                        Company
                    </li>
                    <li className="p-4 font-bold border-b border-gray-700 hover:cursor-pointer">
                        Resources
                    </li>
                    <li className="p-4 font-bold border-b border-gray-700 hover:cursor-pointer">
                        About
                    </li>
                    <li className="p-4 font-bold hover:cursor-pointer">
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
