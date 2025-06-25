// src/components/ProjectSearch.jsx
function ProjectSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="max-w-md mx-auto mb-10">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>
  );
}

export default ProjectSearch;