import React, { useState } from "react";

const Home = () => {
  // State for billing toggle (monthly/yearly)
  const [isYearly, setIsYearly] = useState(false);

  // Data untuk info grid
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
      highlighted: !isYearly, // Highlight for monthly billing
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
      highlighted: isYearly, // Highlight for yearly billing
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Orion is a leading AI company committed to building innovative technology solutions that not only transform
            businesses but also prioritize education, ensuring a broader impact on society and the digital future.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="glass px-8 py-4 text-white font-semibold hover:bg-gray-100 hover:text-black transition">
              Explore Our Innovations
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

          {/* Pricing Section */}
          <div id="pricing" className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Our Pricing</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto text-center">
              Unlock the power of AI with our flexible plans, designed for businesses of all sizes.
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center gap-4 mb-10">
              <button
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  !isYearly ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "text-gray-400"
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  isYearly ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "text-gray-400"
                }`}
                onClick={() => setIsYearly(true)}
              >
                Yearly (Save 20%)
              </button>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingPlans
                .filter((plan) => isYearly || plan.monthlyPrice !== null) // Show Enterprise only for yearly
                .map((plan, index) => (
                  <div
                    key={index}
                    className={`glass p-8 rounded-xl ${
                      plan.highlighted ? "border-2 border-blue-500 shadow-lg shadow-blue-500/20" : ""
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-3 text-white">{plan.name}</h3>
                    <p className="text-3xl font-bold mb-6 text-white">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      <span className="text-lg font-normal text-gray-400">
                        /{isYearly ? "year" : "month"}
                      </span>
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
