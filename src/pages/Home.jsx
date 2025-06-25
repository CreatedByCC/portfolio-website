import Hero from '../components/Hero'
import Skills from '../components/Skills'
import FeaturedProjects from '../components/FeaturedProjects'
import About from '../components/About'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <>
        <Hero />
        <div className="mt-16">
            <About />
        </div>
        <div className="mt-16">
            <Skills />
        </div>
        <FeaturedProjects />
        <Footer />
    </>
  )
}

export default Home