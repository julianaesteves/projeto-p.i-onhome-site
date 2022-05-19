import "./style.css"

const RlBorder = ({ centerVertical, size, width, height, margin, textAlign, padding, cursor, children }) => {
    return (
        <div className={`rl-border-gradient ${centerVertical} ${size}`}
            style={{
                padding: padding, 
                width: width,  
                height: height,
                margin: margin,
                textAlign: textAlign,
                cursor: cursor,
            }}>
            {children}
        </div>
    )
}

export default RlBorder