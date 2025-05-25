
import { useState, useEffect } from "react";

interface TechIconProps {
  tech: {
    name: string;
    icon: string;
    color: string;
    category: string;
  };
  index: number;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}

export const TechIcon = ({ tech, index, isHovered, onHover }: TechIconProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group cursor-pointer transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative">
        {/* Glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-110`}
        />
        
        {/* Main card */}
        <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 group-hover:bg-gray-700/50 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600/50">
          {/* Icon */}
          <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
            {tech.icon}
          </div>
          
          {/* Name */}
          <h3 className="text-white font-medium text-center text-sm group-hover:text-white transition-colors duration-300">
            {tech.name}
          </h3>
          
          {/* Category tag */}
          <div className="text-xs text-gray-500 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tech.category}
          </div>
        </div>

        {/* Animated border */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${tech.color} p-[1px]`}>
          <div className="w-full h-full bg-gray-800/90 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
