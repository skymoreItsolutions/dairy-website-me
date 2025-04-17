"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
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
        className="relative w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/aboutus.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>


      <section className="bg-[#f7f7f7] py-12 px-5 md:px-12  lg:px-28 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto my-10">

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 ">
            <h2 className="text-2xl font-semibold text-[#5D4037] mb-4">Get In Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm text-[#5D4037]">Full Name</label>
                <input
                  type="text"
                  {...register("fullName", { required: "Full name is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#795548]"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-sm text-[#5D4037]">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#795548]"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm text-[#5D4037]">Phone</label>
                <input
                  type="tel"
                  {...register("phone", {
                    pattern: {
                      value: /^\+?[1-9]\d{1,14}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#795548]"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm text-[#5D4037]">Message</label>
                <textarea
                  rows={4}
                  {...register("message", {
                    required: "Message is required",
                    maxLength: { value: 500, message: "Max 500 characters" },
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#795548]"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#795548] text-white py-3 rounded-lg font-semibold hover:bg-[#5D4037] transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitSuccess && (
                <div className="bg-green-100 text-green-700 p-4 mt-4 rounded-lg">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>


          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-[#5D4037]">Contact Information</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#795548] mt-1" />
                <span>Both No 7, Pocket C, Wave Estate, Sector 85, Mohali, 140306, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#795548]" />
                <a href="tel:+918378000052" className="hover:underline">+91 8378 000052</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#795548]" />
                <a href="mailto:info@Gaualla.com" className="hover:underline">info@Gaualla.com</a>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-[#795548]" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#5D4037] mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/Gaualla-Milk/pfbid0oAAfD3faiggskXyqdgMv7dWe7NPk4xgg8seAvZuiXhSwbv47bfSdxBXoHEEip4D3l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#795548] hover:text-[#5D4037] transition"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#795548] hover:text-[#5D4037] transition"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#795548] hover:text-[#5D4037] transition"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#5D4037] mb-3">Find Us on Map</h3>
              <div className="rounded-xl  overflow-hidden shadow-md">
                <iframe
                  title="Google Map"
                  
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.9374221111614!2d76.66590577547214!3d30.648653689484315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feff8b5a99db3%3A0x66f63f2ef13d2f69!2sWave%20Estate%2C%20Sector%2085%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140306!5e0!3m2!1sen!2sin!4v1682764094294!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactUs;
