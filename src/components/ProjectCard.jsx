function ProjectCard({ title, description, tech, link, demo, image }) {
  const fallbackImage = "./project-images/no-preview.jpg"; // Update path and extension if needed

  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg border border-gray-200 h-80">
      <img
        src={image || fallbackImage}
        alt={`${title} preview`}
        className={`w-full h-full object-cover ${
          image ? 'object-top' : 'object-center'
        } transform group-hover:scale-105 transition-transform duration-300`}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center px-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>

        {tech?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tech.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-teal-600 text-white px-2 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-green-500 rounded hover:bg-green-600 transition-colors"
            >
              <i className="fas fa-eye" /> View
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 transition-colors"
            >
              <i className="fab fa-github" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;