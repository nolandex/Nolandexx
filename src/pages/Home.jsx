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
      name: "Basic",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Access to Core AI Tools",
        "5 Projects",
        "Email Support",
        "Basic Analytics",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "All Basic Features",
        "Unlimited Projects",
        "Priority Support",
        "Advanced Analytics",
        "API Access",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 249,
      yearlyPrice: 2490,
      features: [
        "All Pro Features",
        "Custom AI Solutions",
        "Dedicated Account Manager",
        "24/7 Support",
        "On-Premise Deployment",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Orion <br />
            <span className="text-gray-400">Artificial Intelligence</span>
          </h1>

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
          <div className="mt-16">
            <h2 className="text-3විට: text-3xl md:text-4xl font-bold mb-8 text-center">Pricing Plans</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto text-center">
              Choose the plan that best suits your business needs. Switch between monthly or yearly billing for maximum flexibility.
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center gap-4 mb-10">
              <button
                className={`px-6 py-2 rounded-lg font-semibold transition ${!isYearly ? "bg-gray-100 text-black" : "text-gray-400"}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-lg font-semibold transition ${isYearly ? "bg-gray-100 text-black" : "text-gray-400"}`}
                onClick={() => setIsYearly(true)}
              >
                Yearly (Save 15%)
              </button>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`glass p-6 rounded-lg ${plan.highlighted ? "border-2 border-gray-100" : ""}`}
                >
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-4">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-lg font-normal">/{isYearly ? "year" : "month"}</span>
                  </p>
                  <ul className="text-gray-400 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full glass px-6 py-3 text-white font-semibold hover:bg-gray-100 hover:text-black transition"
                  >
                    Get Started
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
