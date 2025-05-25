
import { useState } from "react";
import { Code, Palette, Database, Cloud, Zap, Shield } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern React applications with TypeScript, responsive design, and optimal performance",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server architectures with robust APIs and database management",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deployment automation, containerization, and cloud infrastructure management",
    technologies: ["AWS", "Docker", "Vercel", "GitHub Actions"],
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces with modern design principles and accessibility",
    technologies: ["Figma", "Tailwind", "Framer Motion", "Responsive Design"],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization techniques for fast, efficient, and scalable applications",
    technologies: ["Code Splitting", "Lazy Loading", "Caching", "Bundle Analysis"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Implementation of security best practices and vulnerability protection",
    technologies: ["Authentication", "Authorization", "HTTPS", "Data Validation"],
    color: "from-red-500 to-pink-500"
  }
];

export const SkillsGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Core Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Specialized expertise across the full development lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000`}
              />
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group-hover:bg-gray-700/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/30 group-hover:border-gray-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
