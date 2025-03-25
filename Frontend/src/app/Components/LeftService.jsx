import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const LeftService = () => {
    const data = {
        services: [
            {
                id: 1,
                title: "Local Shifting Service",
                link: "/local-shifting-service",
            },
            {
                id: 2,
                title: "Domestic Shifting Service",
                link: "/domestic-shifting-service",
            },
            {
                id: 3,
                title: "Loading Unloading Service",
                link: "/loading-unloading-service",
            },
            {
                id: 4,
                title: "International Shifting Service",
                link: "/international-shifting-service",
            },
            {
                id: 5,
                title: "Office Shifting Service",
                link: "/office-shifting-service",
            },
            {
                id: 6,
                title: "Packing Unpacking Service",
                link: "/packing-unpacking-service",
            },
            {
                id: 7,
                title: "Car Transportation Service",
                link: "/car-transportation-services",
            },
            {
                id: 8,
                title: "Bike Shifting Service",
                link: "/bike-shifting-service",
            },
            {
                id: 9,
                title: "Warehouse Service",
                link: "/warehouse-service",
            },
        ],

    };
    return (
        <>
            <div className="grid grid-cols-1  lg:sticky top-28 h-max  space-y-4 rounded-lg  lg:w-1/2   ">
                {data.services.map((item) => (
                    <Link
                        href={item.link}
                        key={item.id}
                        className="flex items-center justify-between rounded-lg px-6 py-3 group bg-slate-50 hover:bg-white transition-all duration-300 "
                    >
                        <h3 className=" group-hover:text-white text-[#62371f] text-base font-semibold text-nowrap tracking-wide">
                            {item.title}
                        </h3>
                        <div className="relative flex items-center justify-center rounded-full bg-white text-[#62371f] group-hover:bg-white group-hover:text-white px-6 py-5 ">
                            <FaArrowRight className="absolute" />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default LeftService