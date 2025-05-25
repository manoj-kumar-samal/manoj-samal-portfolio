
import { useState } from "react";
import { TechIcon } from "./TechIcon";

const techStack = [
  { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-600", category: "Language" },
  { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-500", category: "Language" },
  { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-500", category: "Frontend" },
  { name: "Tailwind", icon: "TW", color: "from-teal-400 to-teal-500", category: "Styling" },
  { name: "Node.js", icon: "N", color: "from-green-500 to-green-600", category: "Backend" },
  { name: "Express", icon: "E", color: "from-gray-600 to-gray-700", category: "Backend" },
  { name: "MongoDB", icon: "M", color: "from-green-600 to-green-700", category: "Database" },
  { name: "Vercel", icon: "▲", color: "from-black to-gray-800", category: "Deploy" },
  { name: "Git", icon: "G", color: "from-orange-500 to-orange-600", category: "Tools" },
  { name: "VS Code", icon: "VS", color: "from-blue-600 to-blue-700", category: "Tools" },
  { name: "AWS", icon: "AWS", color: "from-orange-400 to-orange-500", category: "Cloud" },
  { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-500", category: "DevOps" },
];

const categories = ["All", "Language", "Frontend", "Backend", "Styling", "Database", "Deploy", "Tools", "Cloud", "DevOps"];

export const TechShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filteredTech = selectedCategory === "All" 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive collection of modern development tools and frameworks
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredTech.map((tech, index) => (
            <TechIcon
              key={tech.name}
              tech={tech}
              index={index}
              isHovered={hoveredTech === tech.name}
              onHover={setHoveredTech}
            />
          ))}
        </div>

        {/* Hover Details */}
        {hoveredTech && (
          <div className="mt-8 text-center">
            <div className="inline-block bg-gray-800/80 backdrop-blur-sm rounded-lg px-6 py-4 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">{hoveredTech}</h3>
              <p className="text-gray-400">
                {techStack.find(t => t.name === hoveredTech)?.category} Technology
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
