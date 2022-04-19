import "./style.css"

const Input = ({ type, width, height, margin, placeholder, borderRadius, value, onChange }) => {

    return (
        <div>
            <input type="text" 
                className="border-gradient-input" 
                style={{ 
                    width: width,  
                    height: height,
                    margin: margin,
                    borderRadius: borderRadius        
                }}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default Input