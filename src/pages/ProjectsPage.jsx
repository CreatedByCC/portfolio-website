// src/pages/ProjectsPage.jsx
import { useState } from 'react'
import projects from '../data/projects'

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (project.tech || []).some(tag =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <section className="bg-white py-16 px-4 text-gray-800 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-6">All Projects</h2>

      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title, tech, or description..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filtered.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50"
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
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-12">No projects matched your search.</p>
      )}
    </section>
  )
}

export default ProjectsPage