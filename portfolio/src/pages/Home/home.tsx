import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Projects from "./sections/Projects/projects"
import Experience from "./sections/Experience/experience"

const Home = () => {


  return (
    <>
      <NavBar />
      <Hero/>
      <About />  
      <Projects />
      <Experience />
    </>
  )
}

export default Home
