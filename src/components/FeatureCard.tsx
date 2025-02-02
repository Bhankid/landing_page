import React, { JSX } from "react";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 mb-8 sm:mb-6 md:mb-8">
      <div className="bg-slate-900/50 p-3 rounded-xl w-fit mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
