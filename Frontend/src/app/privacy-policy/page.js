import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <>
        <div
    className="relative w-full h-[250px] lg:h-[350px] bg-cover bg-center"
    style={{ backgroundImage: "url('/images/aboutus.webp')" }}
  >

    <div className="absolute inset-0 bg-black bg-opacity-50"></div>


    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-white text-3xl md:text-5xl font-bold capitalize">Privacy  policy</h2>
    </div>
  </div>
      {/* <div
        className="site-breadcrumb"
        style={{ backgroundImage: "url('/images/service-slider.webp')" }}
      >
        <div className=" mx-auto px-0 lg:px-4">
          <h2 className="breadcrumb-title text-2xl lg:text-4xl font-bold text-white">
            Privacy & Policy
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
              Privacy & Policy
            </li>
          </ul>
        </div>
      </div> */}

      <section className="privacy-policy py-16 mx-0 lg:mx-28">
  <div className="container mx-auto px-4">
    <div className="single-privacy">
      <h3 className="text-2xl text-[#62371f] font-bold mt-0">
        Welcome to Gaualla Milk Pvt Ltd Privacy Policy
      </h3>
      <p className="text-justify mt-4">
        At Gaualla Milk Pvt Ltd, we highly value the trust you place in us, and we are committed to ensuring your privacy. This Privacy Policy explains the types of data we collect from you, how we use it, and how we protect it when you use our services or visit our website.
      </p>
      <p className="text-justify mt-4">
        The personal information we collect to offer a smooth and efficient experience includes your name, address, phone number, email address, payment details, identity documents, and more. Additionally, we may collect service-specific data such as delivery addresses, product preferences, and specific dairy product requirements. We may also collect non-personal data such as IP addresses, device types, browser information, cookies, and other elements to improve your experience on our website.
      </p>
      <p className="text-justify mt-4">
        It is important to note that we will never misuse your information. Any information we gather is only used to process payments, arrange deliveries, improve our services, and enhance your overall experience. Furthermore, we may use your information to communicate with you about any queries, suggestions, or improvements related to our products and services. With your consent, we may send you surveys, promotions, and offers to better understand your preferences.
      </p>

      <h3 className="text-xl font-semibold text-[#62371f] mt-8">
        You can visit the majority of our website without providing any personal information
      </h3>
      <p className="text-justify mt-4">
        You can browse our website without providing personal details. However, certain services may require you to share your information to ensure an efficient experience with our dairy products.
      </p>

      <h3 className="text-xl font-semibold text-[#62371f] mt-8">
        Security
      </h3>
      <p className="text-justify mt-4">
        We employ standard security measures to protect your personal data. These include encryption technologies and secure servers to prevent unauthorized access. While we take significant steps to safeguard your information, we always encourage you to remain cautious when providing sensitive information over the internet.
      </p>

      <h3 className="text-xl font-semibold text-[#62371f] mt-8">
        Your Rights Regarding Your Personal Information
      </h3>
      <p className="text-justify mt-4">
        You have the right to view, modify, or delete your personal information at any time. Additionally, you can limit how your data is processed or opt out of marketing emails. To exercise these rights or if you have any privacy-related inquiries, please contact us at [insert contact information]. We also use cookies and similar technologies to personalize your browsing experience on our website. Cookies allow us to analyze website performance and provide content that best suits your preferences. If you prefer not to use cookies, you can disable them through your browser settings.
      </p>
    </div>
  </div>
</section>

    </>
  );
};

export default PrivacyPolicy;
