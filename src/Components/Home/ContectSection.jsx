// src/components/ContactSection.js
import React from "react";
import ContactForm from "./ContectForm";

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
<div className="bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
  <p className="mb-2">
    <strong>Email:</strong> info@example.com
  </p>
  <p className="mb-2">
    <strong>Phone:</strong> +1 (123) 456-7890
  </p>
  <p>
    <strong>Address:</strong> 123 University St, Cityville, State
  </p>
  {/* Additional Contact Details */}
  <div className="mt-4">
    <p className="mb-2">
      <strong>Admissions Email:</strong> admissions@example.com
    </p>
    <p className="mb-2">
      <strong>Support Hotline:</strong> +1 (123) 555-1234
    </p>
    {/* Add more details as needed */}
  </div>
  {/* Location Map */}
  <div className="mt-8">
    {/* You can embed a Google Map or use another map service here */}
    {/* For example, using an embedded Google Map */}
    <iframe
      title="University Location"
      width="100%"
      height="300"
      frameBorder="0"
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-86.12345678901234!3d39.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNzkuMDUwLjEyMy42MyI-U2VhdHRsZQ!5e0!3m2!1sen!2sus!4v1634170866655!5m2!1sen!2sus"
      allowFullScreen
    ></iframe>
  </div>
</div>


          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
