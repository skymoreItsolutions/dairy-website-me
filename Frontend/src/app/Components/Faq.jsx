"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight, FaTruck } from "react-icons/fa";

export default function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState(1);

    const toggleFAQ = (id) => {
        setOpenFAQ((prev) => (prev === id ? null : id));
    };

    const faqs = [
        {
            id: 1,
            question: "What services do US Cargo Packers and Movers provide?",
            answer:
                "There is a complete range of relocation services provided by US Cargo Packers and Movers to its clients for residential as well as commercial purposes. The LCL (less than container load) services include packing and unpacking, loading and unloading, safe transportation of goods, and storage or warehousing services.",
        },
        {
            id: 2,
            question: "How can I get a quote for my move?",
            answer:
                "Getting a quote is pretty easy and definitely convenient. You could schedule it by visiting our site and filling out the inquiry form, or you could just contact our customer support directly. We also have facility for in-person and virtual surveys to assess the specific moving requirement and thus give an accurate quote.",
        },
        {
            id: 3,
            question: "Do you provide insurance for goods during transit?",
            answer:
                "Yes, we do take care of all belongings and we have full insurance on the articles to cover your goods while in transit. This guarantees you total peace of mind knowing that you are fully protected against any untoward incidents that may occur during the entire relocation process.",
        },
        {
            id: 4,
            question: "What types of vehicles do you use for transportation?",
            answer:
                "We use a fully maintained fleet of vehicles, covering different types of moving requirements. All our vehicles have appropriate safety features for secure transport of your goods, regardless of their size or number.",
        },
    ];

    return (
        <div className="faq-area py-20 px-5 lg:px-24 bg-gray-50">
            <div className=" mx-auto px-0 lg:px-4">
                <div className="grid lg:grid-cols-2 gap-8">
                    
                    <div>
                        <div className="faq-content">
                            <div className="why-us-content mb-6">
                                <div className="inline-flex items-center gap-2 bg-white text-white rounded-full p-[2px] mb-0">
                                    <FaTruck className="bg-white text-white text-3xl rounded-full p-1" />
                                    <span className="text-lg font-semibold pr-3">FAQ's</span>
                                </div>

                                <h2 className="font-bold capitalize text-[#62371f] text-2xl md:text-4xl lg:text-[45px] lg:leading-[1.2]  mt-2 mb-0">
                                    General <span className="text-white">frequently</span>{""} asked questions
                                </h2>


                            </div>
                            <p className="text-gray-700 text-justify mb-4">
                            U.S. Cargo Packers and Movers cater to all kinds of relocation needs according to client specifications, be it local, interstate, or international. Their expert pullers are engaged for the complete moving experience - from packing, to loading, from carrying to unpacking.

                            </p>
                            <p className="text-gray-700 text-justify mb-6">
                          
Their services come with features to keep belongings as safe as possible with insurance coverage or personalized packaging solutions. Their cost-and-speedy customer care has also created a simple trustworthiness for residences and offices moving.
                            </p>

                            <Link href="/services" className="text-white text-center mt-5 inline-flex items-center text-base font-semibold capitalize px-5 py-2.5 rounded-lg cursor-pointer  overflow-hidden bg-white shadow transition-all duration-500">
                                Have Any Question?<FaArrowRight className="ml-2  rotate-[-40deg] transition-all" />
                            </Link>
                        </div>
                    </div>

                    {/* Right FAQ Accordion Section */}
                    <div className="">
                        <div className="accordion space-y-4">
                            {faqs.map((faq) => (
                                <div

                                    key={faq.id}
                                    className="accordion-item border rounded-lg overflow-hidden shadow-sm"
                                >
                                    <h2 className="accordion-header " >
                                        <button
                                            className={`accordion-button flex justify-between items-center w-full p-5 ${openFAQ === faq.id ? "collapsed" : ""
                                                }`}
                                            onClick={() => toggleFAQ(faq.id)}
                                        >
                                            {faq.question}
                                            <svg
                                                className={`w-5 h-5 transform ${openFAQ === faq.id ? "rotate-180" : ""
                                                    } transition-transform`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </h2>
                                    {openFAQ === faq.id && (
                                        <div className="accordion-collapse p-5">
                                            <p className="accordion-body text-justify text-[#62371f] font-medium">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
