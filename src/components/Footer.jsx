import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-[1100px] mx-auto">
            <div className="mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className="cursor-pointer w-full text-3xl font-bold text-[#00df9a]">
                        REACT.
                    </h1>
                    <p className="py-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sunt possimus nobis aspernatur quos ducimus sequi.
                    </p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare size={35} className="mr-1" />
                        <FaInstagramSquare size={35} className="mx-1" />
                        <FaTwitterSquare size={35} className="mx-1" />
                        <FaGithubSquare size={35} className="mx-1" />
                        <FaDribbbleSquare size={35} className="ml-1" />
                    </div>
                </div>
                <div className="md:col-span-2 flex justify-between">
                    <div>
                        <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm cursor-pointer">
                                Analytics
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Marketing
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Commerce
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Insights
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-gray-400">Support</h6>
                        <ul>
                            <li className="py-2 text-sm cursor-pointer">
                                Pricing
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Documentation
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Guides
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                API Status
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-gray-400">Company</h6>
                        <ul>
                            <li className="py-2 text-sm cursor-pointer">
                                About
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Blog
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Jobs
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Press
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Carreers
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-gray-400">Legal</h6>
                        <ul>
                            <li className="py-2 text-sm cursor-pointer">
                                Claim
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Policy
                            </li>
                            <li className="py-2 text-sm cursor-pointer">
                                Terms
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-gray-500 text-center font-bold pb-10">
                <p>
                    Designed & Developed by{" "}
                    <a href="https://www.linkedin.com/in/uttam-sutariya-a71588225/Sutariya">
                        <span className="text-[#00df9a]">- uttam sutariya</span>{" "}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
