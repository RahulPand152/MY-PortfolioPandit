import React, { useState } from "react";
//import { createContact } from "../Api";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post("http://localhost:5000/api/v1/contacts", formData);
    //    await createContact(formData);
    //     alert("Saved successfully");
      alert(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to submit form",error);
    }
  };

  return (
    <div name="Contact"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16  m'>
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
    <form onSubmit={handleSubmit} className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
      <h1 className="text-xl font-semibold mb-4 ">Send Your Message</h1>
      <div className="flex flex-col mb-4">
        <label className="block text-gray-700">FullName</label>
      <input
        className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
        type="text"
        name="name"
        placeholder="Enter Your FullName"
        value={formData.name}
        onChange={handleChange}
        required
      />
      </div>
      <div className="flex flex-col mb-4">
        <label className="block text-gray-700">Email</label>
      <input
      className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
        type="email"
        name="email"
        placeholder="Enter Your Email address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      </div>
      <div className="flex flex-col mb-4">
        <label className="block text-gray-700">Message</label>
      <textarea
      className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
        name="message"
        placeholder="Enter your message here "
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      </div>
      <button  className="bg-black text-white rounded-xl px-3 py-4 hover:bg-green-400  duration-700 hover:text-red-700" type="submit">Send</button>
      
    </form>
    </div>
    </div>
  );
};

export default ContactForm;
