"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null); // প্রথমে null, যাতে SSR/CSR mismatch না হয়

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-01-15T00:00:00");
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    // প্রথমে একবার সেট করে নিই
    setTimeLeft(calculateTimeLeft());

    // প্রতি ১ সেকেন্ডে টাইম আপডেট
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null; // শুরুতে কিছু না দেখাইলে SSR/CSR mismatch হয় না

  return (
    <div className="my-10 py-10 px-6 rounded-2xl shadow-2xl bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 border border-yellow-400 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">⏳ পূর্ণমিলনী শুরু হতে বাকি:</h2>

      <div className="flex flex-wrap justify-center gap-6">
        <button className="px-6 py-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-2xl shadow-md text-xl w-32">
          {timeLeft.days} <br /> দিন
        </button>

        <button className="px-6 py-4 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-2xl shadow-md text-xl w-32">
          {timeLeft.hours} <br /> ঘণ্টা
        </button>

        <button className="px-6 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-2xl shadow-md text-xl w-32">
          {timeLeft.minutes} <br /> মিনিট
        </button>

        <button className="px-6 py-4 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-2xl shadow-md text-xl w-32">
          {timeLeft.seconds} <br /> সেকেন্ড
        </button>
      </div>
    </div>
  );
}
