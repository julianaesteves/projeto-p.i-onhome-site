import GradientText from "../../../../../components/GradientText";

import './style.css';

const TextWithImage = (props) => {
    return (
        <div className="textWithImage" style={{ flexDirection: props.reverse }}>
                <GradientText 
                    label={props.label} 
                    title={props.title} 
                    subtitle={props.subtitle} 
                    fontSizeTitle={props.fontSizeTitle} 
                    fontSizeLabel={props.fontSizeLabel}
                    className={props.className}
                    classNameTitle={props.classNameTitle}
                    classNameSubtitle={props.classNameSubtitle}
                    textAlign={"left"}
                />
            <img src={props.image} alt={props.alt} />
        </div>
    );
};

export default TextWithImage;