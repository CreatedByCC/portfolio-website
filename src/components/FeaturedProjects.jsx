import { Link } from 'react-router-dom'
import projects from '../data/projects'

function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="bg-white py-16 px-4 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {featured.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2 text-teal-600">{project.title}</h3>
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
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/projects"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          View All Projects
        </Link>
      </div>
    </section>
  )
}

export default FeaturedProjects