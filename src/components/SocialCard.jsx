function SocialCard({
    name,
    username,
    description,
    url,
    icon,
    className
}) {

    return (
        <a
            className={`social-card ${className}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="social-header">
                <img
                    src={icon}
                    alt={name}
                />
                <div>
                    <h3>{name}</h3>
                    <span>{username}</span>
                </div>
            </div>
            <p>
                {description}
            </p>
            <div className="social-link">
                [ Visit ]
            </div>
        </a>
    );
}

export default SocialCard;