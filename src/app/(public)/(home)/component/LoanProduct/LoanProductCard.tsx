import { Icons } from '@/components/core';
import React from 'react';

const LoanProductCard = ({ icon: Icon, title, description, features, buttonText = "Learn More", onButtonClick }) => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 max-w-sm">
      {/* Icon */}
      <div className="bg-white/20 rounded-xl p-3 w-fit mb-4">
        <Icon size={32} className="text-white" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      {/* Description */}
      <p className="text-emerald-50 text-sm mb-4 leading-relaxed">{description}</p>
      
      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-emerald-50">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <button 
        onClick={onButtonClick}
        className="w-full bg-white text-emerald-700 font-semibold py-3 px-4 rounded-lg hover:bg-emerald-50 transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {buttonText}
        <Icons.Phone size={16} />
      </button>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full -z-0"></div>
      <div className="absolute bottom-4 right-8 w-12 h-12 bg-white/5 rounded-full -z-0"></div>
    </div>
  );
};

export default LoanProductCard;