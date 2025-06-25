import OwnBuilds from '../components/OwnBuilds';
import Projects from '../components/Projects';

function ProjectsPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      {/* Page Intro */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Fresh Out of the Brain Oven</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          From original builds to challenge-based projects—everything cooked up during my journey from idea to implementation.
        </p>
      </section>

      {/* Personal Projects */}
      <OwnBuilds />

      {/* Learning Projects */}
      <Projects />
    </main>
  );
}

export default ProjectsPage;