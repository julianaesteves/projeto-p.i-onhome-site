import "./style.css"

const LicencaCards = ({ cardText, imageUrl }) => {
    return (
        <div className="licenca-cardContainer">
            <div className="imgCard">
                <img src={imageUrl}></img>

            </div>
                <div className="licenca-gradientCard">
                    {cardText}
                </div>
        </div>
    )
}

export default LicencaCards
