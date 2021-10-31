const Button = ({ label, onClick, type }) => {
    return (
        <button
            className={type === "primary" ? "primaryButton" : "secondaryButton"}
            onChange={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
