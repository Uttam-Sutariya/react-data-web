import React from "react";
import Signle from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
    return (
        <div className="w-full py-[5rem] px-4 bg-white">
            <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full p-4 my-4 shadow-md hover:shadow-xl hover:scale-105 duration-300 rounded-lg flex flex-col justify-center items-center">
                    <img
                        src={Signle}
                        alt="/"
                        className="w-20 mx-auto mt-[-3rem] bg-transparent"
                    />
                    <h2 className="text-2xl font-bold py-5">Single User</h2>
                    <p className="text-3xl font-bold">$149</p>
                    <div className="font-medium">
                        <p className="py-2 border-b mx-8 mt-4">
                            500 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[180px] rounded-md font-medium mt-3 mx-auto p-2 text-black">
                        Start Trial
                    </button>
                </div>

                <div className="bg-gray-100 w-full p-4 my-8 md:my-4 shadow-md hover:shadow-xl hover:scale-105 duration-300 rounded-lg flex flex-col justify-center items-center">
                    <img
                        src={Double}
                        alt="/"
                        className="w-20 mx-auto mt-[-3rem] bg-transparent"
                    />
                    <h2 className="text-2xl font-bold py-5">Double User</h2>
                    <p className="text-3xl font-bold">$149</p>
                    <div className="font-medium">
                        <p className="py-2 border-b mx-8 mt-4">
                            500 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-black text-[#00df9a] w-[180px] rounded-md font-medium mt-3 mx-auto p-2 ">
                        Start Trial
                    </button>
                </div>

                <div className="w-full p-4 my-4 shadow-md hover:shadow-xl hover:scale-105 duration-300 rounded-lg flex flex-col justify-center items-center">
                    <img
                        src={Triple}
                        alt="/"
                        className="w-20 mx-auto mt-[-3rem] bg-transparent"
                    />
                    <h2 className="text-2xl font-bold py-5">Triple User</h2>
                    <p className="text-3xl font-bold">$149</p>
                    <div className="font-medium">
                        <p className="py-2 border-b mx-8 mt-4">
                            500 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[180px] rounded-md font-medium mt-3 mx-auto p-2 text-black">
                        Start Trial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
