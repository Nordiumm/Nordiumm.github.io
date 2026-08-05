import "./App.css";

import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/tags.css";
import "./styles/projects.css";
import "./styles/stats.css";
import "./styles/socials.css"
import "./styles/github.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import GithubStats from "./components/GithubStats";

function App() {

    return (
        <>
            <Navbar />

            <main className="container">

                <Hero />

                <About />

                <Skills />
                
                <Projects />

                <GithubStats />

                <Socials />

            </main>
        </>
    );
}


export default App;