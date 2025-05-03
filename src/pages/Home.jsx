import React from "react";

const Home = () => {
  // Data untuk pricing plans
  const pricingPlans = [
    {
      name: "Premium",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "AI-Powered Automation",
        "Unlimited Projects",
        "Priority Email Support",
        "Advanced Analytics Dashboard",
        "API Integration",
      ],
      highlighted: true, // Always highlighted for simplicity
    },
    {
      name: "Enterprise",
      monthlyPrice: null, // Not shown for monthly
      yearlyPrice: 4990,
      features: [
        "All Premium Features",
        "Custom AI Model Development",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "On-Premise Deployment Option",
      ],
      highlighted: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Orion</h1>

          {/* Pricing Section */}
          <div id="pricing" className="mt-16">
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`glass p-8 rounded-xl ${
                    plan.highlighted ? "border-2 border-blue-500 shadow-lg shadow-blue-500/20" : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-3 text-white">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6 text-white">
                    ${plan.yearlyPrice}
                    <span className="text-lg font-normal text-gray-400">/year</span>
                  </p>
                  <ul className="text-gray-300 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 transition-transform duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
