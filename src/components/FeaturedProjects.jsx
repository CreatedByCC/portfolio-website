import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard'; 
import projects from '../data/projects';
import useWindowWidth from '../hooks/useWindowWidth';


function FeaturedProjects() {
  const width = useWindowWidth();
  const featured = width < 1280 ? projects.slice(0, 2) : projects.slice(0, 3);

  return (
    <section className="bg-white py-16 px-4 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
        {featured.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            demo={project.demo}
            link={project.link}
          />
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
  );
}

export default FeaturedProjects;