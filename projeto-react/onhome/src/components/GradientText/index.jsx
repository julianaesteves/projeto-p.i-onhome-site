import './style.css';

const GradientText = (props) => {
    const className = props.className ?? "";
    const classNameTitle = props.classNameTitle ?? "";
    const classNameSubtitle = props.classNameSubtitle ?? "";
    const textAlign = props.textAlign ? "center" : "left";
    const marginHorizontal = textAlign === "center" ? "auto" : "0";
    
    return (
        <div className={`text ${className}`} style={{ textAlign: props.textAlign }}>
            <div className="label" style={{ fontSize: `${props.fontSizeLabel}px` }}>
                {props.label ?? ''}
            </div>
            <div className={`title ${classNameTitle}`} 
                style={{ 
                    margin: marginHorizontal, 
                    fontSize: `${props.fontSizeTitle}px`,
                    fontWeight: props.fontWeight,
                }}>
                {props.title ?? ''}
            </div>
            <div className={`subtitle ${classNameSubtitle}`} 
                style={{ 
                    fontSize: `${props.fontSizeSubtitle}px` 
                }}>
                {props.subtitle ?? ''}
            </div>
        </div>
    );
};

export default GradientText;