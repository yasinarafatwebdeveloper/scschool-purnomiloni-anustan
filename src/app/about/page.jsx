'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">আমাদের সম্পর্কে</h1>

      {/* উদ্দেশ্য */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🎯 আমাদের লক্ষ্য</h2>
        <p className="text-gray-700">
          এই রিইউনিয়নের লক্ষ্য হল Satkhira Govt. College-এর ২০১৫ ব্যাচের সাবেক শিক্ষার্থীদের একত্রিত করা এবং পুরোনো স্মৃতিগুলো আবারও ভাগাভাগি করে নেওয়া। 
          দীর্ঘ সময় পর বন্ধুদের একসাথে দেখা, হাসি-আনন্দ, গল্প এবং সুন্দর মুহূর্ত কাটানোই আমাদের আসল উদ্দেশ্য।
        </p>
      </section>

      {/* আয়োজক দল */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🧑‍💼 আয়োজক দল</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>সভাপতি: মেহেদী হাসান</li>
          <li>সম্পাদক: ইয়াসিন আরাফাত</li>
          <li>কোষাধ্যক্ষ: শাওন ইসলাম</li>
        </ul>
      </section>

      {/* ইভেন্টের সময় ও স্থান */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🗓️ তারিখ ও স্থান</h2>
        <p className="text-gray-700">
          রিইউনিয়নটি অনুষ্ঠিত হবে ২৫ আগস্ট ২০২৫, সকাল ১০টা থেকে, ঢাকা বিশ্ববিদ্যালয়ের টিএসসি মিলনায়তনে।
        </p>
      </section>

      {/* যোগাযোগ */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">💌 যোগাযোগ</h2>
        <p className="text-gray-700">
          যেকোনো তথ্যের জন্য যোগাযোগ করুন:
        </p>
        <ul className="list-inside text-gray-700 mt-2">
          <li>📞 ফোন: 017XXXXXXXX</li>
          <li>📧 ইমেইল: reunion2025@gmail.com</li>
          <li>📘 ফেসবুক গ্রুপ: <a href="#" className="text-blue-600 underline">Batch '15 Reunion Group</a></li>
        </ul>
      </section>

      {/* ধন্যবাদ বার্তা */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">❤️ ধন্যবাদ</h2>
        <p className="text-gray-700">
          রেজিস্ট্রেশন ও আগ্রহের জন্য সবাইকে আন্তরিক ধন্যবাদ। চলুন একসাথে একটি স্মরণীয় দিন উপভোগ করি!
        </p>
      </section>
    </div>
  );
}
