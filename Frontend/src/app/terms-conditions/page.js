import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const page = () => {
  return (
    <>
      {/* <div
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
      </div> */}

      <div
    className="relative w-full h-[250px] lg:h-[350px] bg-cover bg-center"
    style={{ backgroundImage: "url('/images/aboutus.webp')" }}
  >

    <div className="absolute inset-0 bg-black bg-opacity-50"></div>


    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-white text-3xl md:text-5xl font-bold capitalize">Terms & conditon</h2>
    </div>
  </div>

      <section className="terms-conditon py-16 mx-0 lg:mx-28">
  <div className="container mx-auto px-4">
    <div className="single-privacy space-y-8">
      {/* Heading */}
      <h3 className="text-2xl text-[#62371f] font-bold">
        Terms &amp; Conditions for Gaualla Milk Pvt Ltd: Welcome
      </h3>
      {/* Paragraph */}
      <p className="text-justify">
        Gaualla Milk Pvt Ltd provides dairy products and delivery services, including fresh milk, ghee, paneer, curd, butter, and other dairy-based products. These services are offered based on the understanding that the client provides accurate details about their requirements and delivery addresses. Any service request exceeding the defined scope will incur additional charges.
      </p>
      {/* Sub-section */}
      <h3 className="text-xl text-[#62371f] font-semibold">
        Limitations on Downloading and Copying Materials
      </h3>
      <p className="text-justify">
        There are certain restrictions on downloading or copying content from our website. All product pricing is based on information provided by the customer. Any changes in the quantity, type of products, or unforeseen delivery circumstances may result in price adjustments. Payments must be made as per the schedule agreed upon at the time of booking. Gaualla Milk Pvt Ltd reserves the right to receive full payment before delivering the products.
      </p>
      {/* Service Terms Section */}
      <h3 className="text-xl font-semibold text-[#62371f]">
        Delivery and Service Terms
      </h3>
      <p className="text-justify">
        At Gaualla Milk Pvt Ltd, customer satisfaction and the safe delivery of our dairy products are our top priorities. By placing an order, you agree to our terms, including payment conditions, liability for damages, prohibited items, and delivery timelines. We advise you to ensure all product orders are correctly placed and that any special handling requirements (if any) are communicated upfront. Cancellations must be made 48 hours in advance of the scheduled delivery time. In case of delays or damage during the delivery process, reports must be submitted within 24 hours.
      </p>

      <h3 className="text-xl font-semibold text-[#62371f]">
        General Terms and Conditions
      </h3>
      <p className="text-justify">
        When placing an order with Gaualla Milk Pvt Ltd, you agree to the terms and conditions concerning payment methods, liability for products, prohibited items, and delivery schedules. We ensure careful handling of all dairy products, but we recommend considering additional coverage for high-value orders. Cancellations must be made 48 hours before the delivery date, and any delays or damages to products must be reported within 24 hours. Our commitment is to provide you with fresh, high-quality dairy products and ensure a positive customer experience.
      </p>
    </div>
  </div>
</section>

    </>
  );
};

export default page;
