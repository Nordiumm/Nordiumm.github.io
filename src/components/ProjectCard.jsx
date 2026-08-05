function ProjectCard({ title, description, tags, links, status }) {

    console.log("Tags:", tags);
    console.log("Links:", links);

    return (
        <article className="project">

            <div className="project-title">

                <h3>
                    {title}
                </h3>

                {status && (
                    <span className={`tag ${status.className}`}>
                        {status.name}
                    </span>
                )}

            </div>


            <p>
                {description}
            </p>


            <div className="tags">

                {tags.map((tag) => (

                    <span
                        className={`tag ${tag.className}`}
                        key={tag.name}
                    >

                        {tag.icon && (
                            <img
                                src={tag.icon}
                                alt=""
                            />
                        )}

                        {tag.name}

                    </span>

                ))}

            </div>


            <div className="project-links">

                {links.map((link) => (

                    <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={link.name}
                    >

                        {link.icon && (
                            <img
                                src={link.icon}
                                alt={link.name}
                            />
                        )}

                    </a>

                ))}

            </div>

        </article>
    );

}

export default ProjectCard;