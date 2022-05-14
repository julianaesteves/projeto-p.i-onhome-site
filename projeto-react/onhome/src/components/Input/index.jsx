import "./style.css"

const Input = ({ type, width, height, margin, placeholder, borderRadius, value, onChange, onInput }) => {

    return (
        <div>
            <input type="text" 
                className="border-gradient-input" 
                style={{ 
                    width: width,  
                    height: height,
                    margin: margin,
                    borderRadius: borderRadius,
                    outline: "none"        
                }}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onInput={onInput}
            />
        </div>
    )
}

export default Input