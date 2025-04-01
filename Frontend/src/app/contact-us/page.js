"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="relative w-full h-[250px] lg:h-[350px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/aboutus.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="h-auto bg-[#F5F5F5] py-12 px-5 md:px-12 xl:px-32">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg h-[450px] shadow-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#5D4037]">
                    Full Name
                  </label>
                  <input
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="mt-1 block w-full rounded-md border-[#A1887F] shadow-sm focus:border-[#795548] focus:ring-[#795548]"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#5D4037]">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="mt-1 block w-full rounded-md border-[#A1887F] shadow-sm focus:border-[#795548] focus:ring-[#795548]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#5D4037]">
                    Phone Number
                  </label>
                  <input
                    {...register("phone", {
                      pattern: {
                        value: /^\+?[1-9]\d{1,14}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className="mt-1 block w-full rounded-md border-[#A1887F] shadow-sm focus:border-[#795548] focus:ring-[#795548]"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#5D4037]">
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      maxLength: {
                        value: 500,
                        message: "Message cannot exceed 500 characters",
                      },
                    })}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-[#A1887F] shadow-sm focus:border-[#795548] focus:ring-[#795548]"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#795548] text-white py-2 px-4 rounded-md hover:bg-[#5D4037] transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitSuccess && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg h-[447px] shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#5D4037] mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-[#795548] text-xl" />
                  <p className="text-gray-600">
                  Both No 7, Pocket C, Wave Estate, Sector 85, Mohali, 140306, India
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhone className="text-[#795548] text-xl" />
                  <a  href="tel:+918378000052" className="text-gray-600">+91 8378 000052</a>
                </div>

                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-[#795548] text-xl" />
                  <a href="mailto:info@Gaualla.com" className="text-gray-600">info@Gaualla.com</a>
                </div>

                <div className="flex items-center space-x-3">
                  <FaClock className="text-[#795548] text-xl" />
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#5D4037] mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {/* <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#795548] hover:text-[#5D4037] transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#795548] hover:text-[#5D4037] transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a> */}
                  <a
                  href="https://www.facebook.com/people/Gaualla-Milk/pfbid0oAAfD3faiggskXyqdgMv7dWe7NPk4xgg8seAvZuiXhSwbv47bfSdxBXoHEEip4D3l/"
                  target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#795548] hover:text-[#5D4037] transition-colors"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/gaualla1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#795548] hover:text-[#5D4037] transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Section - Now Full Width */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:col-span-2">
              <h2 className="text-2xl font-semibold text-[#5D4037] mb-6">
                Location
              </h2>
              {/* <div className="w-full h-[400px] bg-[#E0E0E0] rounded-lg flex items-center justify-center">
                <p className="text-[#5D4037]">Map View</p>
              </div>
              <a
                href="https://www.google.com/maps?q=40.7128,-74.0060"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-[#795548] hover:text-[#5D4037] transition-colors"
              >
                Open in Google Maps
              </a> */}

              <div className="relative w-full h-[450px] overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d54912.16733281541!2d76.66164995100223!3d30.661834002044692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390fe9006ae07881%3A0xa5fe5681b2d5009a!2s382%20-A-block%20Wave%20estate%20sector%2085%20Mohali%2C%20Block-A%2C%20Sector%2085%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140306!3m2!1d30.6617842!2d76.7029015!5e0!3m2!1sen!2sin!4v1743528221991!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
