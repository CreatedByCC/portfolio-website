// src/components/Skills.jsx
import projects from '../data/projects'
import techIcons from '../data/techIcons'

function Skills() {
  const allTags = projects.flatMap(p => p.tech || [])
  const exclude = ['API', 'LocalStorage', 'Flexbox', 'GitHub API', 'Multer']
  const uniqueTags = [...new Set(allTags)].filter(tag => !exclude.includes(tag)).sort()

  return (
    <section className="bg-teal-600 py-16 px-4 text-center text-white">
      <h2 className="text-3xl font-bold mb-8">Toolkit</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {uniqueTags.map((tag, i) => (
          <div key={i} className="relative flex justify-center w-20">
            <div className="group flex flex-col items-center">
              <div className="bg-white border border-gray-300 rounded-full p-4 shadow-md transition-transform group-hover:scale-110">
                <img
                  src={`/icons/${techIcons[tag]}`}
                  alt={tag}
                  className="h-10 w-10"
                />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow transition duration-200 whitespace-nowrap pointer-events-none">
                {tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills