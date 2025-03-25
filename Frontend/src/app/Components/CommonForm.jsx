"use client"
import React, { useState } from "react";
import Swal from 'sweetalert2';
import { FaEnvelope, FaLocationArrow, FaPhone, FaUser } from "react-icons/fa";
import { InputField } from "./InputField"; // Importing reusable InputField
import PopupForm from "./PopUpForm";

const RequestQuote = ({ imgNot }) => {
  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",
    Location_form: "",
    S_services: "",
    Location_to: "",
    message: "",
    userEmailsir: "uscargopackers@gmail.com"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.S_name.trim() ||
      !formData.S_email.trim() ||
      !formData.S_phone.trim() ||
      !formData.Location_form.trim() ||
      !formData.Location_to.trim() ||
      !formData.S_services.trim() ||
      !formData.message.trim()
    ) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill in all the required fields before submitting.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#f44336",
      });
      return; // Stop the form submission
    }


    const urlEncodedData = new URLSearchParams(); ``

    for (const [key, value] of Object.entries(formData)) {
      urlEncodedData.append(key, value);
    }

    try {
      const response = await fetch(
        "https://sendingmail-6znv.onrender.com/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedData.toString(),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#4CAF50",
        });
        setFormData({
          S_name: "",
          S_email: "",
          S_phone: "",
          S_services: "",
          Location_form: "",
          Location_to: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Failed to submit the form. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
          confirmButtonColor: "#f44336",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "Retry",
        confirmButtonColor: "#f44336",
      });
    }
  };

  return (
    <div className="quote-area px-0 lg:px-8">
      <div className="container mx-auto">
        <div className="quote-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="col-span-1 lg:col-span-8">
              <div className="quote-form ">
                <div className="quote-header border-b border-info pb-3 mb-4">
                  <h4 className="text-xl font-bold text-[#62371f]">Request A Quote</h4>
                </div>
                <h5 className="text-lg mb-4 font-semibold text-[#62371f]">Personal Info</h5>
                <form id="contact_form" name="contact_form" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InputField
                      id="form_name"
                      name="S_name"
                      type="text"
                      placeholder="Enter Name"
                      value={formData.S_name}
                      onChange={handleChange}
                      icon={<FaUser />}
                    />
                    <InputField
                      id="form_email"
                      name="S_email"
                      type="email"
                      placeholder="Enter Email"
                      value={formData.S_email}
                      onChange={handleChange}
                      icon={<FaEnvelope />}
                    />
                    <InputField
                      id="form_phone"
                      name="S_phone"
                      type="tel"
                      placeholder="Enter Phone"
                      value={formData.S_phone}
                      onChange={handleChange}
                      icon={<FaPhone />}
                    />
                  </div>
                  <h5 className="text-lg mt-6 mb-4 font-semibold text-[#62371f]">Shipment Info</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Freight Type Select */}
                    <div className="form-group">
                      <select
                        id="S_services"
                        name="S_services"
                        value={formData.S_services}
                        onChange={handleChange}
                        className="form-control w-full border border-gray-300 rounded p-3"
                      >
                        <option value="Local Shifting Service">Local Shifting Service</option>
                        <option value="Domestic Shifting Service">Domestic Shifting Service</option>
                        <option value="Loading Unloading Service">Loading Unloading Service</option>
                        <option value="International Shifting Service">International Shifting Service</option>
                        <option value="Office Shifting Service">Office Shifting Service</option>
                        <option value="Packing Unpacking Service">Packing Unpacking Service</option>
                        <option value="Car Transportation Service">Car Transportation Service</option>
                        <option value="Bike Shifting Service">Bike Shifting Service</option>
                        <option value="Warehouse Service">Warehouse Service</option>
                      </select>
                    </div>
                    <InputField
                      id="form_form"
                      name="Location_form"
                      type="text"
                      placeholder="Location from"
                      value={formData.Location_form}
                      onChange={handleChange}
                      icon={<FaLocationArrow />}
                    />
                    <InputField
                      id="form_to"
                      name="Location_to"
                      type="text"
                      placeholder="Location to"
                      value={formData.Location_to}
                      onChange={handleChange}
                      icon={<FaLocationArrow />}
                    />
                  </div>
                  <div className="form-group mt-5">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control w-full border h-40 border-gray-300 rounded p-3"
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white text-center mt-4 inline-flex items-center text-base font-semibold capitalize px-5 py-2.5 rounded-lg cursor-pointer overflow-hidden bg-white shadow transition-all duration-500"
                  >
                    Request A Quote
                  </button>
                </form>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="quote-img">
                <img
                  src={`${imgNot ? '/images/contact.avif' : '/images/quote.webp'}`}
                  alt="Request A Quote"
                  className="rounded-[20px] shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RequestQuote;
