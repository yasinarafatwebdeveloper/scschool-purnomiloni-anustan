"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const eventSchedule = [
  {
    time: "09:00 AM",
    title: "আগত অতিথিদের আগমন",
    description: "সকল প্রাক্তন ছাত্র-ছাত্রী ও অতিথিদের রেজিস্ট্রেশন ও সংবর্ধনা প্রদান।",
    image: "/images/host.jpg",
    animation: "fade-up",
    bgColor: "bg-yellow-100"
  },
  {
    time: "10:00 AM",
    title: "আলোচনা সভা",
    description: "প্রাক্তন ছাত্রদের স্মৃতিচারণ, প্রধান শিক্ষকের বক্তব্য, বিশেষ অতিথির আলোচনা।",
    image: "/images/tabletalk.jpg",
    animation: "fade-right",
    bgColor: "bg-green-100"
  },
  {
    time: "12:00 PM",
    title: "সাংস্কৃতিক অনুষ্ঠান",
    description: "গান, কবিতা, নৃত্য ও প্রাক্তনদের নানা ধরনের পরিবেশনা।",
    image: "/images/song.jpg",
    animation: "fade-left",
    bgColor: "bg-pink-100"
  },
  {
    time: "01:00 PM",
    title: "মধ্যাহ্নভোজ (Lunch)",
    description: "বৈচিত্র্যময় খাবারের আয়োজন সকল অংশগ্রহণকারীদের জন্য।",
    image: "/images/food.jpg",
    animation: "zoom-in",
    bgColor: "bg-purple-100"
  },
  {
    time: "03:00 PM",
    title: "বিদায় পর্ব",
    description: "সমাপ্তি বক্তব্য ও ভবিষ্যতের মিলনের প্রত্যাশা। ছবি তোলা ও উপহার বিতরণ।",
    image: "/images/endDay.jpg",
    animation: "flip-up",
    bgColor: "bg-blue-100"
  }
];

export default function EventSchedule() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50
    });
  }, []);

  return (
    <div className='mt-10'>
      <h1 className='text-center mt-6 text-2xl sm:text-4xl text-emerald-500 font-bold'>
        আমাদের স্মৃতিময় <span className="text-pink-600">অনুষ্ঠান</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-6">
        {eventSchedule.map((event, idx) => (
          <div
            key={idx}
            className={`max-w-sm rounded-2xl overflow-hidden shadow-lg ${event.bgColor} hover:shadow-2xl transform hover:scale-105 transition duration-500`}
            data-aos={event.animation}
            data-aos-delay={idx * 100}
          >
            <img className="w-full h-48 object-cover" src={event.image} alt={event.title} />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 text-gray-800">{event.title}</h2>
              <p className="text-gray-700 text-base">{event.description}</p>
            </div>
            <div className="px-6 py-4 flex flex-wrap gap-2">
              <span className="inline-block bg-green-200 text-green-800 text-sm px-3 py-1 rounded-full">
                🕘 {event.time}
              </span>
              <span className="inline-block bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full">
                #2026
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
