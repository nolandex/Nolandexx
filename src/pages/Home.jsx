import React from "react";

const Home = () => {
  const infoGridItems = [
    {
      title: "AI Solutions",
      emoji: "🚀",
      description: "Cutting-edge AI for business growth",
    },
    {
      title: "AI Education",
      emoji: "📚",
      description: "Learn about AI advancements",
    },
    {
      title: "Global Presence",
      emoji: "🌍",
      description: "Representing our nation worldwide",
    },
    {
      title: "Research",
      emoji: "🔬",
      description: "Innovative AI research projects",
    },
    {
      title: "Consulting",
      emoji: "💡",
      description: "Expert AI strategy consulting",
    },
    {
      title: "Partnerships",
      emoji: "🤝",
      description: "Collaborate with industry leaders",
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative z-10 pt-20 pb-8 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-white">
          Orion <br />
          <span className="text-blue-300">Artificial Intelligence</span>
        </h1>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {infoGridItems.map((item, index) => (
            <button
              key={index}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 p-4 rounded-xl border border-white/10 text-left group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h3 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Additional CTA */}
        <button className="mt-12 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all">
          Contact Our Team
        </button>
      </div>
    </section>
  );
};

export default Home;
