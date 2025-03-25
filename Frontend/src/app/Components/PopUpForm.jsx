"use client";
import React, { useState } from "react";
import { InputField } from "./InputField"; // Import the reusable InputField
import { FaEnvelope, FaLocationArrow, FaPhone, FaTimes, FaUser } from "react-icons/fa";
import Swal from 'sweetalert2'
import { FaMessage } from "react-icons/fa6";
const PopupForm = ({ isOpen, closePopup, onSubmit }) => {
    if (!isOpen) return null; // If the popup is not open, return nothing.

    const [formValues, setFormValues] = useState({
        S_name: '',
        S_phone: '',
        Location_form: '',
        Location_to: '',
        message: "",
        userEmailsir: "uscargopackers@gmail.com"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (
            !formValues.S_name.trim() ||
            !formValues.S_phone.trim() ||
            !formValues.Location_form.trim() ||
            !formValues.Location_to.trim() ||
            !formValues.message.trim()
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

        const urlEncodedData = new URLSearchParams();

        for (const [key, value] of Object.entries(formValues)) {
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
                }).then(() => {
                    // Call closePopup when the "OK" button is clicked
                    closePopup();
                });

                setFormValues({
                    S_name: "",
                    S_phone: "",
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
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-[999]">
            <div className="bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-100 flex gap-2 relative overflow-hidden  rounded-none shadow-lg w-[900px]">
                <div className="w-full lg:w-[65%] p-8">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">Request a free quote</h2>
                    <button
                        className="absolute top-2 right-2 text-gray-700 lg:text-white hover:text-gray-700"
                        onClick={closePopup}
                    >
                        <FaTimes className="text-2xl" />
                    </button>
                    <form id="contact_form" name="contact_form" onSubmit={handleSubmit} >

                        <div className="gap-5 grid grid-cols-2 mb-5">
                            <InputField
                                id="S_name"
                                name="S_name"
                                type="text"
                                placeholder="Enter Name"

                                onChange={handleInputChange}
                                icon={<FaUser />}
                            />

                            <InputField
                                id="S_phone"
                                name="S_phone"
                                type="tel"
                                placeholder="Enter Phone"

                                onChange={handleInputChange}
                                icon={<FaPhone />}
                            />
                            <InputField
                                id="Location_to"
                                name="Location_to"
                                type="text"
                                placeholder="Location to"
                                className="my-4"
                                onChange={handleInputChange}
                                icon={<FaLocationArrow />}
                            />
                            <InputField
                                id="Location_form"
                                name="Location_form"
                                type="text"
                                placeholder="Location From"
                                className="my-4"

                                onChange={handleInputChange}
                                icon={<FaLocationArrow />}
                            />


                        </div>
                        <InputField
                            id="message"
                            name="message"
                            type="textarea"
                            placeholder="Write your message"
                            onChange={handleInputChange}
                            rows={6}
                            icon={<FaMessage />}
                        />

                        <button
                            type="submit"
                            className="text-white  w-full text-center justify-center mt-4 inline-flex items-center text-base font-semibold capitalize px-5 py-2.5 rounded-none cursor-pointer overflow-hidden bg-white shadow transition-all duration-500"
                        >
                            Submit
                        </button>
                    </form>

                </div>

                <img src="/images/form-image.webp" alt="form-popup" className="hidden md:block w-[45%] h-auto object-cover" />
            </div>
        </div>
    );
};

export default PopupForm;
