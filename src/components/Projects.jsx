import allProjects from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects({ searchTerm }) {
  const filteredProjects = allProjects.filter(
    (project) =>
      project.type === 'learning' &&
      (project.title + project.tech.join(' '))
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <section id="projects" className="bg-white py-16 px-4 text-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Cooked Up While Learning</h2>
        <p className="text-slate-500 text-base italic max-w-xl mx-auto">
          A dash of curiosity, a pinch of code—served fresh from tutorials, challenges, and late-night ah-ha moments.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredProjects.length === 0 ? (
          <p className="text-slate-500 text-center col-span-full italic">
            😕 No learning projects match "<strong>{searchTerm}</strong>". Try a different keyword!
          </p>
        ) : (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              demo={project.demo}
              image={project.image}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;