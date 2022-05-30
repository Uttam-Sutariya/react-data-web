import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] h-screen w-full mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2 uppercase">
                    Gorwing with data analytics
                </p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl md:py-6 font-bold">
                    Grow with data
                </h1>
                <div className="flex justify-center items-center py-4">
                    <p className="text-xl sm:text-3xl md:text-4xl font-bold">
                        Fast, flexible financing for
                    </p>
                    <Typed
                        className="text-xl sm:text-3xl md:text-4xl pl-2 md:pl-4 font-bold text-[#00df9a]"
                        strings={[" BTB", " SaSS", " BTC"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className="md:text-2xl text-md font-bold text-gray-500 px-4">
                    Monitor your data analytics to increase revenue for BTB, BTC
                    & SaSS platforms
                </p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-3 py-3 text-black">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;
