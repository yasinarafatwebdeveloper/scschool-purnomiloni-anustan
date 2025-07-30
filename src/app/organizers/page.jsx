"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const organizersName = [
    {
      name: "মোঃ রাহাত হোসেন",
      image: "/images/organizers/rahat.jpg",
      address: "দেবিদ্বার, কুমিল্লা",
      job: "শিক্ষক, Bk High School",
      contact: "01712-345678"
    },
    {
      name: "মোছাঃ শারমিন আক্তার",
      image: "/images/organizers/sharmin.jpg",
      address: "মুরাদনগর, কুমিল্লা",
      job: "সহকারী শিক্ষক, Bk High School",
      contact: "01813-456789"
    },
    {
      name: "মোঃ আজিজুর রহমান",
      image: "/images/organizers/aziz.jpg",
      address: "চান্দিনা, কুমিল্লা",
      job: "প্রাক্তন ছাত্র, ঢাকা বিশ্ববিদ্যালয়",
      contact: "01911-567890"
    },
    {
      name: "মোঃ নাজমুল হাসান",
      image: "/images/organizers/nazmul.jpg",
      address: "লাকসাম, কুমিল্লা",
      job: "প্রকৌশলী, Walton Group",
      contact: "01615-678901"
    }
  ];

export default function Organizers() {
  const [organizers, setOrganizers] = useState(organizersName);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchData = async () => {
      try {
        const res = await fetch('/app/organizers');
        const data = await res.json();
        setOrganizers(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-10 px-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">🎉 আমাদের আয়োজকবৃন্দ</h2>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img src={person.image} alt={person.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{person.name}</h3>
                <p className="text-gray-600 mb-1">{person.job}</p>
                <p className="text-gray-600 mb-1">🏠 {person.address}</p>
                <p className="text-gray-600">📞 {person.contact}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
