import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="bg-white py-16 px-4 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-50"
          >
            <h3 className="text-2xl font-semibold mb-2 text-teal-600">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            {project.tech && (
            <div className="flex flex-wrap mt-4 gap-2">
                {project.tech.map((tag, tagIndex) => (
                <span
                    key={tagIndex}
                    className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full font-medium"
                >
                    {tag}
                </span>
                ))}
            </div>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects