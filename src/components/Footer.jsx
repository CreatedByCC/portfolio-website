
function Footer() {
  return (
    <footer className="bg-slate-800 text-white text-center py-6 mt-16">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Chantel. Built with 💻, ✨ and far too many sweets.
        </p>
        <p className="text-xs text-slate-400">
          Icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Icons8</a>
        </p>
    </footer>
  )
}

export default Footer