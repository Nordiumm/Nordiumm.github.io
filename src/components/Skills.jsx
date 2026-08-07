import Tag from "./Tag";


// Languages

import javaIcon from "../assets/icons/languages/java.svg";
import htmlIcon from "../assets/icons/languages/html.svg";
import cssIcon from "../assets/icons/languages/css.svg";
import javascriptIcon from "../assets/icons/languages/javascript.svg";
import luaIcon from "../assets/icons/languages/lua.svg"
import luauIcon from "../assets/icons/languages/luau.svg"

// Learning

import pythonIcon from "../assets/icons/languages/python.svg";
import rustIcon from "../assets/icons/languages/rust.svg";
import typescriptIcon from "../assets/icons/languages/typescript.svg";
import nodejsIcon from "../assets/icons/languages/nodejs.svg";

// Tools

import reactIcon from "../assets/icons/frameworks/react.svg";
import fabricIcon from "../assets/icons/frameworks/fabric.png";
import gradleIcon from "../assets/icons/tools/gradle.svg";
import gitIcon from "../assets/icons/tools/git.svg";
import githubIcon from "../assets/icons/tools/github.svg";
import vscodeIcon from "../assets/icons/tools/vscode.svg";
import intellijIcon from "../assets/icons/tools/intellij.svg";



function Skills() {


    const languages = [
        {
            name: "Java",
            className: "java",
            icon: javaIcon
        },
        {
            name: "HTML",
            className: "html",
            icon: htmlIcon
        },
        {
            name: "CSS",
            className: "css",
            icon: cssIcon
        },
        {
            name: "JavaScript",
            className: "javascript",
            icon: javascriptIcon
        },
        {
            name: "Lua",
            className: "lua",
            icon: luaIcon
        },
        {
            name: "Luau",
            className: "luau",
            icon: luauIcon
        }

    ];



    const learning = [
        {
            name: "Python",
            className: "python",
            icon: pythonIcon
        },
        {
            name: "Rust",
            className: "rust",
            icon: rustIcon
        },
        {
            name: "TypeScript",
            className: "typescript",
            icon: typescriptIcon
        },
        {
            name: "Node JS",
            className: "nodejs",
            icon: nodejsIcon
        },
    ];



    const tools = [
        {
            name: "React",
            className: "react",
            icon: reactIcon
        },
        {
            name: "Fabric",
            className: "fabric",
            icon: fabricIcon
        },
        {
            name: "Gradle",
            className: "gradle",
            icon: gradleIcon
        },
        {
            name: "Git",
            className: "git",
            icon: gitIcon
        },
        {
            name: "GitHub",
            className: "github",
            icon: githubIcon
        },
        {
            name: "IntelliJ IDEA",
            className: "intellij",
            icon: intellijIcon
        },
        {
            name: "VS Code",
            className: "vscode",
            icon: vscodeIcon
        }
    ];



    return (

        <section id="skills">


            <h2>
                Skills & Technologies
            </h2>



            <h3>
                Languages
            </h3>


            <div className="tags">

                {
                    languages.map((language) => (

                        <Tag
                            key={language.name}
                            icon={language.icon}
                            className={language.className}
                        >

                            {language.name}

                        </Tag>

                    ))
                }

            </div>




            <h3>
                Currently Learning
            </h3>


            <div className="tags">

                {
                    learning.map((skill) => (

                        <Tag
                            key={skill.name}
                            icon={skill.icon}
                            className={skill.className}
                        >

                            {skill.name}

                        </Tag>

                    ))
                }

            </div>




            <h3>
                Tools & Frameworks
            </h3>


            <div className="tags">

                {
                    tools.map((tool) => (

                        <Tag
                            key={tool.name}
                            icon={tool.icon}
                            className={tool.className}
                        >

                            {tool.name}

                        </Tag>

                    ))
                }

            </div>



        </section>

    );

}


export default Skills;