import React from "react";

const Home = () => {
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
    <section id="home" className="min-h-screen flex items-center relative z-10 pt-20 pb-8">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-10">
          Orion <br />
          <span className="text-gray-400">Artificial Intelligence</span>
        </h1>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {infoGridItems.map((item, index) => (
            <div key={index} className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
