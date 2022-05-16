import "./style.css";

const Button = ({ value, height, width, margin, borderRadius, onClick }) => {
    return (
        <button onClick={onClick} className="button--gradient" 
            style={{ 
                width: width, 
                height: height,
                margin: margin,
                borderRadius: borderRadius
            }}>
            {value}
        </button>
    )
}

export default Button