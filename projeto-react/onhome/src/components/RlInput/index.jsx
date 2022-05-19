import "./style.css"

const RlInput = ({ name, type, width, maxWidth, height, margin, placeholder, borderRadius, value, onBlur, onChange }) => {

    return (
        <input 
            className="border-gradient-input" 
            style={{
                width: width,
                maxWidth: maxWidth,  
                height: height,
                margin: margin,
                borderRadius: borderRadius,
                outline: "none"        
            }}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            onBlur={onBlur}
        />
    )
}

export default RlInput