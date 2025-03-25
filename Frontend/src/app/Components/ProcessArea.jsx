import React from 'react';
import { FaTruck } from 'react-icons/fa';

const ProcessArea = () => {
    const processData = [
        {
            id: 1,
            count: "01",
            icon: "/images/pickup.svg",
            title: "Picking Up",
            description: "Choose reliable packers and movers for hassle-free relocation. They offer expert packing, safe transportation, and timely delivery services."
        },
        {
            id: 2,
            count: "02",
            icon: "/images/warehouse-2.svg",
            title: "Warehousing",
            description: "For hassle-free relocation, choose reliable Packers and Movers. They provide secure warehousing, transport, and efficient packing services."
        },
        {
            id: 3,
            count: "03",
            icon: "/images/package.svg",
            title: "Packaging",
            description: "Packers and Movers offer professional packing, loading, transportation, and unloading services to ensure safe, efficient relocation."
        },
        {
            id: 4,
            count: "04",
            icon: "/images/transportation.svg",
            title: "Transportation",
            description: "Trust our reliable Packers and Movers for smooth relocation. We offer efficient transport services, ensuring safe and timely deliveries."
        }
    ];



    return (
        <div className="py-20 px-5 lg:px-24 ">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="text-center animate__animated animate__fadeInDown" style={{ animationDelay: '0.25s' }}>

                        <div className="inline-flex items-center gap-2 bg-white text-white rounded-full p-[2px] mb-0">
                            <FaTruck className="bg-white text-white text-3xl rounded-full p-1" />
                            <span className="text-lg font-semibold pr-3"> Working Process</span>
                        </div>
                        <h2 className="font-bold capitalize text-center text-[#62371f] text-xl  lg:text-[45px] lg:leading-[1.2] text-dark mt-2 mb-0">
                            Easy steps for Packers and Movers <br /> and transport</h2>
                        <div className="heading-divider"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                    {processData.map((process) => (
                        <div key={process.id} className="process-item">
                            <span className="count text-lg font-semibold">{process.count}</span>
                            <div className="icon">
                                <img src={process.icon} alt={process.title} className='absolute top-3 left-3' />
                            </div>
                            <div className="content mt-4">
                                <h4 className="text-xl text-[#62371f] font-bold">{process.title}</h4>
                                <p className="text-gray-600 mt-2 ">{process.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessArea;
