import "./style.css";

const Button = ({ value, height, width, maxWidth, margin, padding, color, borderRadius }) => {
    return (
        <button className="button--gradient" 
            style={{ 
                margin: margin,
                padding: padding,
                width: width, 
                maxWidth: maxWidth,
                height: height,
                borderRadius: borderRadius,
                color: color,
                cursor: 'pointer',
            }}>
            {value}
        </button>
    )
}

export default Button