"use client"
import Link from 'next/link';
import { FaBox, FaWarehouse, FaShippingFast, FaTruck } from "react-icons/fa";

const Contribution = () => {
    return (
        <section className="section work px-5 lg:px-28 py-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="w-full sm:w-10/12 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-7/12">
                        <div className="section__header text-center">
                            <p className="block text-sm font-bold lin text-[#62371f] tracking-[2px] uppercase relative opacity-100" style={{ transform: "translate3d(0px, 0px, 0px)" }}>HOW WE WORK</p>

                            <p className="block text-5xl my-3 font-semibold relative opacity-100 " style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                We aim to contribute well to
                                your company
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center section__row my-5">
                    {[
                        { title: "Replenishment and Picking", icon: <FaBox />, number: "01" },
                        { title: "Warehousing Operation", icon: <FaWarehouse />, number: "02" },
                        { title: "Packaging and Distribution", icon: <FaShippingFast />, number: "03" },
                        { title: "Transportation Process", icon: <FaTruck />, number: "04" },
                    ].map((item, index) => (
                        <div key={index} className="group w-full sm:w-9/12 md:w-6/12 xl:w-3/12 section__col px-4 mb-6">
                            <div className="work__single bdFade3">
                                <div className="work__single-content">
                                    <h4 className='text-2xl font-semibold mb-5 group-hover:text-[#62371f]'>
                                        <Link href="/project-details">
                                            {item.title}
                                        </Link>
                                    </h4>
                                    <p className='text-[#7c858c]'>Dolores molestias excepturi occaecati cupiditate non provident quas.</p>
                                </div>
                                <div className="work__single-cta flex items-center justify-between">
                                    <Link href="/project-details" className="btn btn--primary">
                                        More Details
                                    </Link>
                                    <div className="thumb flex items-center">
                                        <Link href="/project-details">
                                            {item.icon}
                                        </Link>
                                        <div className="tool text-white">
                                            <p>{item.number}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <div className="w-full md:w-10/12 lg:w-7/12 text-center">
                        <div className="section__cta cmn__cta">
                            <p>
                                Simplifying Your Freight & Logistics Needs With a Personal Approach.
                                <Link href="/contact" className="text-blue-500 underline ml-1">Get In Touch</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contribution;
