import { useEffect, useState } from "react";

import profileImage from "../assets/images/profile/pfp.png";

import githubIcon from "../assets/icons/tools/github.svg";
import modrinthIcon from "../assets/icons/tools/modrinth.svg";
import xIcon from "../assets/icons/social/x.svg";


function Hero() {

    const titles = [
        {
            text: "Minecraft Mod & Plugin Developer",
            className: "minecraft-font"
        },
        {
            text: "Software Developer",
            className: "developer-font"
        },
        {
            text: "Java Developer",
            className: "developer-font"
        },
        {
            text: "Fabric Mod Developer",
            className: "minecraft-font"
        },
        {
            text: "Learning Python",
            className: "code-font"
        },
        {
            text: "Learning Rust",
            className: "code-font"
        },
        {
            text: "React Developer",
            className: "developer-font"
        },
        {
            text: "Open Source Developer",
            className: "developer-font"
        }
    ];


    const [titleIndex, setTitleIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);


    useEffect(() => {

        const current = titles[titleIndex];


        const speed = deleting ? 40 : 80;


        const timer = setTimeout(() => {


            if (!deleting) {

                setText(
                    current.text.substring(
                        0,
                        text.length + 1
                    )
                );


                if (text.length + 1 === current.text.length) {

                    setTimeout(() => {
                        setDeleting(true);
                    }, 1500);

                }


            } else {


                setText(
                    current.text.substring(
                        0,
                        text.length - 1
                    )
                );


                if (text.length === 0) {

                    setDeleting(false);

                    setTitleIndex(
                        (titleIndex + 1) % titles.length
                    );

                }

            }


        }, speed);


        return () => clearTimeout(timer);


    }, [text, deleting, titleIndex]);



    return (

        <header className="hero">


            <div className="profile-picture">

                <img 
                    src={profileImage}
                    alt="Profile"
                />

            </div>


            <div className="name-container">

                <h1 className="name-font">
                    Nordiumm
                </h1>

            </div>



            <p>

                <span className={titles[titleIndex].className}>

                    {text}

                </span>


                <span className="cursor">
                    |
                </span>


            </p>



            <div className="links">

                <a href="https://github.com/Nordiumm">
                    <img src={githubIcon} alt="GitHub"/>
                </a>


                <a href="https://modrinth.com/user/Nordiumm">
                    <img src={modrinthIcon} alt="Modrinth"/>
                </a>


                <a href="https://x.com/Nordiumm_">
                    <img src={xIcon} alt="X"/>
                </a>

            </div>


        </header>

    );

}


export default Hero;