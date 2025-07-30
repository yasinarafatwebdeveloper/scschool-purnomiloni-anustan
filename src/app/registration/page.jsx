"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",
    currentAddress: "",
    permanentAddress: "",
    passingYear: "",
    profession: "",
    bloodGroup: "",
    photo: null,
    notes: "",
    paymentMethod: "",
    transactionId: ""
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      setPhotoPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const {
      fullName, mobile, email, passingYear, paymentMethod, transactionId, dob, bloodGroup
    } = formData;

    if (!fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile Number is required.";
    } else if (!/^\d{11}$/.test(mobile)) {
      newErrors.mobile = "Mobile Number must be exactly 11 digits.";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address.";
    }
    if (passingYear && !/^\d{4}$/.test(passingYear)) {
      newErrors.passingYear = "Passing Year must be a valid 4-digit year.";
    }
    if (dob && new Date(dob) > new Date()) {
      newErrors.dob = "Date of Birth cannot be in the future.";
    }
    if (bloodGroup && !/^(A|B|AB|O)[+-]$/i.test(bloodGroup.trim())) {
      newErrors.bloodGroup = "Invalid blood group (e.g., A+, O-).";
    }
    if (!paymentMethod) newErrors.paymentMethod = "Payment Method is required.";
    if (!transactionId.trim()) newErrors.transactionId = "Transaction ID is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/registration", {
        method: "POST",
        body: data
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        let message = "Registration failed.";
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          message = errorData.message || message;
        } else {
          const text = await response.text();
          message = `Unexpected response: ${text.slice(0, 100)}`;
        }
        throw new Error(message);
      }

      const result = await response.json();
      toast.success("Registration Successful!");

      // reset form
      setFormData({
        fullName: "",
        gender: "",
        dob: "",
        mobile: "",
        email: "",
        currentAddress: "",
        permanentAddress: "",
        passingYear: "",
        profession: "",
        bloodGroup: "",
        photo: null,
        notes: "",
        paymentMethod: "",
        transactionId: ""
      });
      setPhotoPreview(null);
      setErrors({});
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(error.message || "Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderError = (field) => errors[field] && <span className="text-red-500 text-sm mt-1">{errors[field]}</span>;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl mt-10">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700">পূর্ণমিলনী রেজিস্ট্রেশন ফর্ম</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Full Name *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="border rounded-xl p-3" />
          {renderError("fullName")}
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="border rounded-xl p-3">
            <option value="">Select Gender</option>
            <option value="Male">পুরুষ</option>
            <option value="Female">মহিলা</option>
            <option value="Other">অন্যান্য</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border rounded-xl p-3" />
          {renderError("dob")}
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Mobile Number *</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="border rounded-xl p-3" placeholder="Eg: 01XXXXXXXXX" />
          {renderError("mobile")}
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="border rounded-xl p-3" />
          {renderError("email")}
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Current Address</label>
          <input type="text" name="currentAddress" value={formData.currentAddress} onChange={handleChange} className="border rounded-xl p-3" />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Permanent Address</label>
          <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} className="border rounded-xl p-3" />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Passing Year</label>
          <input type="text" name="passingYear" value={formData.passingYear} onChange={handleChange} className="border rounded-xl p-3" placeholder="Eg: 2015" />
          {renderError("passingYear")}
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Current Profession</label>
          <input type="text" name="profession" value={formData.profession} onChange={handleChange} className="border rounded-xl p-3" />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Blood Group</label>
          <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="border rounded-xl p-3" placeholder="Eg: A+, O-" />
          {renderError("bloodGroup")}
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Photo Upload</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} className="border rounded-xl p-3" />
          {photoPreview && (
            <img src={photoPreview} alt="Preview" className="mt-3 rounded-xl shadow-md w-32 h-32 object-cover" />
          )}
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="mb-2 font-semibold text-gray-700">Payment Method *</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="border rounded-xl p-3">
            <option value="">Select Payment Method</option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="Rocket">Rocket</option>
            <option value="Bank">Bank</option>
          </select>
          {renderError("paymentMethod")}
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="mb-2 font-semibold text-gray-700">Transaction ID *</label>
          <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} className="border rounded-xl p-3" placeholder="Enter Transaction ID" />
          {renderError("transactionId")}
        </div>

        <div className="md:col-span-2 text-center">
          <button type="submit" disabled={loading} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300">
            {loading ? "Submitting..." : "Submit Registration (Minimum 500 BDT)"}
          </button>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
}
