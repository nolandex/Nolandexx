import React from "react";

const Home = () => {
  const infoGridItems = [
    {
      title: "🚀 AI Solutions",
      description: "Empowering business growth with AI",
    },
    {
      title: "📚 AI Education",
      description: "Advancing tech education",
    },
    {
      title: "🌍 Global Presence",
      description: "First AI company from our nation",
    },
    {
      title: "🔬 AI Research",
      description: "Innovative research projects",
    },
    {
      title: "💡 Consulting",
      description: "Expert AI strategy services",
    },
    {
      title: "🤝 Partnerships",
      description: "Collaborate with leaders",
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative z-10 pt-20 pb-8">
      <div className="container mx-auto px-4 text-center">
        {/* Title - tetap sama seperti awal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-10">
          Orion <br />
          <span className="text-gray-400">Artificial Intelligence</span>
        </h1>

        {/* Info Grid - yang diubah hanya bagian tombolnya */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {infoGridItems.map((item, index) => (
            <button 
              key={index}
              className="glass p-4 rounded-lg hover:bg-white/20 transition-all duration-200 text-left"
            >
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
