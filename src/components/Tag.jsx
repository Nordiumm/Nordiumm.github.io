function Tag({ icon, children, className }) {
    return (
        <span className={`tag ${className}`}>
            {icon && <img src={icon} alt="" />}
            {children}
        </span>
    );
}

export default Tag;