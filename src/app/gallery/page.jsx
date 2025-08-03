"use client";

import React, { useEffect, useState } from 'react';

export default function Gallery() {
  const teachers = [
    {
      id: 1,
      name: "জনাব মোঃ কামাল হোসেন",
      image: "/images/male4.jpg",
      subject: "গণিত",
      address: "দেবিদ্বার, কুমিল্লা",
      details: "২০ বছরের অভিজ্ঞ গণিত শিক্ষক। শিক্ষার্থীদের প্রিয়।",
      story: "ঢাকা বিশ্ববিদ্যালয় থেকে স্নাতক। স্কুলের প্রতি ভালোবাসা থেকেই শিক্ষকতা শুরু।"
    },
    {
      id: 2,
      name: "মিসেস রোজিনা বেগম",
      image: "/images/female1.jpg",
      subject: "ইংরেজি",
      address: "কুমিল্লা সদর",
      details: "ইংরেজি বিষয়ে দক্ষ ও পরিশ্রমী শিক্ষিকা।",
      story: "চট্টগ্রাম বিশ্ববিদ্যালয় থেকে ইংরেজিতে মাস্টার্স। শিক্ষার্থীদের প্রিয় মুখ।"
    },
    {
      id: 3,
      name: "জনাব আব্দুল মতিন",
      image: "/images/male1.jpg",
      subject: "ভৌত বিজ্ঞান",
      address: "চান্দিনা, কুমিল্লা",
      details: "উদ্দীপনামূলক শিক্ষকতা পদ্ধতির জন্য পরিচিত।",
      story: "শিক্ষকতা শুরু ২০০০ সালে। বরাবরই বিজ্ঞান শিক্ষায় উৎসাহিত।"
    },
    {
      id: 4,
      name: "মিসেস শাহনাজ পারভীন",
      image: "/images/female2.jpg",
      subject: "রসায়ন",
      address: "মুরাদনগর, কুমিল্লা",
      details: "রসায়নের প্রতি ভালবাসা শিক্ষার্থীদের মাঝে ছড়িয়ে দিয়েছেন।",
      story: "চট্টগ্রাম কলেজ থেকে রসায়নে মাস্টার্স। শিক্ষাক্ষেত্রে ১৫ বছর।"
    },
    {
      id: 5,
      name: "জনাব জাহাঙ্গীর আলম",
      image: "/images/male3.jpg",
      subject: "জীববিজ্ঞান",
      address: "লাকসাম, কুমিল্লা",
      details: "উৎসাহব্যঞ্জক ক্লাসের জন্য প্রশংসিত।",
      story: "চট্টগ্রাম বিশ্ববিদ্যালয় থেকে পড়াশোনা শেষ করে শিক্ষকতা।"
    },
    {
      id: 6,
      name: "মিসেস শবনম আক্তার",
      image: "/images/female3.jpg",
      subject: "বাংলা",
      address: "কুমিল্লা শহর",
      details: "বাংলা সাহিত্য ভালোবাসেন ও শেখান।",
      story: "জগন্নাথ বিশ্ববিদ্যালয় থেকে বাংলা সাহিত্য। সাহিত্যচর্চা ও শিক্ষকতায় নিবেদিত।"
    },
    {
      id: 7,
      name: "জনাব মাহফুজুর রহমান",
      image: "/images/male4.jpg",
      subject: "ইতিহাস",
      address: "দেবিদ্বার, কুমিল্লা",
      details: "ইতিহাসের গল্পময় ক্লাস নেন।",
      story: "ঢাকা কলেজ থেকে ইতিহাসে স্নাতকোত্তর। স্কুল জীবনের স্মৃতি থেকেই শিক্ষকতার প্রতি টান।"
    },
    {
      id: 8,
      name: "মিসেস সালমা খাতুন",
      image: "/images/female4.jpg",
      subject: "গার্হস্থ্য বিজ্ঞান",
      address: "ব্রাহ্মণবাড়িয়া",
      details: "জীবনঘনিষ্ঠ শিক্ষা প্রদানে পারদর্শী।",
      story: "নোয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় থেকে পড়াশোনা। শিক্ষায় উদ্দীপ্ত।"
    },
    {
      id: 9,
      name: "জনাব রফিকুল ইসলাম",
      image: "/images/male4.jpg",
      subject: "ইসলাম শিক্ষা",
      address: "হোমনা, কুমিল্লা",
      details: "নৈতিক শিক্ষার উপর জোর দেন।",
      story: "মাদ্রাসা থেকে পড়াশোনা শেষ করে আধুনিক শিক্ষায় যুক্ত।"
    },
    {
      id: 10,
      name: "মিসেস জেসমিন আক্তার",
      image: "/images/female5.jpg",
      subject: "কম্পিউটার শিক্ষা",
      address: "কুমিল্লা সদর দক্ষিণ",
      details: "প্রযুক্তি শিক্ষায় নতুন মাত্রা যোগ করেছেন।",
      story: "AIUB থেকে কম্পিউটার সায়েন্সে ডিগ্রি অর্জন করে শিক্ষকতায় আসেন।"
    }
  ];

   const [teachersName, setTeachers] = useState(teachers);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("/api/teachers");
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  const handleSeeMore = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleClose = () => {
    setSelectedTeacher(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">আমাদের শিক্ষকবৃন্দ</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teachersName.map((teacher) => (
          <div
            key={teacher.id}
            className="group relative h-[420px] flex flex-col rounded-lg shadow-lg overflow-hidden border"
          >
            {/* Transparent Glass Effect on Hover */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none rounded-lg"></div>

            {/* Image */}
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-48 object-cover rounded-t-lg z-0"
            />

            {/* Content */}
            <div className="p-4 flex-grow flex flex-col justify-between z-20 relative bg-white">
              <div>
                <h2 className="text-xl font-semibold">{teacher.name}</h2>
                <p className="text-sm text-gray-600">বিষয়: {teacher.subject}</p>
                <p className="text-sm text-gray-600">ঠিকানা: {teacher.address}</p>
                <p className="text-gray-700 mt-2">{teacher.details}</p>
              </div>
              <button
                onClick={() => handleSeeMore(teacher)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedTeacher.name}</h2>
            <p className="text-gray-700 mb-4">{selectedTeacher.story}</p>
            <button
              onClick={handleClose}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
