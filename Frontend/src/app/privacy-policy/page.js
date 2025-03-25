import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <>
      <div
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
      </div>

      <section className="privacy-policy py-16 mx-0 lg:mx-28">
        <div className="container mx-auto px-4">
          <div className="single-privacy">
            <h3 className="text-2xl text-[#62371f] font-bold mt-0">
              Welcome to US cargo packers and movers Privacy Policy
            </h3>
            <p className="text-justify mt-4">
              At US cargo packers and movers, we value the trust you place in us
              very highly, and we take all necessary precautions with respect to
              your privacy. Here, in this Privacy Policy, you will know what
              data we collect from you and how we use it and protect it when you
              use any of our services or visit us.
            </p>
            <p className="text-justify mt-4">
              One of the personal particulars we collect to facilitate a
              'smooth,' 'unified,' and ''effective'' moving experience is name,
              address, phone number, e-mail address, payment information,
              identity documents, and much more. In addition, we may collect
              service-specific data such as delivery and pickup addresses and
              even a list of the goods requiring transportation. Otherwise, we
              might collect nonpersonal data such as IP address, device type,
              browser type, cookies, and several other things to enhance your
              experience on our website.
            </p>
            <p className="text-justify mt-4">
              It is essential not to misuse electricity because anything we
              gather will only ever be used based on the back-to-back dealings
              with you. Payment handling, move arrangements, order processing,
              and improvement of our offerings are included in these purposes.
              Additionally, such information may be used to correspond with the
              customers regarding queries, remarks, or improvements in diverse
              services. If consent is obtained, we might also send surveys and
              additional promotional messages to gain a better understanding of
              your needs.
            </p>

            <h3 className="text-xl font-semibold text-[#62371f] mt-8">
              You can visit the majority of our website without providing any
              personal information
            </h3>
            <p className="text-justify mt-4">
            Our firm has employed the conventional ways of protecting private information. To prevent unauthorized access, these precautions also utilize encryption technologies and secure servers. Nevertheless, we would always emphasize exercising diligence when providing delicate information over the internet, even though we put so much effort into securing these data.
            </p>

            <h3 className="text-xl font-semibold text-[#62371f] mt-8">
              Security
            </h3>
            <p className="text-justify mt-4">
            You may view, change or delete your personal information anytime. You may also limit how your data is processed or refuse to get marketing emails. To exercise these rights or with any inquiries about privacy please contact us at [insert contact information]. Cookies and similar technologies are used on our website to personalize and enhance your browsing experience. Cookies allow us to analyze website performance and tailor content for you. If you do not wish to take advantage of cookies, cookie usage can be disabled in your browser settings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
