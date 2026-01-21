import React from "react";

interface Section2Props {
  className?: string;
}

const Section2: React.FC<Section2Props> = ({ className = "" }) => {
  const stats = [
    {
      number: "12,000+",
      label: "Installations Worldwide",
      description: "Trusted by leading organizations globally"
    },
    {
      number: "50+",
      label: "Countries",
      description: "Serving clients across continents"
    },
    {
      number: "25+",
      label: "Years",
      description: "Of industry expertise and innovation"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable performance you can count on"
    }
  ];

  return (
    <section className={`py-20 bg-neutral-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-primary-500 mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-neutral-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
