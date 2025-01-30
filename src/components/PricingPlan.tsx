
import React from 'react';
import { Check } from 'lucide-react';

interface PricingPlanProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  popular?: boolean;
  features: string[];
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  period,
  description,
  popular,
  features,
}) => {
  return (
    <div
      className={`relative bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border ${
        popular
          ? 'border-blue-500/50 scale-105'
          : 'border-slate-700/50'
      } transition-all duration-300 hover:border-blue-500/50 hover:scale-105`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold">{price}</span>
          {period && (
            <span className="text-slate-400">{period}</span>
          )}
        </div>
        <p className="text-slate-400">{description}</p>
      </div>
      <ul className="space-y-4">
        {features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-blue-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
        popular
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'border border-slate-600 hover:border-blue-500'
      }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingPlan;