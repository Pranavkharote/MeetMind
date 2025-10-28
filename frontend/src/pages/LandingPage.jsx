import React from "react";
import "../index.css";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* 🌐 Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/60 shadow-sm">
        <h2 className="text-3xl font-extrabold text-blue-700 tracking-wide">
          MeetMind
        </h2>
        <div className="flex gap-8 text-gray-700 font-medium">
          <p className="cursor-pointer hover:text-blue-600 transition-colors">
            Join as Guest
          </p>
          <p className="cursor-pointer hover:text-blue-600 transition-colors">
            Login
          </p>
          <p className="cursor-pointer hover:text-blue-600 transition-colors">
            Register
          </p>
        </div>
      </nav>

      {/* 💡 Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 mt-16">
        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Connect, Collaborate & Create with{" "}
            <span className="text-blue-600">MeetMind</span>
          </h1>
          <p className="text-gray-600 mt-6 text-lg">
            An intelligent video meeting platform with real-time chat, AI
            meeting summaries, live transcription, and more. Experience the
            future of collaboration.
          </p>
          <div className="mt-8 flex gap-4">
            <button  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Start a Meeting
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="mt-12 md:mt-0 md:w-[50%] flex justify-center">
          <img
            src="mobile.png"
            alt="Video call illustration"
            // className="w-96 md:w-[450px] rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* 🌟 Features Section */}
      <section className="mt-24 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Everything you need for smart meetings
        </h2>
        <p className="text-gray-600 mt-3 mb-12">
          Designed for developers, teams, and creators to connect effortlessly.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              🎥 Real-time Video & Audio
            </h3>
            <p className="text-gray-600">
              Crystal-clear peer-to-peer calls with ultra-low latency.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              🤖 AI Summaries
            </h3>
            <p className="text-gray-600">
              Get automatic AI-powered meeting notes and highlights.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              💬 Live Chat & Transcription
            </h3>
            <p className="text-gray-600">
              Collaborate with chat and real-time speech-to-text features.
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to experience smarter meetings?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join thousands of users who collaborate effortlessly on MeetMind.
        </p>
        <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:scale-105 transition-all duration-300">
          Get Started for Free
        </button>
      </section>

      {/* 👣 Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm">
        © {new Date().getFullYear()} MeetMind — Built for smarter connections.
      </footer>
    </div>
  );
};

export default LandingPage;
