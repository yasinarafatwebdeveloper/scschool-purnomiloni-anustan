'use client';

import React, { useState } from 'react';

export default function ServicesPage() {
  // ফেক ডাটা (বাংলায় অনুবাদ করা)
  const fakeServices = [
    {
      title: "অনলাইন নিবন্ধন",
      description: "আমাদের পুনর্মিলনীতে অংশগ্রহণের জন্য অনলাইনে সহজেই নিবন্ধন করুন। নিবন্ধনের শেষ তারিখ ২০ আগস্ট ২০২৫। বিকাশ বা নগদের মাধ্যমে অর্থপ্রদান করা যাবে।",
      icon: "📝",
    },
    {
      title: "ইভেন্ট সূচি",
      description: "পুরো দিনের অনুষ্ঠানে থাকবে স্বাগত বক্তব্য, মধ্যাহ্নভোজ, সাংস্কৃতিক অনুষ্ঠান এবং গ্রুপ ছবি তোলা। সকাল ১০:০০ টায় অনুষ্ঠান শুরু হবে।",
      icon: "📅",
    },
    {
      title: "খাবার ও ক্যাটারিং",
      description: "দারুন স্বাদের দুপুরের খাবার ও নাস্তার আয়োজন। নিরামিষ খাবারের বিকল্পও থাকবে।",
      icon: "🍱",
    },
    {
      title: "ফটোগ্রাফি ও ভিডিওগ্রাফি",
      description: "পেশাদার টিম পুরো অনুষ্ঠানটি ধারণ করবে। সব ছবি ও ভিডিও ইভেন্টের পর গুগল ড্রাইভের মাধ্যমে শেয়ার করা হবে।",
      icon: "📸",
    },
    {
      title: "স্মৃতিচিহ্ন",
      description: "বিশেষ পুনর্মিলনী টি-শার্ট এবং প্রিন্ট করা গ্রুপ ছবি উপহার হিসেবে প্রদান করা হবে।",
      icon: "🎁",
    }
  ];

  // স্টেটে ফেক ডাটা রাখলাম
  const [services] = useState(fakeServices);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">আমাদের সার্ভিসসমূহ</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 border">
            <h2 className="text-xl font-semibold mb-2">{service.icon} {service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
