import "./style.css"

const Border = ({ width, height, margin, textAlign, padding, cursor, onClick, children }) => {
    return (
        <div>
            <div className="border-gradient"
                onClick={onClick} 
                style={{
                    borderRadius: "20px", 
                    padding: padding, 
                    width: width,  
                    height: height,
                    margin: margin,
                    textAlign: textAlign,
                    cursor: cursor
                }}>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Border