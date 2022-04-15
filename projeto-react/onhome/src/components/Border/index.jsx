import "./style.css"

const Border = ({width, height, margin, children}) => {

    return (
        <div>
            <div className="border-gradient" 
                style={{ 
                    borderRadius: "20px", 
                    padding: "40px", 
                    width: width,  
                    height: height,
                    margin: margin
                }}>
                {/* {text}
                {validate} */}
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Border