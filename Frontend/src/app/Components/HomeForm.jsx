"use client"
import Link from 'next/link';
import React from 'react';
import { FaTruck } from 'react-icons/fa';

import RequestQuote from './CommonForm';

const HomeForm = () => {
    return (
        <div className="portfolio-area px-5 lg:px-24 py-20">

            <div
                className="pa-bg"
                style={{ backgroundImage: 'url(/images/bg.webp)' }}
            ></div>


            <div className="container mx-auto relative z-10">

                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-white text-white rounded-full p-[2px]">
                        <FaTruck className="bg-white text-white text-3xl rounded-full p-1" />
                        <span className="text-lg font-semibold pr-3">Our Portfolio</span>
                    </div>
                    <h2 className="font-bold mt-5 capitalize text-3xl lg:text-[45px] text-dark mb-0 text-white">
                        Let's check our latest portfolio
                    </h2>
                </div>


                <RequestQuote />
            </div>
        </div>
    );
};

export default HomeForm;
