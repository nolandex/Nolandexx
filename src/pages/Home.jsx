import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const infoGridItems = [
    {
      title: "🚀 AI for the Future",
      description: "We develop AI solutions that empower businesses to grow faster and more efficiently.",
    },
    {
      title: "📚 AI in Education",
      description: "Our AI initiatives help educate the public on the rapid advancements in technology.",
    },
    {
      title: "🌍 Proudly Representing Our Nation",
      description: "We are proud to be the first AI company from our country competing globally.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Orion <br />
            <span className="text-gray-400">Artificial Intelligence</span>
          </h1>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <button className="glass px-8 py-4 text-white font-semibold hover:bg-gray-100 hover:text-black transition">
              Explore Our Innovations
            </button>
            <button 
              className="glass px-8 py-4 text-white font-semibold hover:bg-gray-100 hover:text-black transition"
              onClick={() => navigate("/chatbot")}
            >
              Try Our First AI Chat
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {infoGridItems.map((item, index) => (
              <div key={index} className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Decorative Leaf Animation */}
          <div className="mt-12">
            <div className="long-g long-g--7">
              <div className="grow-ans" style={{ "--d": "3s" }}>
                <div className="leaf leaf--0"></div>
              </div>
              <div className="grow-ans" style={{ "--d": "3.2s" }}>
                <div className="leaf leaf--1"></div>
              </div>
              <div className="grow-ans" style={{ "--d": "3.5s" }}>
                <div className="leaf leaf--2"></div>
              </div>
              <div className="grow-ans" style={{ "--d": "3.6s" }}>
                <div className="leaf leaf--3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
