"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";


const Location = () => {
    const officeLocations = [
        {

            address:
                "B.O. Plot No 35,1st Cross Rd, Manjunatha Layout, Munnekolala, Marathahalli, Bengaluru, Karnataka 560037",
            email: "info@uscargopackersandmovers.com",
            phone: "+918378000052",
            imageSrc: "/images/about-bangalore.webp",
        },
        {

            address:
                "B.O Plot No 38 Doddaballapur Main Rd, Yelahanka, Bengaluru, Karnataka 560064",
            email: "info@uscargopackersandmovers.com",
            phone: "+91 7734010132",
            imageSrc: "/images/banglore2.webp",

        },
        {

            address:
                "B. O. 738, 4th Cross Road, Neeladri Nagar, Shikaripalya, Electronic City, Bengaluru, Karnataka 560100",
            email: "info@uscargopackersandmovers.com",
            phone: "+91 90360 53163",
            imageSrc: "/images/banglore3.webp",

        },

    ];



    return (
        <>
            <div className="bg-white text-white shadow-location mx-36 max-sm:mx-0 max-md:mx-20 mt-20 py-2 text-center">
                <h2 className="text-3xl m-2 font-bold">Our Branches</h2>
            </div>

            <div
                className="my-10 flex gap-5 mx-0 lg:mx-28 overflow-hidden"
            >
                {officeLocations.map((location, index) => (
                    <div key={index} className="p-0 lg:p-2">
                        <div className="w-auto lg:w-[400px]  bg-white hover:shadow-md mx-auto border-b-4 border-b-white  rounded-lg custom-shadow">
                            <div className="bg-[#fbfbfb] text-center">
                                <Image
                                    width={700}
                                    height={700}
                                    src={location.imageSrc}
                                    alt="country"
                                    className="img-fluid h-[200px] w-full rounded-t-lg d-block"
                                />
                            </div>
                            <div className="p-5">

                                <p className="text-md text-[#6a6a8e] mt-4 flex items-center gap-3 text-justify">
                                    <FaLocationArrow className="text-3xl" /> {location.address}
                                </p>
                                <ul className="text-md text-[#6a6a8e] mt-4">
                                    <li>
                                        <Link
                                            href={`mailto:${location.email}`}
                                            className="flex items-center gap-3"
                                        >
                                            <FaEnvelope /> {location.email}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={`tel:${location.phone}`}
                                            className="flex items-center gap-3 mt-2"
                                        >
                                            <FaPhoneAlt /> {location.phone}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Location;
