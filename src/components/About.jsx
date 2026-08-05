import Tag from "./Tag";

import pronounsIcon from "../assets/icons/tags/pronouns.svg";
import locationIcon from "../assets/icons/tags/location.svg";
import transIcon from "../assets/icons/tags/trans.svg"


function About() {

    return (

        <section id="about">

            <h2>
                About Me
            </h2>


            <div className="tags">


                <Tag
                    icon={transIcon}
                    className="pronouns"
                >
                    She/Her
                </Tag>


                <Tag
                    className="trans"
                >
                    Transgirl
                </Tag>



                <Tag
                    icon={locationIcon}
                    className="location"
                >
                    Sweden, Stockholm
                </Tag>



                <Tag
                    className="age"
                >
                    17 years old
                </Tag>


            </div>



            <p>
                Hi! I'm Jessie, also known online as Nordiumm. I'm a developer who enjoys creating Minecraft mods, software projects, and learning how different systems work.
            </p>

            <p>
                I started my development journey with Lua, experimenting with programming and creating small projects. Over time, I moved into Java development and Minecraft modding, where I began building larger projects and improving my understanding of software development.
            </p>

            <p>
                I mainly work with Java, Fabric modding, Python, and web development. I enjoy building tools, experimenting with ideas, and improving my skills through personal projects.
            </p>

            <p>
                Currently, I'm focusing on Minecraft mod development, software development, and learning more about systems, programming, and new technologies.
            </p>


        </section>

    );

}


export default About;