import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tech, image, github, demo }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-md border border-slate-700 hover:shadow-purple-600/20 transition-all duration-300 bg-slate-800/40 h-full flex flex-col">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay with buttons */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1 backdrop-blur-md transition"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1 backdrop-blur-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-blue-500/10 text-blue-300 text-xs px-2 py-1 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
