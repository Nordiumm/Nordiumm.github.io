import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";

import githubIcon from "../assets/icons/tools/github.svg";
import modrinthIcon from "../assets/icons/tools/modrinth.svg";

import javaIcon from "../assets/icons/languages/java.svg";
import javascriptIcon from "../assets/icons/languages/javascript.svg";
import cssIcon from "../assets/icons/languages/css.svg";

import fabricIcon from "../assets/icons/frameworks/fabric.png";
import reactIcon from "../assets/icons/frameworks/react.svg";


function Projects() {


    const projects = [

        {
            title: "NordiummOptimizer",

            media: {
            },


            status: {
                name: "Experimental",
                className: "experimental"
            },


            description:
            "A Minecraft Fabric optimization mod focused on improving rendering performance and reducing unnecessary entity rendering.",


            meta: [
            ],


            tags: [

                {
                    name: "Java",
                    className: "java",
                    icon: javaIcon
                },

                {
                    name: "Fabric",
                    className: "fabric",
                    icon: fabricIcon
                },

                {
                    name: "Minecraft",
                    className: "minecraft"
                },

                {
                    name: "Client-side",
                    className: "client-side"
                }

            ],


            links: [

                {
                    name: "GitHub",
                    url:
                    "https://github.com/Nordiumm/NordiummOptimizer",
                    icon: githubIcon
                },

                {
                    name: "Modrinth",
                    url:
                    "https://modrinth.com/user/Nordiumm",
                    icon: modrinthIcon
                }

            ]

        },



        {
            title: "Nordiumm Portfolio",


            media: {
            },


            status: {
                name: "Active",
                className: "active"
            },


            description:
            "A personal developer portfolio built with React to showcase my projects, skills, and experience with software development, Minecraft modding, and web technologies.",


            meta: [
            ],


            tags: [

                {
                    name: "React",
                    className: "react",
                    icon: reactIcon
                },

                {
                    name: "JavaScript",
                    className: "javascript",
                    icon: javascriptIcon
                },

                {
                    name: "CSS",
                    className: "css",
                    icon: cssIcon
                },

                {
                    name: "Website",
                    className: "website"
                },

                {
                    name: "Open Source",
                    className: "open-source"
                }

            ],


            links: [

                {
                    name: "GitHub",
                    url:
                    "https://github.com/Nordiumm/Nordiumm.github.io",
                    icon: githubIcon
                }

            ]

        }

    ];



    const [currentProject, setCurrentProject] = useState(0);



    function nextProject() {

        setCurrentProject(
            current =>
            (current + 1) % projects.length
        );

    }



    function previousProject() {

        setCurrentProject(
            current =>
            current === 0
            ? projects.length - 1
            : current - 1
        );

    }



    useEffect(() => {


        const timer = setInterval(() => {

            nextProject();

        }, 10000);



        return () => {

            clearInterval(timer);

        };


    }, [currentProject]);



    return (

        <section id="projects">


            <h2>
                Projects
            </h2>



            <div className="project-slider">


                <button

                    className="project-arrow left"

                    onClick={previousProject}

                >

                    ←

                </button>




                <ProjectCard

                    {...projects[currentProject]}

                />




                <button

                    className="project-arrow right"

                    onClick={nextProject}

                >

                    →

                </button>


            </div>





            <div className="project-dots">


                {projects.map((project, index) => (

                    <button

                        key={project.title}


                        className={
                            index === currentProject
                            ? "dot active"
                            : "dot"
                        }


                        onClick={() => {

                            setCurrentProject(index);

                        }}


                        aria-label={
                            `Show ${project.title}`
                        }

                    />

                ))}


            </div>


        </section>

    );

}


export default Projects;