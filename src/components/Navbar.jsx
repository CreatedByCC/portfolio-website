import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const linkClass = (path) =>
    `px-4 py-2 rounded-md transition ${
      location.pathname === path
        ? 'bg-teal-500 text-white'
        : 'text-teal-600 hover:bg-teal-100'
    }`

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-teal-600">
            CreatedByCC
        </Link>
        <div className="space-x-4">
          <Link to="/" className={linkClass('/')}>
            Home
          </Link>
          <Link to="/projects" className={linkClass('/projects')}>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar