import SocialCard from "./SocialCard";

import githubIcon from "../assets/icons/tools/github.svg"
import modrinthIcon from "../assets/icons/tools/modrinth.svg"
import twitchIcon from "../assets/icons/social/twitch.svg"
import youtubeIcon from "../assets/icons/social/youtube.svg"
import xIcon from "../assets/icons/social/x.svg"
import steamIcon from "../assets/icons/social/steam.svg"
import namemcIcon from "../assets/icons/social/namemc.svg"

function Socials() {
    const socials = [
        {
            name: "GitHub",
            username: "Nordiumm",
            description: "Source code & open source projects",
            url: "https://github.com/Nordiumm",
            icon: githubIcon,
            className: "github"
        },
        {
            name: "Modrinth",
            username: "Nordiumm",
            description: "Minecraft Mods, Plugins, Datapacks and ResourcePacks",
            url: "https://modrinth.com/user/Nordiumm",
            icon: modrinthIcon,
            className: "modrinth"
        },
        {
            name: "Twitch",
            username: "Nordiumm",
            description: "Funny streams and gameplay content",
            url: "https://twitch.tv/Nordiumm",
            icon: twitchIcon,
            className: "twitch"
        },
        {
            name: "Youtube",
            username: "Nordiumm",
            description: "Devlogs, Tutorials and Showcases",
            url: "https://youtube.com/@nordiumm",
            icon: youtubeIcon,
            className: "youtube"
        },
        {
            name: "X",
            username: "NordiummDev",
            description: "Updates, thoughts and development posts",
            url: "https://x.com/nordiummdev",
            icon: xIcon,
            className: "x"
        },
        {
            name: "Steam",
            username: "Nordiumm",
            description: "Games, activity and my gaming journey",
            url: "https://steamcommunity.com/id/nordiumm/",
            icon: steamIcon,
            className: "steam"
        },
        {
            name: "NameMC",
            username: "Nordiumm",
            description: "Minecraft profile & skin history.",
            url: "https://namemc.com/profile/Nordiumm.2",
            icon: namemcIcon,
            className: "namemc"
        }
    ];

    return (
        <section id="socials">
            <h2>Socials</h2>
            <div className="social-grid">
                {socials.map((social) => (
                    <SocialCard
                        key={social.name}
                        {...social}
                    />
                ))}
            </div>
        </section>
    );
}

export default Socials;