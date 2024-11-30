import React from 'react';

const ProjectCard = ({ project }) => (
  <a 
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-2xl shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
  >
    <div className="aspect-video relative overflow-hidden bg-gray-100 flex items-center justify-center">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-auto max-w-full object-contain"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export default ProjectCard;