import allProjects from '../data/projects';
import ProjectCard from './ProjectCard';

function OwnBuilds() {
  const personalProjects = allProjects.filter(
    (project) => project.type === 'personal'
  );

  return (
    <section id="own-builds" className="bg-white py-20 px-4 text-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Fresh Out of the Brain Oven</h2>
        <p className="text-slate-500 text-base italic">
          More projects loading... stay tuned!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {personalProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default OwnBuilds;