import { useState } from 'react';
import OwnBuilds from '../components/OwnBuilds';
import Projects from '../components/Projects';
import ProjectSearch from '../components/ProjectSearch';

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="bg-slate-50 text-slate-800">
      {/* Page Intro */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          From original builds to challenge-based projects—everything cooked up during my journey from idea to implementation.
        </p>
      </section>

      {/* 🔍 Search Bar */}
      <div className="max-w-xl mx-auto mb-12 px-4">
        <ProjectSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Personal Projects */}
      <OwnBuilds searchTerm={searchTerm} />

      {/* Learning Projects */}
      <Projects searchTerm={searchTerm} />
    </main>
  );
}

export default ProjectsPage;