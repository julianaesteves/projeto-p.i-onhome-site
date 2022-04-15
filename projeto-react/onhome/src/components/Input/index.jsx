import "./style.css"

const Input = ({ width, height, margin, placeholder, borderRadius }) => {

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
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input