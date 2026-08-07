function ProjectCard({

    title,

    description,

    tags = [],

    links = [],

    status,

    media,

    meta = []

}) {


    return (

        <article className="project">



            {media && (

                <div className="project-media">


                    {media.type === "image" && (

                        <img

                            className="project-image"

                            src={media.src}

                            alt={`${title} preview`}

                        />

                    )}



                    {media.type === "youtube" && (

                        <iframe

                            className="project-video"

                            src={media.src}

                            title={`${title} video`}

                            allowFullScreen

                        />

                    )}


                </div>

            )}







            <div className="project-title">


                <h3>

                    {title}

                </h3>




                {status && (

                    <span

                        className={`tag ${status.className}`}

                    >

                        {status.name}

                    </span>

                )}


            </div>







            <p>

                {description}

            </p>








            {meta.length > 0 && (

                <div className="project-meta">


                    {meta.map((item) => (

                        <span

                            key={item}

                        >

                            {item}

                        </span>

                    ))}


                </div>

            )}








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

                        data-name={link.name}

                        aria-label={link.name}

                    >


                        <img

                            src={link.icon}

                            alt={link.name}

                        />


                    </a>

                ))}


            </div>



        </article>

    );

}


export default ProjectCard;