'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('আপনার মেসেজটি সাবমিট হয়েছে ✅');
    // এখানে তুমি ফর্ম ডেটা API তে পাঠাতে পারো
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">যোগাযোগ করুন</h1>

      <p className="mb-4 text-gray-700">
        রিইউনিয়ন সংক্রান্ত যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন নিচের তথ্যের মাধ্যমে।
      </p>

      <div className="bg-white rounded-xl shadow-md p-4 mb-8 border">
        <h2 className="text-xl font-semibold mb-2">যোগাযোগের তথ্য</h2>
        <ul className="text-gray-700 space-y-1">
          <li><strong>সভাপতি:</strong> 01712-XXXXXX</li>
          <li><strong>সম্পাদক:</strong> 01813-XXXXXX</li>
          <li><strong>ইমেইল:</strong> reunion2025@gmail.com</li>
          <li>
            <strong>Facebook:</strong>{' '}
            <a href="https://facebook.com/yourgroup" className="text-blue-600 underline" target="_blank">facebook.com/yourgroup</a>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-4 border">
        <h2 className="text-xl font-semibold mb-4">মেসেজ পাঠান</h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">আপনার নাম</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">ইমেইল</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">আপনার বার্তা</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          পাঠিয়ে দিন
        </button>
      </form>
    </div>
  );
}
