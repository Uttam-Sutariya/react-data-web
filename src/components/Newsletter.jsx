import React from "react";

const Newsletter = () => {
    return (
        <div className="w-full py-16 text-white">
            <div className="max-w-[1100px] mx-auto grid lg:grid-cols-3">
                <div className="p-4 lg:col-span-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p className="py-3 text-gray-500">
                        Sign up to our newsletter and stay up to date.
                    </p>
                </div>
                <div className="p-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input
                            type="text"
                            className="p-3 w-full rounded-md text-black"
                            placeholder="Enter Email"
                        />
                        <button className="bg-[#00df9a] ml-0 md:ml-3 w-[150px] rounded-md font-medium mx-auto p-3 my-3 text-black">
                            Notify Me
                        </button>
                    </div>
                    <p className="text-center md:text-left my-3 md:my-0">
                        We care about the protection of your data. Read our{" "}
                        <span className="text-[#00df9a]">Privacy Policy.</span>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
