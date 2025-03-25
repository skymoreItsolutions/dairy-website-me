import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div
        className="site-breadcrumb"
        style={{ backgroundImage: "url('/images/service-slider.webp')" }}
      >
        <div className=" mx-auto px-0 lg:px-4">
          <h2 className="breadcrumb-title text-2xl lg:text-4xl font-bold text-white">
            Terms & Conditions
          </h2>
          <ul className="breadcrumb-menu flex gap-2 mt-2 text-white items-center justify-center">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <FaAngleDoubleRight />
            </li>
            <li className="active text-white font-semibold">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
      <section className="privacy-policy py-16 mx-0 lg:mx-28">
        <div className="container mx-auto px-4">
          <div className="single-privacy space-y-8">
            {/* Heading */}
            <h3 className="text-2xl text-[#62371f] font-bold">
              Terms &amp; Conditions for US cargo packers and movers: Welcome
            </h3>
            {/* Paragraph */}
            <p className="text-justify">
              The packing, shifting, hauling, and unpacking of household and
              commercial goods are included in the relocation services offered
              by US cargo packers and movers. We offer such services on the
              understanding that the client completely informs us on all details
              and proves the veracity of those facts. Any service request
              exceeding the determined fixed scope shall incur extra charges.
            </p>
            {/* Sub-section */}
            <h3 className="text-xl text-[#62371f] font-semibold">
              There are additional limitations on downloading and copying the
              Materials.
            </h3>
            <p className="text-justify">
              There are some other restrictions on downloading as well as
              copying the Materials. All quotations are based on information by
              the customer. Additional items, changes in destination, or
              unforeseen circumstances may result in different amounts in actual
              prices. Payment terms will be initiated on booking, and payments
              should adhere to a schedule established. We reserve our right to
              be paid in full before we can deliver.
            </p>
            {/* Software Section */}
            <h3 className="text-xl font-semibold text-[#62371f]">Software</h3>
            <p className="text-justify">
              Safe and sound moving, the top priority for US cargo packers and
              movers. When you make a reservation with us, you agree on
              conditions of payments, liability, prohibited items, and
              timelines. We always advise that you enlist additional coverage
              for valuable items, other than that we are guaranteeing careful
              handling. We require 72 hours for cancellations. Reports of delays
              or damages must be made within 24 hours. Our primary focus remains
              in customer satisfaction.
            </p>

            <h3 className="text-xl font-semibold text-[#62371f]">General</h3>
            <p className="text-justify">
              Safe and Secure Moving - US Cargo Packers and Movers. Whenever you
              make a reservation with us, you agree on terms and conditions
              covering modes of payment, liability, prohibited items, and
              timelines. We always advise you to enlist additional coverage for
              valuable items; we, in fact, guarantee careful handling.
              Cancellations should be made 72 hours before the scheduled time.
              Delay and damages must be reported within 24 hours. Our priority
              is customer satisfaction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
