import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1100px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center items-start">
                    <p className="text-[#00df9a] font-bold">
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl py-2">
                        Manage Data Analytics Centrally
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore repudiandae itaque eveniet. Rerum amet illum
                        blanditiis alias quasi quaerat, temporibus quia sapiente
                        dolore, culpa doloribus facilis molestias distinctio,
                        reprehenderit at.
                    </p>
                    <button className="bg-black text-[#00df9a] w-[200px] rounded-md mx-auto md:mx-0 font-medium my-6 px-3 py-3">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
