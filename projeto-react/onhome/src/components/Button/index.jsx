import "./style.css";

const Button = ({ value, height, width, margin }) => {
    return (
        <button className="button--gradient" 
            style={{ 
                width: width, 
                height: height,
                margin: margin
            }}>
            {value}
        </button>
    )
}

export default Button