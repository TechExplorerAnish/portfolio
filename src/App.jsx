import Header from "./components/pages/Header";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Projects from "./components/pages/Project";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";

const App=()=> {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </main>
  )
}
export default App;
