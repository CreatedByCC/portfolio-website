function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="block h-full p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-50 text-left">
      <h3 className="text-2xl font-semibold mb-2 text-teal-600">{title}</h3>

      {tech && (
        <div className="flex flex-wrap mb-4 gap-2">
          {tech.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="text-gray-600 mb-4">{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on GitHub →
        </a>
      )}
    </div>
  );
}

export default ProjectCard;