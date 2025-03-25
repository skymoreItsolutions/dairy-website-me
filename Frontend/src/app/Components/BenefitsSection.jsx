"use client"
import { FaTruck, FaTags, FaDollarSign, FaHeadset } from "react-icons/fa";

const benefits = [
    {
        icon: <FaTruck className="w-10 h-10 text-[#61371f]" />,
        title: "Free Shipping",
        description: "On all orders over 500",
    },
    {
        icon: <FaTags className="w-10 h-10 text-[#61371f]" />,
        title: "Special Sale",
        description: "Sale Offers",
    },
    {
        icon: <FaDollarSign className="w-10 h-10 text-[#61371f]" />,
        title: "Save Money",
        description: "30 Days Guarantee",
    },
    {
        icon: <FaHeadset className="w-10 h-10 text-[#61371f]" />,
        title: "Online Support",
        description: "Support 24*7",
    },
];

const BenefitsSection = () => {
    return (
        <section id="benefit_sec" className="bg-[#fcfcf4] py-20  px-5 lg:px-28 hidden md:block">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit_box flex flex-col items-center">
                            {benefit.icon}
                            <p className="text-2xl mb-3 font-semibold mt-5">{benefit.title}</p>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
