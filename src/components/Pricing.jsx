import React from "react";

const packages = [
  {
    name: "Bronze Package",
    price: "$99",
    description:
      "Ideal for individuals or small businesses looking toget started with mental wellness.",
    features: [
      "Access to besic wellnewss resources",
      "Weekly mentalwellness tips",
      "Community support grop access",
    ],
  },
  {
    name: "Silver Package",
    price: "$199",
    description:
      "A great choice for growing businesses with additional features and support for mental wellness.",
    features: [
      "All Bronze Package features",
      "Monthly guided meditation sessions",
      "Personalized wellness plan",
      "Access to expert webinars",
    ],
  },
  {
    name: "Gold Package",
    price: "$299",
    description:
      "Perfect for larger businesses needing advanced mental wellness feature and premium support.",
    features: [
      "All Bronze Package features",
      "Monthly guided meditation sessions",
      "Personalized wellness plan",
      "Access to expert webinars",
    ],
  },
];

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById("content");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
      });
    }
  };

  return (
    <div className="bg-[#f7f8fc pt-32" id="pricing">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3">
            Prefect for Small & Large Brands
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            obcaecati, accusantium sint quaerat
          </p>
        </div>

        {/* packages */}
        <div className="flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-12">
          {packages.map((pkg, index) => (
            <div
              className="bg-slate-100 rounded-lg p-6 flex-1 shadow-lg"
              key={index}
            >
              <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
              <hr className="w-24 border text bg-blue-700 border-blue-700" />
              <p className="text-3xl font-bold mb-4">
                {pkg.price} <span className="text-lg font-normal">/mo</span>
              </p>
              <p className="text-lg mb-4">{pkg.description}</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={handleScrollToContact}
                className="bg-blue-700 text-white px-4 py-2 rounded"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
