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
    <section
      id="home"
      className="min-h-screen flex items-center relative z-10 pt-10 pb-8" // pt-20 diubah jadi pt-10 agar lebih ke atas
    >
      <div className="container mx-auto px-4 text-center">
        {/* Title - Orion diganti NolanDex, Artificial Intelligence dihapus */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          NolanDex
        </h1>

        {/* Info Grid - Button dengan desain baru */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {infoGridItems.map((item, index) => (
            <button
              key={index}
              className="relative glass p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 
                         hover:bg-white/20 hover:scale-105 hover:shadow-lg 
                         transition-all duration-300 ease-in-out transform 
                         group"
            >
              {/* Konten button */}
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-gray-100">
                {item.description}
              </p>

              {/* Efek animasi tambahan (border glow saat hover) */}
              <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
